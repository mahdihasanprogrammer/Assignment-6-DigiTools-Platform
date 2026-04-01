
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import DigitalTools from './components/MainSection/DigitalToolsSection/DigitalTools'
import Stats from './components/MainSection/Stats/Stats'
import Navbar from './components/Navbar/Navbar'
import Steps from './components/MainSection/StepsSection/Steps'
import Pricing from './components/MainSection/PricingSection/Pricing'

const digitalToolsPromise =
       fetch('DigitalToolsData.json').then(res => res.json());

function App() {

const [selectedCarts, setSelectedCarts] =useState([]);
console.log(selectedCarts)
 

  return (
    <>
    {/* header  */}
      <header>
        <Navbar selectedCarts={selectedCarts}/>
        <Hero />
      </header>


      {/* main section */}
      <main className='mb-15  md:mb-20'>

          {/* stats section */}
          <Stats />


          {/* digitalTool section */}
         <Suspense
          fallback={<span className="loading loading-ball flex py-10 items-center size-15 mx-auto"></span>}>

           <DigitalTools
           selectedCarts={selectedCarts}
           setSelectedCarts={setSelectedCarts}
            digitalToolsPromise={digitalToolsPromise}/>
         </Suspense>

         {/* steps section */}
         <Steps />

         {/* Pricing section */}
          <Suspense 
            fallback={<span className="loading loading-ball flex py-10 items-center size-15 mx-auto"></span>}>
             <Pricing />
          </Suspense>

      </main>

      {/* footer section */}
      <footer>

      </footer>
    </>
  )
}

export default App
