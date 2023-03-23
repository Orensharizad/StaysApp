import { SearchBy } from '@/models/stay'
import React from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file


type props = {
    searchBy: SearchBy
    setSearchBy: React.Dispatch<React.SetStateAction<SearchBy>>
    handleSelect: () => void
}

function DateRangeModal({ setSearchBy, searchBy, handleSelect, }: props) {
    const selectionRange = {
        startDate: searchBy.startDate,
        endDate: searchBy.endDate,
        key: 'selection',
    }
    function handleSelectDate(ranges: any) {
        console.log('ranges: ', ranges);
        setSearchBy({ ...searchBy, startDate: ranges.selection.startDate, endDate: ranges.selection.endDate })

        handleSelect()
    }
    return (
        <section className='date-modal'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#ff385c']}
                onChange={handleSelectDate}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
            />
        </section>
    )
}

export default DateRangeModal