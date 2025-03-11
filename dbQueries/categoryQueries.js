import { replaceMongoIdInArray } from "@/lib/convertData";
import { Category } from "@/models/category-model";
import { connectMongoDB } from "@/service/mongoConnect";

export async function getAllCategories() {
    try {
        await connectMongoDB();
        const categories = await Category.find({}).lean();
        return replaceMongoIdInArray(categories);
    } catch (error) {
        return error;
    }
}
