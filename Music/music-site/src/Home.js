import React from 'react'
import CommonPart from './Components/CommonPart'
import image from '../src/images/home.gif'
export default function Home() {
  return (
    <CommonPart name='Musical Showman' caption='"Without music, life would be a mistake. --Friedrich Nietzsche' imgsrc={image} btnname='Visit My Site' visit='/musicbank'/>
  )
}
