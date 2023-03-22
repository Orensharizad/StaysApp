import { Stay } from '@/models/stay'
import React from 'react'


type props = {
    stay: Stay
}

function DetailsInfo({ stay }: props) {
    return (
        <div className="stay-info">


            {stay?.host?.isSuperhost && <div className="card">
                <img src="https://air-bxb.onrender.com/assets/superhost.f21af840.svg" alt="" className="card-img" />
                <div className="card-content">
                    <h3 className="card-title">This host is a Superhost</h3>
                    <p className="card-desc">Superhosts are experienced, highly rated hosts who are committed to
                        providing great stays for guests.</p>
                </div>
            </div>}


            <div className="card">
                <img src="https://air-bxb.onrender.com/assets/location.8ba303fc.svg" alt="" className="card-img" />
                <div className="card-content">
                    <h3 className="card-title">Great location</h3>
                    <p className="card-desc">95% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
            </div>
            <div className="card">
                <img src="https://air-bxb.onrender.com/assets/checkin.274cce63.svg" alt="" className="card-img" />
                <div className="card-content">
                    <h3 className="card-title">Great check-in experience
                    </h3>
                    <p className="card-desc">100% of recent guests gave the location a 5-star rating.

                    </p>
                </div>
            </div>

        </div >
    )
}

export default DetailsInfo