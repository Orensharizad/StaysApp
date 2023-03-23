import { useAppDispatch, useAppSelector } from '@/hooks/stateHook'
import { Stay } from '@/models/stay'
import React from 'react'
import Loader from './Loader'
import StayPreview from './StayPreview'
import { setFilterBy } from "@/store/staySlice";
import { stayService } from '@/services/stay.service'



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

    const filterBy = useAppSelector((state) => state.stay.filterBy)
    const dispatch = useAppDispatch()

    const handleCleanSearch = () => {
        const filter = stayService.getEmtpyFilter()
        dispatch(setFilterBy(filter))
    }



    return (
        <section className='stay-list'>
            {(!props.stays.length && !filterBy.searchBy) && loader.map((loader, idx) =>
                <Loader key={idx} />
            )}
            {props.stays.map(stay =>
                <StayPreview key={stay._id} stay={stay} />
            )}
            {!props.stays.length && filterBy.searchBy &&
                <div>
                    <p className='title'>Cannot Find Stays</p>
                    <button onClick={handleCleanSearch} className='btn-expand-reviews'>Clean Search </button>
                </div>}
        </section >
    )
}

export default StayList