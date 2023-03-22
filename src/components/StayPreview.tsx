import { Stay } from '@/models/stay'
import { StarIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'



import React, { useState } from 'react'
type Props = {
    stay: Stay
}
function StayPreview(props: Props) {
    const [imgIndex, setImgIndex] = useState<number>(0)
    const [isHover, setISHover] = useState(false)


    function onNextImage(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>, inc: number) {
        ev.stopPropagation()
        setImgIndex(prevImgIndex => prevImgIndex + inc)
    }

    const carouselSettings = {
        showArrows: false,
        showStatus: false,
        showThumbs: false,
        showIndicators: false,
        selectedItem: imgIndex,
    }

    const { stay } = props
    const router = useRouter()

    return (
        <article onMouseEnter={() => setISHover(true)} onMouseLeave={() => setISHover(false)} onClick={() => router.push(`details/${stay._id}`)} className='stay-preview'>
            <div className={'img-carousel '}>
                {imgIndex > 0 && (
                    <button className={`carousel-btn left ${isHover && 'hover'} `} onClick={ev => onNextImage(ev, -1)}>
                        <BiChevronLeft fontSize={'1.2rem'} />
                    </button>
                )}

                <Carousel {...carouselSettings}>
                    {stay.imgUrls.map((imgUrl, idx) => {
                        return <img src={imgUrl} className='stay-img' alt='' key={idx} />
                    })}
                </Carousel>
                {imgIndex < stay.imgUrls.length - 1 && (
                    <button className={`carousel-btn right ${isHover && 'hover'} `} onClick={ev => onNextImage(ev, 1)}>
                        <BiChevronRight fontSize={'1.2rem'} />
                    </button>
                )}
            </div>
            <div className='flex align-center space'>
                <p className='address'>{stay.loc.address}</p>
                <div className='stay-rate'>
                    <StarIcon width={14} height={14} />
                    <p className='rate'> {stay.statReviews.Value}</p>
                </div>
            </div>
            <section className="stay-contant">
                <p>{stay.roomType}</p>
                <main>
                    <p className="date">Mar 11-15</p>
                </main>
                <p><span className='price'>{stay.price}$</span> night</p>
            </section>


        </article >
    )
}

export default StayPreview