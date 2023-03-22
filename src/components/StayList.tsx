import { Stay } from '@/models/stay'
import React from 'react'
import Loader from './Loader'
import StayPreview from './StayPreview'


type Props = {
    stays: Stay[]
}
const loader = [
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
    { loader: '' },
]

function StayList(props: Props) {
    if (!props.stays) return <div className='stay-list'>{loader.map((loader, idx) =>
        <Loader key={idx} />
    )}</div>

    return (
        <section className='stay-list'>
            {!props.stays.length && loader.map((loader, idx) =>
                <Loader key={idx} />
            )}
            {props.stays.map(stay =>
                <StayPreview key={stay._id} stay={stay} />
            )}
        </section >
    )
}

export default StayList