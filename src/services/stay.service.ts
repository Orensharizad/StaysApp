import { Stay, StayFilter } from "@/models/stay";
import { httpService } from "./http.service";


export const stayService = {
    query,
    getById,
    getEmtpyFilter

}

async function query(filterBy: StayFilter) {
    const queryParams = `?type=${filterBy.type}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}`
    const stays: Stay[] = await httpService.get('stay' + queryParams)
    let FilterdStays = [...stays]

    if (filterBy.type) {
        FilterdStays = FilterdStays.filter(stay => stay.types.includes(filterBy.type))
    }
    if (filterBy.minPrice > 0) {
        FilterdStays = FilterdStays.filter((stay: Stay) => stay.price > filterBy.minPrice)
    }
    if (filterBy.maxPrice) {
        FilterdStays = FilterdStays.filter((stay: Stay) => stay.price < filterBy.maxPrice)
    }

    return FilterdStays
}

function getById(stayId: any) {
    return httpService.get('stay/' + stayId)

}

function getEmtpyFilter(): StayFilter {
    return { type: 'Campers', minPrice: 20, maxPrice: 1000 }
}