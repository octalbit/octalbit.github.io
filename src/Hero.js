import React from 'react'
import './Hero.css'
import logo from './assets/logo-tipo.png'
import logoimage from './assets/perfil-octalbit-definitivo.png'

export default function Hero(){

	return(
			<div className="hero-wrapper">
				<div className="row-top">
					<a href="#" className="logotipo"><img src={logo}className="img-logo"/></a>
				</div>
				<div className="row-center"> 
					<div className="content-hero-center">
						<img src={logoimage} className="img-logotipo"/>
						<h1 className="upper"><span>Hello</span>, Welcome to Octalbit</h1>
						<hr />
						<p className="upper p-hero">Contraty to popular belief, lorem ipsum is not simply random</p>
					</div>
				</div>
			</div>

		)
}
