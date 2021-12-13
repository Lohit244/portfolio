import "./Skills.css"
import htmllogo from "../../media/html.svg"
import csslogo from "../../media/css.svg"
import jslogo from "../../media/js.svg"
import nodejslogo from "../../media/nodejs.svg"
import pythonlogo from "../../media/python.svg"
import bootstraplogo from "../../media/bootstrap.svg"
import cpplogo from "../../media/cpp.svg"
import firebaselogo from "../../media/firebase.svg"
import muilogo from "../../media/mui.svg"
import reactlogo from "../../media/react.svg"
import sveltelogo from "../../media/svelte.svg"
import expresslogo from "../../media/express.svg"
import {useEffect, useRef} from "react"

function Skills() {
    const gridref = useRef(null);
    useEffect(()=>{
        const gridobserver = new IntersectionObserver((entries)=>{
            const [entry] = entries
            if(entry.isIntersecting){
                setTimeout(()=>{
                    entry.target.classList.add("up");
                },400)
            }
            if(!entry.isIntersecting){
                entry.target.classList.remove("up")
            }
        },{
            threshold: 0.1,
        })
        if(gridref.current){
            gridobserver.observe(gridref.current)
        }
        return ()=>{
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if(gridref.current){gridobserver.unobserve(gridref.current)}
        }
    },[])
    return (
        <div className="bg-green fullheight skills-container">
            <div className="skills">
            <div className="skills-grid" ref={gridref}>
                <img className="skills-img" src={htmllogo} alt="html"/>
                <img className="skills-img" src={csslogo} alt="css" />
                <img className="skills-img" src={jslogo} alt="javascript" />
                <img className="skills-img" src={nodejslogo} alt="nodejs" />
                <img className="skills-img" src={pythonlogo} alt="python" />
                <img className="skills-img" src={bootstraplogo} alt="bootstrap" />
                <img className="skills-img" src={cpplogo} alt="c++" />
                <img className="skills-img" src={firebaselogo} alt="firebase" />
                <img className="skills-img" src={muilogo} alt="mui" />
                <img className="skills-img" src={reactlogo} alt="react" />
                <img className="skills-img" src={sveltelogo} alt="svelte" />
                <img className="skills-img" src={expresslogo} alt="Express" />
            </div>
            <div className="skills-text">What I know</div>
            </div>
            <svg className="wave skills-wave" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"><defs>
                <path id="0.14249320781902863" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g>
                    <use href="#0.14249320781902863" x="48" y="0" data-darkreader-inline-fill=""></use></g></svg>
        </div>
    )
}

export default Skills
