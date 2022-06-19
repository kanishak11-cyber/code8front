import React from 'react'
import './our-partners.css'
import OurPartnersItem from './OurPartnersItem'

export default function OurPartners () {
  return (
    <div className='ourPartners'>
      <h2>Our Partners</h2>
      <div className='container'>
        <div className='col'>
          <h3>Community Partners</h3>
          <div className='row'>
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/amity-coding-club.jpeg?raw=true'
              name='Amity Coding Club'
            />
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/befikra-community.jpeg?raw=true'
              name='Befikra Community'
            />

            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/cuvette.jpeg?raw=true'
              name='Cuvette'
            />
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/gaming-geeks.jpeg?raw=true'
              name='Gaming Geeks'
            />

            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/tech-directive.jpeg?raw=true'
              name='Tech Directive'
            />
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/tezos-india.jpeg?raw=true'
              name='Tezos India'
            />
          </div>
        </div>
        <div className='col'>
          <h3>Startups</h3>
          <div className='row'>
            <OurPartnersItem
              link='/images/Upanyas.jpeg'
              name='Upanyas'
            />
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/career-clap.jpeg?raw=true'
              name='Career Clap'
            />
            <OurPartnersItem
              link='https://github.com/KapadiaShubham/code8-media/blob/master/home/Our%20Partners/lm-basket.jpeg?raw=true'
              name='LM Basket'
            />
            <OurPartnersItem
              link='/images/Careerbot.jpeg'
              name='Careerboat'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
