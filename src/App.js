import React from 'react'
import './App.css';

import { Features, Footer, Blog, Header, Possibilty, WhatGPT3} from './containers'
import { CTA, Brand, Navbar} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header/> 
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App