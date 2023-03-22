import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


type Guest = {
    type: string
    desc: string
    count: number
    id: string

}
type props = {
    guests: Guest[]
    handleGuestsCounter: (diff: number, idx: number) => void
    guestRef: any

}

function GuestModal({ guests, handleGuestsCounter, guestRef }: props) {



    return (
        <div ref={guestRef} className="guest-modal">
            {guests.map((guest, idx) => (
                <div key={guest.id} className='guest-row'>
                    <div className="title">
                        <h3>{guest.type}</h3>
                        <span>{guest.desc}</span>
                    </div>
                    <div className="btns-contianer flex gap-5 align-center">
                        <p onClick={() => handleGuestsCounter(-1, idx)}>
                            <AiOutlineMinus />
                        </p>

                        <span>{guest.count}</span>
                        <p onClick={() => handleGuestsCounter(1, idx)}>
                            <AiOutlinePlus />
                        </p>

                    </div>

                </div>

            ))}

        </div>

    )
}

export default GuestModal