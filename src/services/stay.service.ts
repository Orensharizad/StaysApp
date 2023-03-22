import { StayFilter } from "@/models/stay";
import { httpService } from "./http.service";


export const stayService = {
    query,
    getById,
    getEmtpyFilter

}

function query(filterBy: StayFilter) {
    return httpService.get('stay')

}

function getById(stayId: any) {
    return httpService.get('stay/' + stayId)

}

function getEmtpyFilter(): StayFilter {
    return { type: '', minPrice: "", maxPrice: "" }
}