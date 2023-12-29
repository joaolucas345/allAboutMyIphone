"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react'
import tips from './tips.json'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { FullCommand } from '@/components/ui/fullCommand';

const FAVORITES_NUMBER = 5;
let once = false

function App() {
  const [pickedFavorites, setPickedFavorites] = useState([])
  const [showCommand, setShowCommand] = useState(false)

  useEffect(() => {
    if(once) return
    once = true
    const usedNumber = []
    let w = []
    for(let i = 0; i < FAVORITES_NUMBER; i++) {
      let randomNumber = Math.round(Math.random() * tips.length - 1)
      if(usedNumber.includes(randomNumber)) {
        // i -= 1
        return
      } 
      usedNumber.push(randomNumber)
      // console.log(w)
      w.push(tips[randomNumber])
      // i += 1
      // setPickedFavorites(w)
    }
    setPickedFavorites(w)
    console.log(pickedFavorites)
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === ' ') {
        setShowCommand(true)
      }
    })
    alert("click control + space to open the menu and search through the tips")

  }, [])
  
  
  return (
    <main className='bg-slate-300 min-h-screen grid grid-cols-2 place-content-center'>
      <div>
        <Image className='hover:animate-bounce min-w-content' src="/iphone_picture.png"
              width={700}
              height={500}
              alt="Picture of the author"
              priority
              />
      </div>
      <div className="flex place-items-center">
      <Accordion type="single" className='max-w-xl' collapsible>
    {
      pickedFavorites.map((favorites, i) => (
        <AccordionItem key={`${i}-accordion-item`}value={`item-${i+1}`}>
              <AccordionTrigger>{favorites.Question}</AccordionTrigger>
              <AccordionContent className="place-content-center">
                {favorites.Answer}
            </AccordionContent>
        </AccordionItem>
      ))
    }
</Accordion>
      </div>
      <div onClick={() => setShowCommand(false)} className={`bg-[rgb(0,0,0,0.65)] fixed min-h-full min-w-full bg-black ${showCommand ? "visible" : "hidden"} flex items-center justify-center`}>
      <FullCommand tips={tips}></FullCommand>
      </div>
    </main>
  );
}

export default App;
