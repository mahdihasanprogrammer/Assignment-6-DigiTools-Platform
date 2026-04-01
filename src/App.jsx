
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import DigitalTools from './components/MainSection/DigitalToolsSection/DigitalTools'
import Stats from './components/MainSection/Stats/Stats'
import Navbar from './components/Navbar/Navbar'
import Steps from './components/MainSection/StepsSection/Steps'
import Pricing from './components/MainSection/PricingSection/Pricing'
import Footer from './components/Footer/Footer'
import WorkFlow from './components/MainSection/WorkFlow/WorkFlow'

const digitalToolsPromise =
       fetch('DigitalToolsData.json').then(res => res.json());

function App() {

const [selectedCarts, setSelectedCarts] =useState([]);


 

  return (
    <>
    {/* header  */}
      <header className='container mx-auto'>
        <Navbar selectedCarts={selectedCarts}/>
        <Hero />
      </header>


      {/* main section */}
      <main>

          {/* stats section */}
          <Stats />


          {/* digitalTool section */}
         <Suspense fallback={<p>Loading...</p>}>
         
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


          {/* workflow section */}
          <WorkFlow />

      </main>

      {/* footer section */}
      <Footer />
    </>
  )
}

export default App
