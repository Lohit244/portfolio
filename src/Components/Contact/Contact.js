import "./Contact.css";
import githublogo from "../../media/github.svg";
import linkedinlogo from "../../media/linkedin.svg";
import instagramlogo from "../../media/instagram.svg"

function Contact() {
	const formSubmit = (e) => {
		//post method to be done later
		e.preverntDefault();
	};
	return (
		<div className="bg-black contact-container">
			<div className="contact-header">Get in Touch</div>
			<div className="contact">
				<div className="contact-form">
                    <form onSubmit={formSubmit}>
                        <input placeholder="Your Email"></input>
                        <input placeholder="Your Name"></input>
                        <input placeholder="Contact Number"></input>
                        <textarea placeholder="Your Message"></textarea>
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
