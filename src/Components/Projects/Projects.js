import "./Projects.css";
import { useRef, useEffect } from "react";
import githublogo from "../../media/github.svg";
import project1img from "../../media/project1.png";
import project2img from "../../media/project2.png";
function Projects() {
	const project1ref = useRef(null);
	const project2ref = useRef(null);
	const project3ref = useRef(null);

	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
		};
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				if (project1ref.current) {
					observer.unobserve(project1ref.current);
				}
				setTimeout(() => {
					entry.target.classList.add("fullcard");
				}, 200);
			}
		}, observerOptions);
		const observer2 = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				if (project2ref.current) {
					observer.unobserve(project2ref.current);
				}
				setTimeout(() => {
					entry.target.classList.add("fullcard");
				}, 200);
			
			}
		}, observerOptions);
		const observer3 = new IntersectionObserver((entries) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				if (project2ref.current) {
					observer.unobserve(project2ref.current);
				}
				setTimeout(() => {
					entry.target.classList.add("fullcard");
				}, 200);
			}
		}, observerOptions);
		observer.observe(project1ref.current);
		observer2.observe(project2ref.current);
		observer3.observe(project3ref.current);
		return () => {
			if (project1ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(project1ref.current);
			}
			if (project2ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer2.unobserve(project2ref.current);
			}
			if (project3ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer3.unobserve(project3ref.current);
			}
		};
	}, []);
	return (
		<div className="bg-white fullheight projects-container">
			<div className="projects">
				<h3 className="projects-heading">
					I am fortunate to have worked
					<br /> on these projects
				</h3>
				<div className="grid-container">
					<div
						className="grid-card project-1 bg-gray"
						ref={project1ref}>
							<img
								className="project-image"
								src={project1img}
								alt="project"
							/>
						<div className="project-text">
							My previous personal website built using react
							<br />
							<a href="https://github.com/Lohit244/4/tree/master">
								<img
									className="project-github"
									src={githublogo}
									alt="project"
								/>
							</a>
						</div>
					</div>
					<div
						className="grid-card project-2 bg-gray"
						ref={project2ref}>
							<img
								className="project-image"
								src={project2img}
								alt="project"
							/>
						<div className="project-text">
							A webscraper for google searches and job finding on likedin and other websites, built using python
							<br />
						<a href="https://github.com/Lohit244/IEEE-Webscraper">
							<img
								className="project-github"
								src={githublogo}
								alt="github"
								/>
								</a>
						</div>
					</div>
					<div
						className="grid-card project-3 bg-gray"
						ref={project3ref}>
						<div className="project-text">
							Upcoming project for IEEE Megaproject 🤫
						</div>
					</div>
				</div>
			</div>
			<svg
				className="wave projects-wave"
				xmlns="http://www.w3.org/2000/svg"
				xlink="http://www.w3.org/1999/xlink"
				viewBox="0 24 150 28"
				preserveAspectRatio="none"
				shapeRendering="auto">
				<defs>
					<path
						id="0.14249320781902863"
						d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
				</defs>
				<g>
					<use
						href="#0.14249320781902863"
						x="48"
						y="0"
						data-darkreader-inline-fill=""></use>
				</g>
			</svg>
		</div>
	);
}

export default Projects;
