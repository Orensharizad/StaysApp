export interface Stay {
    _id: string
    name: string
    type: string
    imgUrls: string[]
    price: number
    summary: string
    capacity: number
    amenities: string[]
    bathrooms: number
    bedrooms: number
    roomType: string
    host: Host
    loc: Loc
    reviews: Review[]
    likedByUsers: any[]
    types: string[]
    statReviews: StatReviews
    dates: Date[]
}

export interface StatReviews {
    Cleanliness: number
    Communication: number
    CheckIn: number
    Accuracy: number
    Location: number
    Value: number
}

export interface Review {
    at: string
    by: By
    txt: string
}

export interface By {
    _id: string
    fullname: string
    imgUrl: string
    id: string
}

export interface Loc {
    country: string
    countryCode: string
    city: string
    address: string
    lat: number
    lan: number
}

export interface Host {
    _id: string
    fullname: string
    location: string
    about: string
    responseTime: string
    thumbnailUrl: string
    pictureUrl: string
    isSuperhost: boolean
    id: string
}

export interface StayFilter {
    type: string
    minPrice: string | number
    maxPrice: string | number
    searchBy?: SearchBy | undefined
}

export interface SearchBy {
    destination?: string
    startDate?: any
    endDate?: any
    guests?: number

}

export interface StayState {
    stay: StayFilter
}

