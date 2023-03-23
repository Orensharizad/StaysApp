'use client'
import DetailsAmenities from '@/components/details/DetailsAmenities'
import DetailsInfo from '@/components/details/DetailsInfo'
import DetailsMap from '@/components/details/DetailsMap'
import DetailsReserve from '@/components/details/DetailsReserve'
import DetailsReviews from '@/components/details/DetailsReviews'
import DetailsReviewStat from '@/components/details/DetailsReviewStat'
import DetailsLoader from '@/components/DetailsLoader'
import ReserveModal from '@/components/ReserveModal'
import { Stay } from '@/models/stay'
import { stayService } from '@/services/stay.service'
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'


function StayDetails({ params: { id } }: any) {

  const [stay, setStay] = useState<Stay | null>(null)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    loadStay()

  }, [])

  const loadStay = async () => {
    try {
      const stay = await stayService.getById(id)
      setStay(stay)
    } catch (err) {
      console.log('err:', err)
    }

  }

  if (!stay) return <div></div>
  return (
    <section className='stay-details main-layout'>
      <div className='flex align-center space'>
        <div className="stay-title">
          <h3> {stay.name}</h3>
          <p>{stay.loc.address}</p>
        </div>
        <div className='btns'>
          <button>
            <FiShare />
            <p>Share</p>
          </button>
          <button>
            <AiOutlineHeart />
            <p>Save</p>
          </button>
        </div>

      </div>
      <div className="imgs-container">
        {stay.imgUrls.map((img, idx) =>
          <img key={idx} src={img} alt="" />
        )}
      </div>

      <section className="details-content">
        <div className="main-content">
          <div className="host-details">
            <div className="host-info">
              <h3 className="host-name">{stay.roomType} by {stay.host.fullname}</h3>
              <p>bathrooms:{stay.bathrooms}•bedrooms:{stay.bedrooms}</p>
            </div>
            <img className="host-img" src={stay.host.pictureUrl} alt="" />
          </div>
          <DetailsInfo stay={stay} />
          <div className="air-cover">
            <h3 className="title"><span>air</span>cover</h3>
            <p className="desc">Every booking includes free protection from Host cancellations, listing inaccuracies,
              and other issues like trouble checking in.</p>
          </div>
          <div className="details-desc">{stay.summary}</div>
          <DetailsAmenities />
        </div>
        <div className="sub-content">
          <DetailsReserve stay={stay} setIsShown={setIsShown} />
        </div>
      </section>
      <section className="reviews">
        <DetailsReviewStat stay={stay} />
        <DetailsReviews stay={stay} />
        <ReserveModal stay={stay} isShown={isShown} setIsShown={setIsShown} />

        <div className="maps">
          <DetailsMap stay={stay} />
        </div>

      </section>















    </section>
  )
}

export default StayDetails