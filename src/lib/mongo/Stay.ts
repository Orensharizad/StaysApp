import { Stay, StayFilter } from "@/models/stay";
import { stayService } from "@/services/stay.service";
import { ObjectId } from "mongodb";
import { getCollection } from "./index";


export async function getStays(filterBy: StayFilter) {
    console.log('filterBy: ', filterBy);
    try {
        const collection = await getCollection('stay')
        const criteria = _buildCriteria(filterBy)

        const stays = await collection.find({}).toArray()
        // const stays = await collection.aggregate([
        //     {
        //         $match: criteria
        //     },
        // ]).toArray()
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


export async function update(stay: Stay) {
    try {
        const stayToSave = {
            ...stay, dates: stayService.generateRandomDateRange()
        }
        const collection = await getCollection('stay')
        await collection.updateOne({ _id: new ObjectId(stay._id) }, { $set: stayToSave })
        return stayToSave
    } catch (err) {
        console.error(`cannot update stay from service------------ `, err)
        throw err
    }
}





type criteria = {
    type?: Object
    minPrice?: Object
    maxPrice?: Object
}

function _buildCriteria(filterBy: StayFilter) {
    let criteria: criteria = {}

    if (filterBy.type) criteria.type = { $in: filterBy.type.split(',') }
    return criteria
}



