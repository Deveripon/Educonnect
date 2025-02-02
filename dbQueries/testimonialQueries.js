import { replaceMongoIdInArray } from "@/lib/convertData";
import { Testimonial } from "@/models/testimonials-model";
import { connectMongoDB } from "@/service/mongoConnect";

export async function getTestimonialsOfCourse(courseId) {
    try {
        connectMongoDB();
        const testimonials = await Testimonial.find({
            courseId: courseId,
        }).lean();
        return replaceMongoIdInArray(testimonials);
    } catch (error) {
        return error;
    }
}
