import React from 'react'

function Loader() {
    return (
        <article className='stay-preview skeleton' >
            <div className='img-carousel'>
                <div className='stay-img skeleton-img'></div>
            </div>
            <div className='details'>
                <div className='row'>
                    <p className='placeholder address'></p>
                    <div className='placeholder stars'></div>
                </div>

                <p className='placeholder type'></p>
                <p className='placeholder available'></p>
                <p className='placeholder price'></p>
            </div>
        </article>
    )
}

export default Loader