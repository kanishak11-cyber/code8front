import React from 'react'
import "./Eventgallery.css"

const Eventgallery = () => {
    return (
        <div className='Event-gallery'>
            <div>
                <h1>
                    Event Gallery
                </h1>
            </div>
            <div className="galleryholder">
                <div className="Frame">
                    <div className="event-image">
                        {/* <a href="https://code8.ggeeks.me">
                            <img src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/Event1.jpeg?raw=true" className="img-fluid" alt="thumbnail" />
                        </a> */}
                    </div>
                </div>
                <div className="Frame">
                    <div className="event-image">
                        <a href="https://code8.ggeeks.me">
                            <img src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/Event1.jpeg?raw=true" className="img-fluid" alt="thumbnail" />
                        </a>
                    </div>
                </div>
                <div className="Frame">
                    <div className="event-image">
                        <a href="https://code8.ggeeks.me">
                            <img src="/images/Event2.jpeg" className="img-fluid" alt="thumbnail" />
                        </a>
                    </div>
                </div>
                <div className="Frame">
                    <div className="event-image">
                        <a href="https://code8.ggeeks.me">
                            <img src="/images/Event3.jpeg" className="img-fluid" alt="thumbnail" />
                        </a>
                    </div>
                </div>
                <div className="Frame">
                    <div className="event-image">
                        <a href="https://code8.ggeeks.me">
                            <img src="/images/Event4.jpeg" className="img-fluid" alt="thumbnail" />
                        </a>
                    </div>
                </div>
                
                
            
            </div>
        </div>
    )
}

export default Eventgallery