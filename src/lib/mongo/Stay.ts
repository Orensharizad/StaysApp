import { ObjectId } from "mongodb";
import { getCollection } from "./index";


export async function getStays(filterBy = {}) {
    try {
        const collection = await getCollection('stay')
        const stays = await collection.find({}).toArray()
        return stays
    } catch (err) {
        console.error('cannot find stays', err)
        throw err
    }

}

export async function getById(stayId: any) {
    try {
        const collection = await getCollection('stay')
        const stay = collection.findOne({ _id: new ObjectId(stayId) })
        return stay
    } catch (err) {
        console.error(`while finding stay ${stayId}`, err)
        throw err
    }
}



