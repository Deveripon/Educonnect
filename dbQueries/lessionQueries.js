import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/models/lesson-model";

export const getLesson = async (lessonId) => {
    const lesson = await Lesson.findById(lessonId).lean();
    return replaceMongoIdInObject(lesson);
};
