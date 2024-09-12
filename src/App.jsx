import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './assets/components/Header/Header'
import Main from './assets/components/Main/Main'
import Footer from './assets/components/Footer/Footer'
import Detail from './assets/components/Main/Detail'

function App() {

  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main/>
              </>
            }
          />
          <Route path="/book/:id" element={<Detail />} />
        </Routes>
      </Router>
    <Footer/>  
    </>
  )
}

export default App
