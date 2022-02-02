import "./Projects.css";
import { useRef, useEffect } from "react";
import githublogo from "../../media/github.svg";
import linklogo from "../../media/link.svg";
import data from "../../data"

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
							<div
								className="project-image"
								style = {{backgroundImage: `url(/project1.png)`}}
								alt="project"
							/>
						<div className="project-text">
							{data.projects[0].about}
							<br />
							<a href={data.projects[0].github}>
								<img
									className="project-github"
									src={githublogo}
									alt="github"
								/>
							</a>
							{(data.projects[0].link!=="NULL")&&
							<a href= {data.projects[0].link}>
							<img
								className="project-link"
								src={linklogo}
								alt="link"
								/>
								</a>
								}
						</div>
					</div>
					<div
						className="grid-card project-2 bg-gray"
						ref={project2ref}>
							<div
								className="project-image"
								style = {{backgroundImage: `url(/project2.png)`}}
								alt="project"
							/>
						<div className="project-text">
							{data.projects[1].about}
							<br />
							<a href={data.projects[1].github}>
							<img
								className="project-github"
								src={githublogo}
								alt="github"
								/>
								</a>
							{(data.projects[1].link!=="NULL")&&
							<a href={data.projects[1].link}>
							<img
								className="project-link"
								src={linklogo}
								alt="link"
								/>
								</a>
								}
						</div>
					</div>
					<div
						className="grid-card project-3 bg-gray"
						ref={project3ref}>
							<div className="project-image"
							style = {{backgroundImage: `url(/project3.png)`}}
							/>
						<div className="project-text">
							{data.projects[2].about}
							<br />
						<a href={data.projects[2].github}>
							<img
								className="project-github"
								src={githublogo}
								alt="github"
								/>
								</a>
						{(data.projects[2].link!=="NULL")&&
						<a href={data.projects[2].link}>
							<img
								className="project-link"
								src={linklogo}
								alt="link"
								/>
								</a>}
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
