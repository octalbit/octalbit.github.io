import React from 'react'
import './contacts.css'
import face from './assets/social-facebook.png'
import twitter from './assets/social-twitter.png'
import gplus from './assets/icon-social-google-plus-outline.png'
import github from './assets/social-github.png'

export default function Contacts(){

	return(
			<div className="contacts-wrapper">
				<div className="row-top-contacts">
					<h2 className="upper contact">Contact</h2>
				</div>
				<div className="row-answear-contact">
					
					<h4 className="upper">Want to budget?</h4>
					<div className="row-email-contact">
						<p className="contact upper">octalbitcontato@gmail.com<br/>tel:7777-7777/tel:7777-7777</p>
					</div>
					<div className="row-socials">
						<div className="img-octal">
							<img src={face} className="img-contact"/>
						</div>
						<div className="img-octal">
							<img src={twitter} className="img-contact"/>
						</div>
						<div className="img-octal">
							<img src={gplus} className="img-contact"/>
						</div>
						<div className="img-octal">
							<img src={github} className="img-contact"/>
						</div>
					</div>
				</div>
			</div>
		)
}