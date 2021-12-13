import "./Landing.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import {Html, useProgress} from "@react-three/drei"
import { useEffect, useState } from "react";
import Model from "./Model";

function LoadingScreen() {
	const {progress} = useProgress()
	return(
		<Html center color="white">
			Loading ...<br /> {Math.floor(progress)}% done
		</Html>
	)
}

function Landing() {
	const [width, setWidth] = useState(window.innerWidth);
	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);
	const isMobile = width<768;
	return (
		<div className="bg-black fullheight landing-container">
			<div className="landing">
			<Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [5, 5, 170], fov: isMobile?30:25 }}>
			<color attach="background" args={["black"]} />
			<ambientLight intensity={0.15} />
			<Suspense fallback={<LoadingScreen/>}>
				<Stage
				preset={"rembrandt"}
				intensity={0.5}
				contactShadow={true}
				shadows
				adjustCamera
				environment='night'>
				<Model />
				</Stage>
			</Suspense>
			<OrbitControls autoRotate={true} />
			</Canvas>
			</div>
				<a className="landing-btn-container" href="#about">
				<button className="main-btn bg-green">
					View My Portfolio
				</button>
				<button className="main-btn-right bg-green">
					→
				</button>
				</a>
			<svg
				className="wave landing-wave"
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
export default Landing;
