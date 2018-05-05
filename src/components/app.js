// @flow
import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Contents from '../components/contents'

const App = () => (
  <div className="container-fluid" id="app">
    <Header />
    <Contents />
    <Footer />
  </div>
)

export default App
