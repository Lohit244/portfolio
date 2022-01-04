import "./Contact.css";
import { useState } from "react";
import githublogo from "../../media/github.svg";
import linkedinlogo from "../../media/linkedin.svg";
import instagramlogo from "../../media/instagram.svg"

function Contact() {
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [contact, setContact] = useState("")
	const [message, setMessage] = useState("")
	const formSubmit = (e) => {
		//post method to be done later
		console.log({
			email: email,
			name: name,
			contact: contact,
			message: message
		})
		e.preventDefault();
	};
	return (
		<div className="bg-black contact-container">
			<div className="contact-header">Get in Touch</div>
			<div className="contact">
				<div className="contact-form">
                    <form onSubmit={formSubmit}>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email"></input>
                        <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your Name"></input>
                        <input value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder="Contact Number"></input>
                        <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Your Message"></textarea>
                        <button className="submit-button" type="submit"> Send Message </button>
                    </form>
                </div>
				<div className="connect-footer">
				Connect with me:
					<a href="https://www.github.com/lohit244">
					<img
						className="contact-img"
						src={githublogo}
						alt="Lohitaksha Malhotra"></img>
					</a>
					<a href="https://www.linkedin.com/in/lohitaksha-malhotra-b84392201/">
					<img
						className="contact-img"
						src={linkedinlogo}
						alt="Lohitaksha Malhotra"></img>
					</a>
					<a href="https://www.instagram.com/lohitakshamalhotra/">
					<img
						className="contact-img"
						src={instagramlogo}
						alt="Lohitaksha Malhotra"></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
