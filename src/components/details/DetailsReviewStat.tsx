import { Stay } from '@/models/stay'
import React from 'react'

type props = {
    stay: Stay
}

function DetailsReviewStat({ stay }: props) {




    return (
        <section className="details-review-stat">
            {Object.entries(stay.statReviews).map(([key, val], i) => (

                <div className='stay-review-bar'>
                    <p>{key}</p>
                    <div className='bar-wrapper'>
                        <div className='bar'>
                            <div className='bar-complete' style={{ width: `${(val / 5) * 100}%` }}></div>
                        </div>
                        <p className="rating">{val}</p>
                    </div>
                </div>

            ))}
        </section >
    )
}

export default DetailsReviewStat