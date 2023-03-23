'use client'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { RiGlobalLine } from 'react-icons/ri'
import SearchModal from './SearchModal'
const hamburgerBarsSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822362/Airbnb/temp_1_au1jus.png'
const userProfileSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822576/Airbnb/temp_3_b1go8l.png'


function AppHeader() {
    const router = useRouter()
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <div className={`full main-layout app-header ${isSearchOpen && 'shown'}`}>

            <header className={`main-header  `}>
                <div onClick={() => router.push('/')} className="logo ">
                    <img src="https://airbnb-in-react.netlify.app/static/media/mini-logo.1b5ae477397a3f99ffec204d164afd75.svg"
                        alt='' />
                    <h3 className='logo-title'>airbnb</h3>
                </div>


                {!isSearchOpen && <div onClick={() => setIsSearchOpen(prev => !prev)} className="main-container">
                    <p className="item">AnyWhere</p>|
                    <p className="item">Any Week</p>|
                    <div className="flex gap-10 align-center">
                        <p className="item-add">Add guests</p>
                        <div className="search-icon">
                            <MagnifyingGlassIcon />
                        </div>
                    </div>

                </div>}
                <div className={`experience-type ${isSearchOpen && 'shown'}`}>
                    <button>Stays</button>
                    <button>Experiences</button>
                    <button>Online Experiences</button>
                </div>

                <div className='user-section'>
                    <button className='airbnb-cta'>Airbnb your home</button>
                    <button className='language'>
                        <RiGlobalLine fontSize={'19px'} />
                    </button>
                    <button className='user-open-modal'>
                        <img src={hamburgerBarsSrc} alt='' />
                        <img src={userProfileSrc} alt='' />
                    </button>
                </div>

            </header>

            <SearchModal setIsSearchOpen={setIsSearchOpen} isSearchOpen={(isSearchOpen)} />


        </div >
    )
}

export default AppHeader