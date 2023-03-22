import React from 'react'

function FilterType({ onSetFilter }) {
    return (
        <div className='type-filter'>
            <h5>Type of place</h5>
            <div className='type-filter-inputs'>
                <div className='row'>
                    <input type='checkbox' name='Entire home/apt' />
                    <div className='col'>
                        <p className='input-header'>Entire place</p>
                        <p className='desc'>A place all to yourself</p>
                    </div>
                </div>
                <div className='row'>
                    <input type='checkbox' name='Private room' />
                    <div className='col'>
                        <p className='input-header'>Private room</p>
                        <p className='desc'>our own room in a home or a hotel, plus some shared common spaces</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterType