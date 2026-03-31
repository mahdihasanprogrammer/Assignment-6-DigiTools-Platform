
import './App.css'
import Hero from './components/Hero/Hero'
import Stats from './components/MainSection/Stats/Stats'
import Navbar from './components/Navbar/Navbar'

function App() {
 

  return (
    <>
    {/* header  */}
      <header>
        <Navbar />
        <Hero></Hero>
      </header>


      {/* main section */}
      <main className='mb-15  md:mb-20'>

          {/* stats section */}
          <Stats />

      </main>

      {/* footer section */}
      <footer>

      </footer>
    </>
  )
}

export default App
