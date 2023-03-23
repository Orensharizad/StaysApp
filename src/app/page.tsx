'use client'
import StayList from "@/components/StayList";
import ToolBar from "@/components/ToolBar";
import { Stay, } from "@/models/stay";
import { setFilterBy } from "@/store/staySlice";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";
import { useAppSelector, useAppDispatch } from '../hooks/stateHook'





export default function HomePage() {
  const [stays, setStays] = useState<Stay[]>([])
  const filterBy = useAppSelector((state) => state.stay.filterBy)
  const dispatch = useAppDispatch()
  const [selected, setSelected] = useState<string>(filterBy.type)



  useEffect(() => {
    loadStays()
  }, [filterBy])


  const loadStays = async () => {
    try {
      const stays = await stayService.query(filterBy)
      setStays(stays)

    } catch (err) {
      console.log('cannot load stays :', err)

    }
  }

  const onSetFilter = (filed: string, val: string) => {
    setStays([])
    let filter = { ...filterBy }
    if (filed === 'type') {
      filter.type = val
    }
    else if (filed === 'minPrice') {
      filter.minPrice = val
    }
    else if (filed === 'maxPrice') {
      filter.maxPrice = val
    }
    filter.searchBy = undefined
    dispatch(setFilterBy(filter))


  }



  return (
    <main className="main-layout "  >
      <ToolBar selected={selected} setSelected={setSelected} filterBy={filterBy} onSetFilter={onSetFilter} />
      <StayList stays={stays} />
    </main>
  )
}
