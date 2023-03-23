import { StayFilter } from '@/models/stay'
import React from 'react'



type props = {
    filterBy: StayFilter
    onSetFilter: Function
}

function FilterPrice({ onSetFilter, filterBy }: props) {


    return (
        <div className='price-filter'>
            <h5>Price range</h5>
            <p>The average nightly price is $75</p>
            <form className='inputs'>
                <label>
                    <p>min price</p>
                    <p className='currency'>$</p>
                    <input type='text' name='minPrice' value={filterBy.minPrice} onChange={(ev) => onSetFilter('minPrice', ev.target.value)} />
                </label>
                <p className='dash'>
                    -
                </p>
                <label>
                    <p>max price</p>
                    <p className='currency'>$</p>
                    <input type='text' name='maxPrice' value={filterBy.maxPrice} onChange={(ev) => onSetFilter('maxPrice', ev.target.value)} />
                </label>
            </form>
        </div>
    )
}

export default FilterPrice