import React from 'react'
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="p-left">
                <div className="p-left-head">
                    Protfolio
                </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias cum explicabo tempore eaque enim quis hic fugiat
                    architecto ut est incidunt, quidem rem quas quo!
                    Dolorem, non, nostrum odio qui ea quia aspernatur minus molestiae enim voluptas nesciunt sed optio natus voluptate inventore?
                </div>
                <div>
                <i className="fa-solid fa-circle-arrow-right right-icon"></i> See all ..
                </div>
            </div>
            <div className="p-right">
                <div className="p-boxes"></div>
                <div className="p-boxes"></div>
                <div className="p-boxes"></div>
                <div className="p-boxes"></div>
                <div className="p-boxes"></div>
                <div className="p-boxes"></div>
            </div>
        </div>
    )
}

export default Portfolio