import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Body from './Body'
import Footer from './Footer'
export default class Dashboard extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header/>
        <Menu/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
