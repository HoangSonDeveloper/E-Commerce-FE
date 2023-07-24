"use client";
import React, {useState} from 'react';
import {LectureList} from "@/pages/LectureList";
import {LectureDetail} from "@/pages/LectureDetail";
export default function Home() {
  const [page, setPage] = useState(false)
  const onPress = (pressed) => {
    if (pressed) setPage(true)
  }
  return (
    !page ? <LectureList onPress = {onPress} /> : <LectureDetail/>
  )
}
