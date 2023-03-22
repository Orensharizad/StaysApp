'use client'
import { Review } from '@/models/stay'
import React, { useEffect, useState } from 'react'


type props = {
    review: Review
}

function DetailsReviewPreview({ review }: props) {
    const [isReadMore, setIsReadMore] = useState(false)
    const [isLessDesc, setIsLessDesc] = useState(false)
    const [txt, setTxt] = useState('')

    useEffect(() => {
        let txt = !isLessDesc ? truncate(review.txt) : review.txt
        setTxt(txt)

    }, [isLessDesc])


    function truncate(str: string,): string {
        const n = 150
        return (!isLessDesc && str.length > n) ? str.substring(0, n - 1) + '...' : str
    }


    return (
        <section className='details-review-preview'>
            <div className="main-user-info">
                <img className='review-img' src={review.by.imgUrl} alt="" />
                <div className="sub-user-info">
                    <h3 className="user-title">{review.by.fullname}</h3>
                </div>
            </div>
            <div>
                <p className='review-desc'>{txt}</p>
                {txt.length > 120 &&
                    <>
                        <button onClick={() => setIsLessDesc(prev => !prev)} className='btn-show'>Show More</button>

                    </>}

            </div>
            {/* <div class="main-user-info">
                <img [src]="review.by.imgUrl" alt="" class="review-img">
                <div class="sub-user-info">
                    <h3 class="user-title">{{ review.by.fullname }}</h3>
                    <p class="user-date">{{ review.at | date: 'MMM yyyy'}}</p>
                </div>
            </div>

            
            <div>
                <p class="review-desc">{{ truncate(review.txt)}} </p>
                <div *ngIf="review.txt.length>150">
                <button (click)="isLessDesc = !isLessDesc" class="btn-show">Show more </button>
            <i class="fa-solid fa-xs fa-chevron-right"></i>
        </div>
</div > */}


        </section >
    )
}

export default DetailsReviewPreview