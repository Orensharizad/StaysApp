import React from 'react'

function DetailsAmenities() {

    const amenities: { title: string, url: string }[] = [
        {
            title: 'Wifi',
            url: 'https://air-bxb.onrender.com/assets/wifi.ea607402.svg'
        },
        {
            title: 'Washer',
            url: 'https://air-bxb.onrender.com/assets/washer.bb450002.svg'
        },
        {
            title: 'Carbon monoxide detector',
            url: 'https://air-bxb.onrender.com/assets/carbon.85b10b40.svg'
        },
        {
            title: 'Cooking basics',
            url: 'https://air-bxb.onrender.com/assets/cooking.b19c3728.svg'
        },
        {
            title: 'Essentials',
            url: 'https://air-bxb.onrender.com/assets/essentials.0b083dc2.svg'
        },
        {
            title: 'Iron',
            url: 'https://air-bxb.onrender.com/assets/iron.2316b03e.svg'
        },
        {
            title: 'Dryer',
            url: 'https://air-bxb.onrender.com/assets/dryer.38268a76.svg'
        },
    ]



    return (
        <section className="details-amenities">
            {amenities.map(amenitie =>
                <div key={amenitie.title} className='amenities-item'>
                    <img src={amenitie.url} alt="" />
                    <div className="title">{amenitie.title}</div>
                </div>
            )}

        </section>
    )
}

export default DetailsAmenities