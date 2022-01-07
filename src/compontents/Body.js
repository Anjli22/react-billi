import { PatternOutlined } from '@mui/icons-material';
import React from 'react'
import thirdpic from '../images/Group61.png';
import onepic from '../images/Group62.png';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import pattern from '../images/pattern.png'

const Body = () => {
    return (
        <>
          <div className='head'>
              <div className='one'>
              <img src= {onepic} alt="my images" />
              <img src= {pattern} style={{top:'1800px'}}alt="my images" />
              </div>
              <div className='two'>
                <LeftCard/>
                <RightCard/>
                  
              </div>
              <div className='three'>
                  <img src= {thirdpic} alt="my images" />
              </div>
          </div>  
        </>
    )
}

export default Body
