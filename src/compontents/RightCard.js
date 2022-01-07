import { Button } from '@mui/material';
import React from 'react'
import image2 from '../images/image2.png'
import college from '../images/college.png'
import courses from '../images/corses4.png'
import star from '../images/star.png'
import courses5 from '../images/courses5.png';
import image6 from '../images/image16.png';
import rectangle20 from '../images/Rectangle20.png';
import rectangle24 from '../images/Rectangle24.png';
import group63 from '../images/Group63.png'

const RightCard = () => {
    return (
        <div class='right-side'>
            <div class='doubt'>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5%'}}>
                    <div><img style={{width:'57%'}}src={image2} alt="pic"/></div>
                    <div>
                      <div style={{fontSize:'1.7em'}}>Any Any Doubt?</div>
                      <div>
                          <p style={{marginLeft: '38px',marginTop: '15px'}}>
                          <ul>
                            <li>Talk to our mentors</li>
                            <li>Get expert Guidence</li>
                            <li>Talk to our mentors</li>
                          </ul>
                          </p>
                      </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'4%'}} ><Button className='doubt-btn' variant='outlined' style={{border:'2px solid white',FontWeight:'bold',textTransform:'uppercase',color:'white'}}>Book Your Free mentorship Session Now!</Button></div>
            </div>


            <div className='upcoming-classes'>
                <div style={{display:'flex',alignItems:'center'}}> 
                    <div><img src={college} alt="my" style={{height:'50px', weight:'50px'}}/></div>
                    <div><h1 style={{lineHeight:'3',marginLeft:'8px',fontSize:'2em'}}>My Courses</h1></div>
                </div>
                    <div className='parent-card'>
                    {/* card1 */}
                        <div className='childr-1'>
                            <div className='child-imgr '><img style={{borderRadius:'0px'}} src={courses} alt="img"/></div>
                            <div className='child-contentr'>
                                <div style={{marginBottom:'1.5%'}}>
                                    <div><p style={{lineHeight:'30px',fontSize:'1.3rem'}}>Lorem ipsum sit </p></div>
                                </div>
                                <div><p style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,</p></div>
                                <div style={{marginTop:'2%'}}>
                                    <img style={{width:'25px',}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                </div>
                            </div>
              
                        </div>
                          {/* card2 */}
                        <div className='childr-1'>
                            <div className='child-imgr '><img style={{borderRadius:'0px'}} src={courses5} alt="img"/></div>
                            <div className='child-contentr'>
                                <div style={{marginBottom:'1.5%'}}>
                                    <div><p style={{lineHeight:'30px',fontSize:'1.3rem'}}>Lorem ipsum sit </p></div>
                                </div>
                                <div><p style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,</p></div>
                                <div style={{marginTop:'2%'}}>
                                    <img style={{width:'25px',}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                </div>
                            </div>
              
                        </div>
                            {/* card3 */}
                        <div className='childr-1'>
                            <div className='child-imgr '><img style={{borderRadius:'0px'}} src={image6} alt="img"/></div>
                            <div className='child-contentr'>
                                <div style={{marginBottom:'1.5%'}}>
                                    <div><p style={{lineHeight:'30px',fontSize:'1.3rem'}}>Lorem ipsum sit </p></div>
                                </div>
                                <div><p style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,</p></div>
                                <div style={{marginTop:'2%'}}>
                                    <img style={{width:'25px'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                </div>
                            </div>
              
                        </div>
                                {/* card4 */}
                        <div className='childr-1'>
                            <div className='child-imgr '><img style={{borderRadius:'0px'}} src={rectangle24} alt="img"/></div>
                            <div className='child-contentr'>
                                <div style={{marginBottom:'1.5%'}}>
                                    <div><p style={{lineHeight:'30px',fontSize:'1.3rem'}}>Lorem ipsum sit </p></div>
                                </div>
                                <div><p style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,</p></div>
                                <div style={{marginTop:'2%'}}>
                                    <img style={{width:'25px',}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                </div>
                            </div>
              
                        </div>
                                {/* card5 */}
                        <div className='childr-1'>
                            <div className='child-imgr'><img style={{borderRadius:'0px'}} src={rectangle20} alt="img"/></div>
                            <div className='child-contentr'>
                                <div style={{marginBottom:'1.5%'}}>
                                    <div><p style={{lineHeight:'30px',fontSize:'1.3rem'}}>Lorem ipsum sit </p></div>
                                </div>
                                <div><p style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetuer adipisc Lorem ipsum dolor sit amet,</p></div>
                                <div style={{marginTop:'2%'}}>
                                    <img style={{width:'25px'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                    <img style={{width:'25px',marginLeft:'2%'}} src={star} alt='star'/>
                                </div>
                            </div>
              
                        </div>
                    </div>

                    
                </div>
            
            <div><img  style={{height:"40px", weight:"40px",marginTop:'2%'}} src={group63} alt='group63'/></div>
        </div>
    )
}

export default RightCard;
