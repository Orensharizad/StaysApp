import { Stay, StayFilter } from "@/models/stay";
import { httpService } from "./http.service";


export const stayService = {
    query,
    getById,
    getEmtpyFilter,
    getLocations,
    formatDateRange

}

async function query(filterBy: StayFilter) {
    const queryParams = `?type=${filterBy.type}&minPrice=${filterBy.minPrice}&maxPrice=${filterBy.maxPrice}`
    const stays: Stay[] = await httpService.get('stay' + queryParams)
    stays.forEach(stay => stay.dates = _generateRandomDateRange())
    let filterdStays = [...stays]

    if (filterBy.type) {
        filterdStays = filterdStays.filter(stay => stay.types.includes(filterBy.type))
    }
    if (filterBy.minPrice > 0) {
        filterdStays = filterdStays.filter((stay: Stay) => stay.price > filterBy.minPrice)
    }
    if (filterBy.maxPrice) {
        filterdStays = filterdStays.filter((stay: Stay) => stay.price < filterBy.maxPrice)
    }


    return filterdStays
}

function getById(stayId: any) {
    return httpService.get('stay/' + stayId)

}

function getEmtpyFilter(): StayFilter {
    return { type: 'Campers', minPrice: 20, maxPrice: 1000 }
}

function _generateRandomDateRange(): Date[] {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 180)) // Add random number of days (up to 6 months) to current date
    const numDays = Math.floor(Math.random() * 7) + 2 // Generate a random number between 2 and 8
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + numDays - 1) // Set end date based on start date and number of days
    return [startDate, endDate]
}

function getLocations() {
    return [
        {
            title: "I'm Flexible",
            url: 'https://airbnb-in-react.netlify.app/static/media/all.2a49ce1de0a165eaff60.webp'
        },
        {
            title: 'Middle East',
            url: 'https://airbnb-in-react.netlify.app/static/media/all.2a49ce1de0a165eaff60.webp'
        },
        {
            title: 'Italy',
            url: 'https://airbnb-in-react.netlify.app/static/media/italy.b00d91b4b8afceaa4985.webp'
        },
        {
            title: 'South America',
            url: 'https://airbnb-in-react.netlify.app/static/media/south-america.3f32b3945318eb0dbede.webp'
        },
        {
            title: 'France',
            url: 'https://airbnb-in-react.netlify.app/static/media/france.b75cf05b38e6bae34c31.webp'
        },
        {
            title: 'United States',
            url: 'https://airbnb-in-react.netlify.app/static/media/usa.bf6a17c846334e3873a4.webp'
        },
    ]
}

function formatDateRange(startDate: Date, endDate: Date) {
    const startMonth = startDate.toLocaleString("en-US", { month: 'short' }) // Get short month name from start date
    const endMonth = endDate.toLocaleString("en-US", { month: 'short' }) // Get short month name from end date
    return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`
}

