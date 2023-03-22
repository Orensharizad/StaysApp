import React from 'react'



export default function DetailsLoader() {
    return (
        <div className='main-layout stay-skeleton-view'>
            <div className='heading'>
                <div className='stay-header'>
                    <h1></h1>
                    <div className='row'>
                        <div className='about'></div>
                    </div>
                </div>
                <div className='stay-gallery'>
                    <div className='skeleton main-skeleton'></div>
                    <div className='grid'>
                        <div className='skeleton'></div>
                        <div className='skeleton'></div>
                        <div className='skeleton'></div>
                        <div className='skeleton'></div>
                    </div>
                </div>
            </div>
            <div className='stay-view-separator'>
                <div className='stay-info-header'>
                    <div className='col'>
                        <h3></h3>
                        <p></p>
                    </div>
                    <div className='skeleton'></div>
                </div>
                <div className='stay-skeleton-reserve'>
                    <p></p>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}


