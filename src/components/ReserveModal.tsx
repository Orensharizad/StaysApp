import { Stay } from '@/models/stay'
import React from 'react'

type props = {
    stay: Stay
    isShown: boolean
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>
}

function ReserveModal({ stay, isShown, setIsShown }: props) {
    return (
        <>
            {isShown && <div onClick={() => setIsShown(false)} className="black-screen " ></div >}
            <section className={`reserve-modal ${isShown && 'shown'}`}>
                < div className="flex align-center gap-5 " >
                    <img src="https://airbnb-in-react.netlify.app/static/media/mini-logo.1b5ae477397a3f99ffec204d164afd75.svg"
                        alt='' className='logo' />
                    <div className="vecation-container ">
                        <h1>It's vacation time!</h1>
                        <p className='sub-heading'>You're going to {stay.loc.city}!</p>
                    </div>
                </ div>
                <img src={stay.imgUrls[0]} alt='' className='stay-image' />
                <div className="host-details">
                    <div className="host-info">
                        <h3 className="host-name">{stay.roomType} by {stay.host.fullname}</h3>
                        <p>bathrooms:{stay.bathrooms}•bedrooms:{stay.bedrooms}</p>
                    </div>
                    <img className="host-img" src={stay.host.pictureUrl} alt="" />
                </div>
                <p className='thank-you-paragraph'>
                    Thank you for choosing to stay with us! We hope you have a wonderful time in our Airbnb clone. Your
                    purchase has been confirmed and we look forward to hosting you soon.
                </p>
                <button onClick={() => setIsShown(false)} > Close</button >

            </section >
        </>
    )
}

export default ReserveModal