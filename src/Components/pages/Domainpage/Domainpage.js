import React from 'react'
import "./Domainpage.css"
import Explorecategories from '../Projectpage/Explorecategories'
import Talktoexpers from "../Projectcat/Talktoexpers"
import Newsletter from "../Projectpage/Newsletter"

const Domainpage = () => {
    return (
        <div className='Domainpage'>
            <div className="Domainshead">
                <div className="domains-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo 
                  expedita dolorum sint tenetur voluptatibus sed ipsam eos maiores recusandae
                  , necessitatibus voluptatem similique neque repudiandae esse facere magnam non 
                  aspernatur! Voluptates dolor corporis temporibus exercitationem similique 
                  recusandae deserunt numquam doloremque mollitia!
                </div>
                <div className="Domains-face">
                    <img src="/images/Projectpage3.png" alt="" />
                </div>
            </div>
            <div className="Categories">
                <h1>Domains</h1>
                <div className="Category-holder">
                    <Explorecategories topic={"Web Development"} image={"category3"} options={true}/>
                    <Explorecategories topic={"Android Development"} image={"category2"} options={true}/>
                    <Explorecategories topic={"Blockchain"} image={"category1"} options={true}/>
                </div>
            </div>
            <Talktoexpers/>
            <Newsletter/>
        </div>
    )
}

export default Domainpage