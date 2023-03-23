import { SearchBy } from '@/models/stay'
import React, { useState, useEffect } from 'react'
import DateRangeModal from './DateRangeModal'
import GuestModal from './GuestModal'
import RegionModal from './RegionModal'


const emtpySearch = {
    destination: '',
    startDate: new Date(),
    endDate: new Date(Date.now() + (3600 * 1000 * 72)),
    guests: 1
}

type props = {
    isSearchOpen: boolean
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>

}
type Guest = {
    type: string
    desc: string
    count: number
    id: string

}

type Selected = {
    selected: string
}

function SearchModal({ isSearchOpen, setIsSearchOpen }: props) {

    const [selected, setSelected] = useState<string>('searchDatePickerIn')
    const [searchBy, setSearchBy] = useState<SearchBy>(emtpySearch)
    const [guests, setGuests] = useState<Guest[]>([])
    const [totalGuest, setTotalGuest] = useState(1)


    function handleGuestsCounter(diff: number, idx: number) {
        const updatedGuests = [...guests]
        if ((updatedGuests[idx].count + diff) < 0) return
        updatedGuests[idx].count += diff
        setGuests(updatedGuests)
        const totalGuest = updatedGuests.reduce((acc, item) => {
            return acc + item.count
        }, 0)

        setTotalGuest(totalGuest)

    }

    function guestsCountFormatted(totalGuest: number) {
        if (totalGuest === 0) return ''
        if (totalGuest === 1) return '1 guest'
        else return `${totalGuest} guests`
    }

    // function handleSelect() {
    //     // if (selected === 'searchLocation') setSelected('searchDatePickerIn')
    //     // else if (selected === 'searchDatePickerIn') setSelected('searchDatePickerOut')
    //     // else if (selected === 'searchDatePickerOut') setSelected('searchGuests')
    //     setSelected('searchGuests')

    //     // console.log('selected:', selected)
    // }

    useEffect(() => {
        const initialGuests: Guest[] = [
            {
                id: 'g101',
                type: 'Adults',
                desc: 'Age 13+',
                count: 1
            },
            {
                type: 'Children',
                desc: 'Ages 2-12',
                count: 0,
                id: 'g102',
            },
            {
                type: 'Infants',
                desc: 'Under 2',
                count: 0,
                id: 'g103',
            },


        ]
        setGuests(initialGuests)

    }, [])



    return (
        <>
            <section className='saerch-modal '>

                <div className={`search-expanded ${isSearchOpen && 'shown'}`}>
                    <div className='search-expanded-search'>
                        <label
                            className={`module-btn where ${selected === 'searchLocation' ? 'active' : ''} `}
                            onClick={() => setSelected('searchLocation')}
                        >
                            <p className='header'>Where</p>
                            <input type='text' placeholder='Search destinations' value={searchBy.destination} readOnly />
                            {(selected === 'searchLocation' && isSearchOpen) && <RegionModal setSearchBy={setSearchBy} setSelected={setSelected} />}

                        </label>
                        <label
                            className={`module-btn check-in ${selected === 'searchDatePickerIn' ? 'active' : ''} `}
                            onClick={() => setSelected('searchDatePickerIn')}
                        >
                            <p className='header'>Check in</p>
                            <input
                                type='text'
                                placeholder='Add dates'
                                value={searchBy.startDate.toLocaleDateString()}
                                readOnly
                            />
                            {(selected === 'searchDatePickerIn' && isSearchOpen) && <DateRangeModal searchBy={searchBy} setSearchBy={setSearchBy} />}

                        </label>
                        <label
                            className={`module-btn check-out ${selected === 'searchDatePickerOut' ? 'active' : ''} `}
                            onClick={() => setSelected('searchDatePickerOut')}
                        >
                            <p className='header'>Check out</p>
                            <input
                                type='text'
                                placeholder='Add dates'
                                value={searchBy.endDate.toLocaleDateString()}
                                readOnly
                            />
                            {(selected === 'searchDatePickerOut' && isSearchOpen) && <DateRangeModal searchBy={searchBy} setSearchBy={setSearchBy} />}
                        </label>
                        <label
                            className={`module-btn who ${selected === 'searchGuests' ? 'active' : ''}  `}
                            onClick={() => setSelected('searchGuests')}
                        >
                            <div className='col'>
                                <p className='header'>Who</p>
                                <input
                                    type='text'
                                    placeholder='Add guests'
                                    value={guestsCountFormatted(totalGuest)}
                                    readOnly
                                />
                                {(selected === 'searchGuests' && isSearchOpen) && <GuestModal guests={guests} handleGuestsCounter={handleGuestsCounter} />}
                            </div>
                            <button className='search-btn' >
                                <img src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676904049/Airbnb/temp_vysd1h.svg' alt='' /> Search
                            </button>
                        </label>

                    </div>
                </div>

            </section>
            {isSearchOpen && <div onClick={() => setIsSearchOpen(prev => !prev)} className='dark-overlay'></div>}

        </>
    )
}

export default SearchModal