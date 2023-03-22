import { StayFilter } from '@/models/stay'
import React, { useRef, useState } from 'react'


type Props = {
    setFilterBy: React.Dispatch<React.SetStateAction<StayFilter>>
}

function ToolBar(props: Props) {
    const imgs: { title: string, url: string }[] = [
        {
            title: 'Campers',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Castles_h3vc82.png'
        },
        {
            title: 'Amazing views',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Amazin_views_g3ndn4.png'
        },
        {
            title: 'Earth homes',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Earth_homes_bao1mc.png'
        },
        {
            title: 'Casas particulares',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Islands_cr82fg.png'
        },
        {
            title: 'Luxe',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Luxe_nbrmyo.png'
        },
        {
            title: 'Skiing',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Mansions_r7upsq.png'
        },
        {
            title: 'OMG',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/OMG_n7p7bq.png'
        },
        {
            title: 'Off-the-grid',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Trending_cwbjcz.png'
        },
        {
            title: 'Boats',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Boats_mq7yia.png'
        },
        {
            title: 'Caves',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817946/Domes_hjecfw.png'
        },
        {
            title: 'Ryokans',
            url: 'https://res.cloudinary.com/dsvs2bgn4/image/upload/v1676817945/Cabins_gnbsvq.png'
        },
    ]

    const onSetFilter = (title: string) => {
        props.setFilterBy(prev => ({ ...prev, type: title }))
    }


    return (
        <section className='tool-bar'>
            <div className="tool-bar-list">
                {imgs.map((img) =>
                    <div onClick={() => onSetFilter(img.title)} className='tool-bar-preview ' key={img.title}>
                        <img src={img.url} alt="" />
                        <p>{img.title}</p>
                    </div>

                )}
            </div>

        </section>
    )
}

export default ToolBar