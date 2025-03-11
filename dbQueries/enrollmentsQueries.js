import { replaceMongoIdInArray } from "@/lib/convertData";
import { Course } from "@/models/course-model";
import { Enrollment } from "@/models/enrollments-model";
import { User } from "@/models/user-model";
import { connectMongoDB } from "@/service/mongoConnect";

export const getEnrollmentsForCourse = async (courseId) => {
    try {
        await connectMongoDB();
        const enrollments = await Enrollment.find({ course: courseId })
            .populate({
                path: "course",
                model: Course,
            })
            .populate({
                path: "student",
                model: User,
            })
            .lean();
        return replaceMongoIdInArray(enrollments);
    } catch (error) {
        return error;
    }
};
