import React, { Component } from 'react'

import '../styles/index.scss'
import Logo from '../static/img/Logo.svg'
import styled, { keyframes } from 'styled-components'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import About from '../components/about'

const spin = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`

const Loader = styled.div`
  display: ${props => (props.loaded ? 'none' : 'grid')};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: white;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;

  img {
    animation: ${spin} 1.7s ease-in-out infinite;
  }
`

class Index extends Component {
  state = {
    loaded: false,
  }
  componentDidMount() {
    this.setState({
      loaded: true,
    })
  }

  render() {
    return (
      <div>
        <Loader loaded={this.state.loaded}>
          <img src={Logo} width="400" />
        </Loader>
        <Navbar />
        <Header />
        <About />
      </div>
    )
  }
}

export default Index
