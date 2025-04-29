import Featured from "@/components/Home/Featured"
import Features from "@/components/Home/Features/Features"
import Hero from "@/components/Home/Hero"
import HowWorks from "@/components/Home/HowWorks/HowWorks"
import QAS from "@/components/Home/QAS/QAS"
import Start from "@/components/Other/Start"

export default function Home(){
  return (
    <>
    <Hero/>
    <Featured/>
    <Features/>
    <HowWorks/>
    <QAS/>
    <Start/>
    </>
  )
}