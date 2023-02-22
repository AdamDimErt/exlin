
import MainCart from '../compenents/card/Index'
import Calculator from '@/compenents/calculator/Index'
import React from "react";
import Footer from '@/compenents/footer/Index'
import Company from '@/compenents/company/Index'
import Header from "@/compenents/Header";
import SearchClient from '@/compenents/searchClient/Index'
import Info from '@/compenents/Info/Index'
import Main from '@/compenents/Main/Index'

export default function Home() {
  return (
    <>
        <Header/>
        <Main/>

        <Info/>
      <MainCart/>
        <Calculator/>
       <Company/>

      <Footer/>
    </>
  )
}
