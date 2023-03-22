'use client'
import StayList from "@/components/StayList";
import ToolBar from "@/components/ToolBar";
import { Stay, StayFilter } from "@/models/stay";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";




export default function HomePage() {
  const [stays, setStays] = useState<Stay[]>([])
  const [filterBy, setFilterBy] = useState(stayService.getEmtpyFilter())
  const [selected, setSelected] = useState(filterBy.type)



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

  const onSetFilter = (filed: any, val: any) => {
    setStays([])
    setFilterBy(prev => ({ ...prev, [filed]: val }))
  }

  return (
    <main className="main-layout" >
      <ToolBar selected={selected} setSelected={setSelected} filterBy={filterBy} onSetFilter={onSetFilter} />
      <StayList stays={stays} />
    </main>
  )
}
