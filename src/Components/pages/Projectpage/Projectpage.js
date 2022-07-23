import React from 'react'
import Explorecategories from './Explorecategories'
import Newsletter from './Newsletter'
import "./Projectpage.css"
import Projects from './Projects'

const Projectpage = () => {
    const queryurl = new URLSearchParams(window.location.search)

    const level = queryurl.get('domain')
    return (<div className='Projectpage'>
        <div className="proj-head">
            <div className="proj-intro">
                <div className='proj-page-heading'>{level} Projects</div>
                <div className="proj-sub-intr">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi nam nulla et excepturi autem commodi eos tempore, doloribus, facilis ut rem.
                </div>
            </div>
            <div className="proj-face">
                <img src="/images/Projectpage.png" alt="" />
            </div>
        </div>
        <div className="Projects-holder">
            <Projects/>
            <Projects/>
            <Projects/>
            <Projects/>
        </div>
        <div className="Categories">
            <h1>Explore our categories</h1>
            <div className="Category-holder">
                <Explorecategories topic={"Web Development"} image={"category3"} options={false}/>
                <Explorecategories topic={"Android Development"} image={"category2"} options={false}/>
                <Explorecategories topic={"Blockchain"} image={"category1"} options={false}/>
            </div>
        </div>
        <Newsletter/>
    </div>
    )
}

export default Projectpage