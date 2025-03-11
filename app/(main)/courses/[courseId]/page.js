import { getCourseDetails } from "@/dbQueries/courseQueries";
import { replaceMongoIdInArray } from "@/lib/convertData";
import CourseDetails from "./_components/CourseDetails";
import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import ReletedCourses from "./_components/ReletedCourses";
import Testimonials from "./_components/Testimonials";

const SingleCoursePage = async ({ params: { courseId } }) => {
    const course = await getCourseDetails(courseId);
    return (
        <>
            <CourseDetailsIntro
                title={course.title}
                subtitle={course.subtitle}
                thumbnail={course.thumbnail}
            />
            <CourseDetails course={course} />

            {/* Testimonials */}
            <Testimonials
                testimonails={replaceMongoIdInArray(course?.testimonials)}
            />
            {/* Releated Course */}
            <ReletedCourses />

        </>
    );
};
export default SingleCoursePage;
