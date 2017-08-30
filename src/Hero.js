import React from 'react'
import './Hero.css'
import { componentDidMount } from "react-lifecycle-hoc";
import logoimage from './perfil-octalbit-definitivo.png'
import 'particles.js'

class Hero extends React.Component{

	render(){

	return(
			<div className="hero-wrapper">
				<div className="row-center" id="particles-js"> 
					<div className="content-hero-center">
						<img src={logoimage} className="img-logotipo"/>
						<h1 className="upper"><span>Hello</span>, Welcome to Octalbit</h1>
						<hr />
						<p className="upper p-hero">Development of websites, applications and web systems</p>
					</div>
				</div>
			</div>

		);
	}
}

export default componentDidMount(() => {
  /* eslint-disable no-undef */
  particlesJS("particles-js", require("./particles.json"));
  /* eslint-enable no-undef */
})(Hero);
