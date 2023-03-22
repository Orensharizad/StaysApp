'use client'
import Loader from "@/components/Loader";
import StayList from "@/components/StayList";
import ToolBar from "@/components/ToolBar";
import { Stay } from "@/models/stay";
import { useEffect, useState } from "react";
import { stayService } from "../services/stay.service";




export default function HomePage() {
  const [stays, setStays] = useState<Stay[]>([])
  const [filterBy, setFilterBy] = useState(stayService.getEmtpyFilter())

  useEffect(() => {
    loadStays()
  }, [])


  const loadStays = async () => {
    try {
      const stays = await stayService.query(filterBy)
      setStays(stays)

    } catch (err) {
      console.log('cannot load stays :', err)

    }
  }

  return (
    <main className="main-layout" >
      <ToolBar setFilterBy={setFilterBy} />
      <StayList stays={stays} />
    </main>
  )
}
