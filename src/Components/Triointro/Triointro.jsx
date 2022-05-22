import React from 'react'
import "./Triointro.css"
import { Link } from 'react-router-dom'

const Triointro = () => {
    return (
        <div className='Triointro'>
            <div className="Triointro-Head">
                Explore our programs
            </div>
            <p>We have curated industry relevent ecosystem to learn, build and
                interact with peers from tech domains to give your career an edge.
                Explore our programs it's all for you...
            </p>
            <div className="Explore-sections">
                <div className="Intro-body">
                    <div className="Intro-body-head">
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <div> Build </div>
                    </div>
                    <div className="Intro-Body-Text">
                        Master your skills, one project at a time.
                        We have created a wide range of build programs where you can hone your skill while working on projects.
                        Beyond hello world and more…

                    </div>
                    <Link to="/built" className=' Explore' > Explore More <i className="fa-solid fa-angle-right"></i></Link>
                </div>
                <div className="Intro-body">
                    <div className="Intro-body-head">
                        <i className="fa-solid fa-book-open-reader"></i>
                        <div> Learn </div>
                    </div>
                    <div className="Intro-Body-Text">
                        Learn with mentors from top tech companies who had already made it.
                        To provide you with industry relevant cohort based courses
                        Get the company like experiential learning right from your college.

                    </div>
                    <Link to="/courses" className=' Explore' > Explore More <i className="fa-solid fa-angle-right"></i></Link>
                </div>
                <div className="Intro-body">
                    <div className="Intro-body-head">
                        <i className="fa-solid fa-users-line"></i>
                        <div> Community </div>
                    </div>
                    <div className="Intro-Body-Text">
                        Learn on the Go!
                        We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help.
                        Be the part of it.
                        <p>Join now for free.</p>


                    </div>
                    <Link to="/community" className=' Explore' > Explore More <i className="fa-solid fa-angle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Triointro