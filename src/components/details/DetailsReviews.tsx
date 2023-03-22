'use client'
import { Review, Stay } from '@/models/stay'
import React, { useEffect, useState } from 'react'
import DetailsReviewPreview from './DetailsReviewPreview'

type props = {
    stay: Stay
}

function DetailsReviews({ stay }: props) {
    const [isShowAll, setIsShowAll] = useState(false)
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        return isShowAll ? setReviews(stay.reviews) : setReviews(stay.reviews.slice(0, 6))
    }, [isShowAll])


    return (

        <section className='details-reviews'>

            <div className="reviews-container">
                {reviews.map((review, idx) =>
                    <DetailsReviewPreview key={idx} review={review} />
                )}
            </div>
            {reviews.length > 6 && <button onClick={() => setIsShowAll(prev => !prev)} className='btn-expand-reviews'>
                {isShowAll ? 'Show Less' : `Show More (${stay.reviews.length - reviews.length})`}
            </button>}

        </section >
        //         
    )
}

export default DetailsReviews