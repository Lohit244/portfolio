import "./About.css"

function About() {
    return (
        <div className="bg-gray fullheight about-container" id="about-page">
            <div className="about">
                <div className="top-heading">Who am i and what i do</div>
                <div className="about-text"><b>My name is Lohitaksha Malhotra.</b>I am a second year Mechanical Engineering student at 
                BIT Mesra. I am interested in tech, anime/manga, custom keyboards and linux (i use arch btw 😁).</div>
            </div>
            <svg className="wave about-wave" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"><defs>
                <path id="0.14249320781902863" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path></defs><g>
                    <use href="#0.14249320781902863" x="48" y="0" data-darkreader-inline-fill=""></use></g></svg>
        </div>
    )
}

export default About
