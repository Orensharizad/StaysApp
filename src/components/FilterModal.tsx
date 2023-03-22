import { StayFilter } from '@/models/stay'
import React from 'react'
import FilterPrice from './FilterPrice'
import FilterType from './FilterType'

type props = {
    setIsOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
    onSetFilter: Function
    filterBy: StayFilter
}
function FilterModal({ onSetFilter, setIsOpenFilter, filterBy }: props) {
    return (
        <>
            <div onClick={() => setIsOpenFilter(prev => !prev)} className="black-screen"></div>

            <section className="filter-modal">

                <div className="modal-header">
                    <h3>Filters</h3>
                    <button className="btn-close">X</button>
                </div>
                <div className="modal-content">
                    <FilterPrice filterBy={filterBy} onSetFilter={onSetFilter} />
                    <FilterType onSetFilter={onSetFilter} />

                </div >
                <div className='footer'>
                    <button className='clear'>Clear all</button>
                    <button onClick={() => setIsOpenFilter(prev => !prev)} className='show-homes'>
                        Show homes
                    </button>
                </div >

            </section >

        </>
    )
}

export default FilterModal