import React from 'react'
import "./Ourreach.css"

const Ourreach = () => {
    return (
        <div className='Ourreach'>
            <div className="Ourreach-head">
                Our reach
            </div>
            <div className="reach-holder">
                <div className="reaches">
                    <img src="/images/reach1.png" style={{ width: "90px", }} />
                    <div className="reach-data">
                        <h1 className="reach-card-head">1K+</h1>
                        <h3 className="reach-card-p" style={{ width: "80px" }}>
                            Total Students
                        </h3>
                    </div>
                </div>
                <div className="reaches">
                    <img src="/images/reach2.png" style={{ width: "90px", }} />
                    <div className="reach-data">
                        <h1 className="reach-card-head">10+</h1>
                        <h3 className="reach-card-p" style={{ width: "120px" }}>
                            Programs & Workshops
                        </h3>
                    </div>
                </div>
                <div className="reaches">
                    <img src="/images/reach3.png" style={{ width: "90px", }} />
                    <div className="reach-data">
                        <h1 className="reach-card-head">10</h1>
                        <h3 className="reach-card-p" style={{ width: "80px" }}>
                            Projects Completed
                        </h3>
                    </div>
                </div>
                <div className="reaches">
                    <img src="/images/reach4.png" style={{ width: "90px", }} />
                    <div className="reach-data">
                        <h1 className="reach-card-head">10</h1>
                        <h3 className="reach-card-p" style={{ width: "80px" }}>
                            Companies Associated
                        </h3>
                    </div>
                </div>
                <div className="reaches">
                    <img src="/images/reach5.png" style={{ width: "90px", }} />
                    <div className="reach-data">
                        <h1 className="reach-card-head">10</h1>
                        <h3 className="reach-card-p" style={{ width: "120px" }}>
                            Institutes Associated
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Ourreach