'use client'
import { Stay } from '@/models/stay'
import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import useCloseModal from '@/hooks/useCloseModal';
import GuestModal from '../GuestModal';





type Guest = {
    type: string
    desc: string
    count: number
    id: string

}

type props = {
    stay: Stay
    setIsShown: React.Dispatch<React.SetStateAction<boolean>>
}

function DetailsReserve({ stay, setIsShown }: props) {



    const [calendarDates, setCalendarDates] = useState({ startDate: new Date(), endDate: new Date(Date.now() + (3600 * 1000 * 72)) })
    const [isCalndarOpen, setIsCalndarOpen] = useState(false)
    const [isGuestOpen, setIsGuestOpen] = useState(false)
    const [guests, setGuests] = useState<Guest[]>([])
    const clanderRef = useRef<HTMLInputElement | null>(null)
    const guestRef = useRef<HTMLInputElement | null>(null)
    const [totalGuest, setTotalGuest] = useState(1)



    useCloseModal(clanderRef, () => setIsCalndarOpen(false))
    useCloseModal(guestRef, () => setIsGuestOpen(false))

    const selectionRange = {
        startDate: calendarDates.startDate,
        endDate: calendarDates.endDate,
        key: 'selection',
    }

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


    function GetTotalDays() {
        let difference = calendarDates.endDate.getTime() - calendarDates.startDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    function Price() {
        return stay.price * GetTotalDays()
    }

    function CleanTax() {
        return (Price() * 0.10).toFixed()
    }

    function ServiceFee() {
        return (Price() * 0.17).toFixed()
    }

    function TotalPrice() {
        return (+Price() + +CleanTax() + +ServiceFee() * (1.25 ** totalGuest)).toFixed()
    }


    function handleCalendarSelect(ranges: any) {
        console.log('ranges: ', ranges);
        setCalendarDates({ startDate: ranges.selection.startDate, endDate: ranges.selection.endDate })

    }



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




    return (
        <div className="reserve-container">
            <div className="reserve-header ">
                <div className="price ">
                    <h3>{stay.price}$</h3> <span>night</span>
                </div>
                <div className="rate ">
                    <i className="fa-solid fa-xs fa-star"></i>
                    <p>{stay.statReviews.Value}</p>
                    <span>{stay.reviews.length} reviews</span>
                </div>
            </div>
            <form className="date-container">
                <label onClick={() => setIsCalndarOpen(prev => !prev)} className="check-in">
                    <span className='form-title '>Check-in</span>
                    <p>{calendarDates.startDate.toLocaleDateString()}</p>
                </label>
                <label onClick={() => setIsCalndarOpen(prev => !prev)} className="check-out">
                    <span className='form-title'>Check-Out</span>
                    <p>{calendarDates.endDate.toLocaleDateString()}</p>
                </label>
                <div className="guests">
                    <div className='guest-container' onClick={() => setIsGuestOpen(prev => !prev)}>
                        <div className='flex column '>
                            <p className='guest-title'>Guests</p>
                            <p >guests {totalGuest}</p>
                        </div>
                        {isGuestOpen ? <ChevronUpIcon width={16} height={16} /> : <ChevronDownIcon width={16} height={16} />}
                    </div>
                    {isGuestOpen && <GuestModal guestRef={guestRef} guests={guests} handleGuestsCounter={handleGuestsCounter} />}
                </div >

                {isCalndarOpen && <section ref={clanderRef} className='calendar'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#ff385c']}
                        onChange={handleCalendarSelect}

                    />
                </section>
                }
            </form >

            <button onClick={() => setIsShown(prev => !prev)} className="btn-reserve">Reserve</button>
            <p className="reserve-txt">You won't be charged yet</p>
            <div className="price-container">
                <div className="price-line">
                    <span className="price-item">${stay.price} X {GetTotalDays()} nights</span>
                    <span>${Price()} </span>
                </div>
                <div className="price-line">
                    <span className="price-item">Cleaning fee</span>
                    <span>${CleanTax()}</span>
                </div>
                <div className="price-line">
                    <span className="price-item">Service fee</span>
                    <span>${ServiceFee()} </span>
                </div>
            </div>

            <div className="total ">
                <span>Total</span>
                <span>${TotalPrice()}</span>

            </div>

        </div >
    )
}

export default DetailsReserve