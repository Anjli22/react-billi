import { EditNotifications } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import rectangle35 from '../images/Rectangle35.png'
import discover from '../images/DiscoverLifelong1.png';
import rect20 from '../images/Rectangle20.png'
import rect24 from '../images/Rectangle24.png'
import clock from '../images/StoryTime.png'
import facebook from '../images/Facebook.png'
import instrgram from '../images/Instagram.png'
import twitter from '../images/Twitter.png'

const LeftCard = () => {
    return (
        <div className='left-side'>
            <div className='profile'>
                <div className='profile-img'>
                   <img src={rectangle35} alt="rec"/>
                   <div>
                     <img style={{width:'35px',height:'35px'}} src={facebook} alt="twitter"/>
                     <img style={{width:'35px',height:'35px'}} src={twitter} alt="facebook"/>
                     <img style={{width:'35px',height:'35px'}} src={instrgram} alt="instragram"/>
                   </div>
                </div>
                
                <div className='profile-content'>
                  <div className='user' style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                  <div className='user-name' style={{lineHeight:'1.25',fontSize:'30px'}}><h2 >Remus Lupin</h2></div>
                    <div >
                      <Button className='edit-btn' size='small' color='secondary' variant='outlined'>Edit Profile</Button>
                    </div></div>
                    <div style={{lineHeight:'3.57'}}>JEE Aspirant</div>
                    <div className='tags'>
                    <span>JEE</span> <span>Calculus</span> <span>Mechanics</span> <span>Organic</span><span>B.Tech</span>
                    <span>Thermodynamics</span><span>Calculus</span> <span>Mechanics</span><span>Mechanics</span>
                    <span>Calculus</span><span>CSE</span> <span>Thermodynamics</span>
                    <span>B.Tech</span>
                    </div>
                    <hr style={{height:'0.9px',backgroundColor:'black',marginTop:'3%'}}/>
                    <div style={{lineHeight:'1.5'}}>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                       . Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur
                       , neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                        Eum quasi quidem quibusdam.</p>

                    </div>
                    
                    

                </div>
            </div>
            <div className='upcoming-classes'>
                <div style={{display:'flex',alignItems:'center'}}> 
                    <div><img src={discover} alt="my" style={{height:'50px', weight:'50px',}}/></div>
                    <div><h1 style={{margin:'20px 0px',marginLeft:'12px',fontSize:'2em'}}>Upcoming Classes</h1></div>
                </div>
                <div style={{display:'flex',alignItems:'center'}}><div >Today</div><hr style={{backgroundColor:'black',marginTop:'2%',width:'92%',height:'15%',margin:'0px 10px'}}/></div>


                <div className='parent-card'>
                    <div className='child-1'>
                        <div className='child-img '><img src={rect20} alt="img"/></div>
                        <div className='child-content'>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1'style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>4:00-6:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button  variant="contained">Join Now</Button></div>
                        </div>
                    </div>

                    <div className='child-1'>
                        <div className='child-img css'><img src={rect24} alt="img"/></div>
                        <div className='child-content'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1' style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>8:00-9:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button disabled variant="contained">Join Now</Button></div>
                        </div>
                    </div>
                    
                    <div style={{display:'flex',alignItems:'center'}}><div >16/09/21</div><hr style={{backgroundColor:'black',marginTop:'2%',width:'92%',height:'15%',margin:'0px 10px'}}/></div>


                    <div className='child-1'>
                        <div className='child-img cpp'><img src={rect20} alt="img"/></div>
                        <div className='child-content'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1' style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>4:00-6:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button disabled  variant="contained">Join Now</Button></div>
                        </div>
                    </div>

                    <div className='child-1'>
                        <div className='child-img css'><img src={rect24} alt="img"/></div>
                        <div className='child-content'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1' style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>8:00-9:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button disabled variant="contained">Join Now</Button></div>
                        </div>
                    </div>


                    <div className='child-1'>
                        <div className='child-img cpp'><img src={rect20} alt="img"/></div>
                        <div className='child-content'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1'  style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>4:00-6:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button disabled variant="contained">Join Now</Button></div>
                        </div>
                    </div>

                    <div className='child-1'>
                        <div className='child-img css'><img src={rect24} alt="img"/></div>
                        <div className='child-content'>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1.5%'}}>
                              <div><p className='heading1' style={{lineHeight:'30px',fontSize:'1.6rem'}}>Lorem ipsum sit amet</p></div>
                              <div style={{display:'flex',alignItems:'center'}} className='clock'>
                                <div><img src={clock} alt="pic"/></div>
                                <div style={{color:'white',fontSize:'1.2em'}}>8:00-9:00 pm</div>
                              </div>
                            </div>
                            <div><p className='p1' style={{fontSize:'0.9em',lineHeight:'1.25em'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?</p></div>
                            <div style={{textAlign:'right',marginTop:'2%'}}><Button variant="contained" disabled>Join Now</Button></div>
                        </div>
                    </div>
                   
                </div>
            </div>
            

             
            
        </div>
    )
}

export default LeftCard;
