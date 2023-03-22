import { Stay } from '@/models/stay'
import React from 'react'

type props = {
    stay: Stay
}

function DetailsReviewStat({ stay }: props) {





    return (
        <section className="details-review-stat">
            {Object.entries(stay.statReviews).map(([key, val], i) => (
                <div key={i} className='stat-item'>
                    <div className="title">{key}</div>
                    <progress max="5" value={val}></progress>
                    <p>{val}</p>
                </div>

            ))}
        </section >
    )
}

export default DetailsReviewStat