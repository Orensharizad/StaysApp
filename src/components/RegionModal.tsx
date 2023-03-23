import { SearchBy } from '@/models/stay'
import { stayService } from '@/services/stay.service'
import React from 'react'

type props = {
    setSelected: React.Dispatch<React.SetStateAction<string>>
    setSearchBy: React.Dispatch<React.SetStateAction<SearchBy>>
    handleSelect: () => void

}

function RegionModal({ setSelected, setSearchBy, handleSelect }: props) {

    const regions = stayService.getLocations()

    function onSelectRegion(title: string) {
        setSearchBy(prev => ({ ...prev, destination: title }))
        handleSelect()
    }

    return (
        <div className='region-modal'>
            <h3 className='modal-title'>Search by region</h3>
            <div className="region-list">
                {regions.map((region, idx) =>
                    <div onClick={() => onSelectRegion(region.title)} key={idx} className="region-preview">
                        <img src={region.url} alt="" />
                        <p>{region.title}</p>
                    </div>

                )}
            </div>


        </div>
    )
}

export default RegionModal