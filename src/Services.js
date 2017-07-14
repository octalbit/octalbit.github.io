import React from 'react'
import './services.css'
import imageweb from './assets/web-development.png'
import imagemobile from './assets/mobile-app-developing.png'
import imageseo from './assets/seo.png'

export default function Services(){

	return(
			<div className="services-wrapper">
				<div className="row-top-services">
					<h2 className="upper services">Services</h2>
				</div>
				<div className="column-center-services">
					<div className="column-services">
						<img src={imageweb} className="image-services" />
						<p className="p-service upper">Lorem Ipsum</p>
						<h3>dummy text of the printing and typesetting</h3> 
					</div>
					<div className="column-services">
						<img src={imagemobile} className="image-services" />
						<p className="p-service upper">Lorem Ipsum</p>
						<h3>dummy text of the printing and typesetting</h3>
					</div>
					<div className="column-services">
						<img src={imageseo} className="image-services" />
						<p className="p-service upper">Lorem Ipsum</p>
						<h3>dummy text of the printing and typesetting</h3>
					</div>
				</div>
			</div>

		)
}