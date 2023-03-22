'use client'
import React from 'react'
import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"


function AppHeader() {
    const router = useRouter()

    return (
        <div className="full main-layout app-header">
            <header className="main-header ">
                <div onClick={() => router.push('/')} className="logo ">
                    <img src="https://airbnb-in-react.netlify.app/static/media/mini-logo.1b5ae477397a3f99ffec204d164afd75.svg"
                        alt='' />
                    <h3 className='logo-title'>airbnb</h3>
                </div>


                <div className="main-container">
                    <p className="item">AnyWhere</p>|
                    <p className="item">Any Week</p>|
                    <div className="flex gap-10 align-center">
                        <p className="item-add">Add guests</p>
                        <div className="search-icon">
                            {/* <i className="fa-solid  fa-magnifying-glass"></i> */}
                            <MagnifyingGlassIcon />
                        </div>
                    </div>

                </div>

                <div className="sub-container  ">
                    <p className="item">Airbnb your home</p>
                    <div className="contact-container">
                        {/* <i className="fa-solid fa-bars"></i> */}
                        <GlobeAltIcon className='icon' />
                        <img width="30px" height="30px
                " src="https://res.cloudinary.com/dsvs2bgn4/image/upload/v1677080627/contact_aive51.svg" alt="" />
                    </div>
                </div>

            </header>

        </div >
    )
}

export default AppHeader