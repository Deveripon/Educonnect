import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/lib/convertData";
import { Category } from "@/models/category-model";
import { Course } from "@/models/course-model";
import { Module } from "@/models/modules-model";
import { Quizset } from "@/models/quizset-model";
import { Testimonial } from "@/models/testimonials-model";
import { User } from "@/models/user-model";
import { connectMongoDB } from "@/service/mongoConnect";
import { getEnrollmentsForCourse } from "./enrollmentsQueries";
import { getTestimonialsOfCourse } from "./testimonialQueries";

export const getAllCourses = async () => {
    try {
        await connectMongoDB();
        const courses = await Course.find({})
            .select([
                "title",
                "description",
                "thumbnail",
                "modules",
                "price",
                "category",
                "instructor",
            ])
            .populate({
                path: "modules",
                model: Module,
            })
            .populate({
                path: "category",
                model: Category,
            })
            .populate({
                path: "instructor",
                model: User,
            })
            .populate({
                path: "quizSet",
                model: Quizset,
            })
            .lean();
        return replaceMongoIdInArray(courses);
    } catch (error) {
        return error;
    }
};

export const getCourseDetails = async (id) => {
    try {
        await connectMongoDB();
        const course = await Course.findById(id)
            .populate({
                path: "modules",
                model: Module,
            })
            .populate({
                path: "category",
                model: Category,
            })
            .populate({
                path: "instructor",
                model: User,
            })
            .populate({
                path: "testimonials",
                model: Testimonial,
                populate: {
                    path: "user",
                    model: User,
                },
            })
            .populate({
                path: "quizSet",
                model: Quizset,
            })
            .lean();
        return replaceMongoIdInObject(course);
    } catch (error) {
        return error;
    }
};

export const getCoursesDetailsByInstructor = async (instructorId) => {
    try {
        connectMongoDB();
        const courses = await Course.find({ instructor: instructorId }).lean();
        const enrollments = await Promise.all(
            courses.map(async (course) => {
                const enrollments = await getEnrollmentsForCourse(
                    course._id.toString()
                );
                return enrollments;
            })
        );
        const totalEnrollments = enrollments.reduce(
            (item, currentValue) => item + currentValue?.length,
            0
        );

        const testimonials = await Promise.all(
            courses.map(async (course) => {
                const testimonials = await getTestimonialsOfCourse(
                    course._id.toString()
                );
                return testimonials;
            })
        );

        const totaltestimonials = testimonials.flat();

        const totalRatings =
            totaltestimonials.reduce(
                (item, currentValue) =>
                    Number(item) + Number(currentValue?.rating),
                0
            ) / totaltestimonials.length;

        console.log(`total totalReviews`, totalRatings);

        return {
            courses: courses?.length,
            enrollments: totalEnrollments,
            testimonials: totaltestimonials.length,
            ratings: totalRatings.toPrecision(2),
        };
    } catch (error) {
        return error;
    }
};
