"use client"
import Lottie from "lottie-web";
import { Handlee } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import data from "../wishes.json";

const wishFont = Handlee({ subsets: ['latin'], weight: ['400'] })
export default function Home() {
  const container_1 = useRef(null)
  const container_2 = useRef(null)
  const container_3 = useRef(null)
  const container_4 = useRef(null)
  const [hasLoaded, setHasLoaded] = useState(false)
  const { width, height } = useWindowSize()

  const loadAnimations = () => {
    Lottie.loadAnimation({
      container: container_1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/ani1.json'
    });
    Lottie.loadAnimation({
      container: container_2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/ani2.json'
    });
    Lottie.loadAnimation({
      container: container_3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/ani3.json'
    });
    Lottie.loadAnimation({
      container: container_4.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/ani4.json'
    });

    setHasLoaded(true)
  }

  useEffect(() => {
    if (hasLoaded) return
    loadAnimations();
    return (() => setHasLoaded(true))
  }, [])


  return (
    <div className="min-h-screen relative overflow-hidden py-10 px-24 custom-cursor "  >
      <ReactConfetti width={width} height={height} className="opacity-40" />
      <main className="">
        <div className="w-[30vw] absolute top-10 right-10" ref={container_1}></div>
        <div className="w-80 absolute bottom-10 left-10 animate-spin" ref={container_2}></div>
        <div className="w-80 absolute top-10 left-10" ref={container_4}></div>
        <div className="w-80 mx-auto" ref={container_3}></div>
        <div>
          <h1 className="text-4xl text-center text-slate-700">It's <span className="bg-gradient-to-br from-red-500 to-blue-500 bg-clip-text text-transparent">Chairman</span>'s birthday</h1>
        </div>

      </main>
      <div className="px-[10vw] flex flex-col gap-4  z-50">

        <div className={"irregular-div rounded-full fo  nt-semibold text-2xl p-5 text-slate-600 font-light " + wishFont.className}>
          Mon Doyen, je te souhaite le meilleur sur cette journee extraordinaire.
          Happy birthday! 🎉 On your special day, I wish you endless joy, love, and exciting adventures in the year ahead. May this year be filled with incredible moments and all the happiness you truly deserve! 🎂🎁🥳.
          <b className="font-bold">--@Chairperson</b>
        </div>
        <div className={"grid grid-cols-3 " + wishFont.className}>
          {
            data.wishes.map((wish, index) => (
              <div key={index} className="irregular-div rounded-full p-5 text-slate-800 hover:bg-teal-50  animate-pulse">
                {wish.wish}
                <br />
                <b className="font-bold"> -- {wish.friend}</b>
              </div>
            ))
          }
        </div>
      </div>
      <h1 className="text-center font-mono">For Mr.CM / Zestor / Apo 😅 - 2K23</h1>
    </div>
  )
}
