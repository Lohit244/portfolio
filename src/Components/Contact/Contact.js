import "./Contact.css";
import { useState } from "react";
import githublogo from "../../media/github.svg";
import linkedinlogo from "../../media/linkedin.svg";
import instagramlogo from "../../media/instagram.svg"
import data from "../../data"

function Contact() {
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [contact, setContact] = useState("")
	const [message, setMessage] = useState("")
	const formSubmit = async(e) => {
		e.preventDefault();
		try{
			const res = await fetch("https://portfoliobackendlohit2022.herokuapp.com/send",{
				method: "POST",
				body:JSON.stringify({
				email: email,
				name: name,
				contact: contact,
				message: message}),
				headers:{
					"content-type": "application/json"
				}
			})
			const resjson = await res.json()
			alert(resjson.message)
			console.log(resjson)
		}catch(err){
			alert("oops something went wrong... Consider reaching out via my other sources")
		}
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
					<a href={data.links.github}>
					<img
						className="contact-img"
						src={githublogo}
						alt={data.name}></img>
					</a>
					<a href={data.links.linkedIn}>
					<img
						className="contact-img"
						src={linkedinlogo}
						alt={data.name}></img>
					</a>
					<a href={data.links.insta}>
					<img
						className="contact-img"
						src={instagramlogo}
						alt={data.name}></img>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
