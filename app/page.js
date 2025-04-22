import Featured from "@/components/Home/Featured"
import Features from "@/components/Home/Features"
import Hero from "@/components/Home/Hero"
import HowWorks from "@/components/Home/HowWorks"
import QA from "@/components/Home/QA"
import Start from "@/components/Home/Start"
import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"

export default function Home(){
  return (
    <>
    <Header/>
    <Hero/>
    <Featured/>
    <Features/>
    <HowWorks/>
    <QA/>
    <Start/>
    <Footer/>
    </>
  )
}