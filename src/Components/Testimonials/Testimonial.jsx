import React from 'react'
import "./Testimonial.css"
// import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// swiper bundle styles
// import 'swiper/swiper-bundle.min.css'

// swiper core styles
// import 'swiper/swiper.min.css'

// modules styles
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'

// import 'swiper/modules/navigation/navigation.min.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Card = (props) => {
    return (
        <div className="testimonial-card">
            <img id="img-home" src={props.image_url} ></img>
            <div className="Name-holder">
                {props.name}
            </div>
            {/* <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img> */}
            <div className="Testimonial-exp">
                {props.description}
            </div>
        </div>
    )
}
const data = [
    {
        name: "Aman (team Upanyaas)",
        description: "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad that we at upanyas decided to work with you. It’s really great how easy it was for us to get hands on good engineers and everyone and Code8 made sure that the onboarding was as smooth as possible. Cheers to you guys. Looking forward to work with the team in the near future as well."
    },
    {
        name: "Gurtaran Singh (Gaming Geeks)",
        description: "Working with Code8 was very amazing and informative.  Gaming Geeks collaborated with Code8 on the Web Game Dev Bootcamp that took place from February 24 to March 2, 2022. Prior to the event, we felt it would be difficult for both teams to make one decision because we were two different communities managed by members of different age groups, different experiences, but the Code8 team was brilliant in unity, teamwork and hard work.  Our whole team is very grateful to Code8 as they have worked not only for the event, but they also give a lot of talks and advice to our team. In the end, I would like to say that If we got another chance to collaborate with the Team, we will be more than happy to do so."
    },
    {
        name: "Aaditya (Befikra Community)",
        description: "My experience with Code8 have been amazing and the founders are so cool and they have helped us grow in our domain in the ecosystem they provide. They have also previously conducted hackathons and events on blockchain development which were really awesome. I am happy to be part of Code8 community. Wishing more growth to code8 and to learn more from the community."
    },
    {
        name: "Vikas Rai",
        description: `Hello everyone, I'm Vikas Rai. Recently I attended TezIndia Blockchain Bootcamp 1.0. The Bootcamp was amazing. I didn't have any previous knowledge about Web 3.0. So this Bootcamp was very helpful to get to know about Web 3.0 and also get familiarized with Tezos Blockchain.

        The mentor was very knowledgeable and explained everything nicely.
        It was a one-week-long Bootcamp and after the end of Bootcamp, we also have to make the projects based on Tezos Blockchain.
        
        So, regarding that, I planned to build the "NFT Domain Marketplace" (Where people can buy web3 domain names).
        
        I got stuck at various points while building projects but thanks to the mentors and members of the Bootcamp they helped a lot in clearing our doubts and also suggesting the solution to our problem.
        
        In the end, I would like to say that the overall experience of this Bootcamp is so amazing and I wish they organize these kinds of Bootcamp again.
        `
    }
]
const Testimonial = () => {
    return (
        <div className='Testimonial'>

            <div className='Testimonial-head'>
                <h1>
                    Testimonial
                </h1>
            </div>
            <h2>
                Some amazing Experience from Techie Around.
            </h2>

            <div className="Testimonial-holder">
                {/* <div className="testimonial-card">
                    <img id="img-home" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/icons/profile.png?raw=true" ></img>
                    <div className="Name-holder">
                        Anirudh
                    </div>
                    <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img>
                    <div className="Testimonial-exp">
                        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                        elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                        pellentesque em dolor est <br></br>
                        habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                        quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                        dignissim sed amet erat<br></br> augue quis.
                    </div>
                </div>
                <div className="testimonial-card">
                    <img id="img-home" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/icons/profile.png?raw=true" ></img>
                    <div className="Name-holder">
                        Anirudh
                    </div>
                    <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img>
                    <div className="Testimonial-exp">
                        Lorem ipsum dolor sit amet,consectetur adipiscing
                        elit. Morbi cras est nisl enim,{" "}
                        pellentesque em dolor est 
                        habitant. Vitae nunc, dolor gravida duis. At et,
                        quam est donec. Consectetur morbi et{" "}
                        dignissim sed amet erat augue quis.
                    </div>
                </div>
                <div className="testimonial-card">
                    <img id="img-home" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/icons/profile.png?raw=true" ></img>
                    <div className="Name-holder">
                        Anirudh
                    </div>
                    <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img>
                    <div className="Testimonial-exp">
                        Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing
                        elit.<br></br> Morbi cras est nisl enim,<br></br>{" "}
                        pellentesque em dolor est <br></br>
                        habitant. Vitae nunc, dolor<br></br> gravida duis. At et,
                        quam est <br></br>donec. Consectetur morbi et<br></br>{" "}
                        dignissim sed amet erat<br></br> augue quis.
                    </div>
                </div> */}
                <Swiper
                    pagination={true}
                    loop={true}
                    //  navigation={true}
                    // navigation={{
                    //     nextEl: '.custom-swiper-button-next',
                    //     prevEl: '.custom-swiper-button-prev',
                    // }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                {data.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <Card key={index} name={item.name} image_url="https://github.com/KapadiaShubham/code8-media/blob/master/home/icons/profile.png?raw=true" description={item.description} />
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>

        </div>
    )
}

export default Testimonial