import React from 'react'
import styles from './style.css'

export default function() {
    return (
        <div className='mail'>
            <div className='mailButtonsWrapper'> 
                <div className='mailButtons'>
                    <button className='mailButtonsStyle'>
                        <img src='images/mailIcon1.png' alt='mail button' width="45" height="45"/>
                    </button>
                    <button className='mailButtonsStyle'>
                        <img src='images/mailIcon2.png' alt='mail button' width="45" height="45"/>
                    </button>
                    <button className='mailButtonsStyle'>
                        <img src='images/mailIcon3.png' alt='mail button' width="45" height="45"/>
                    </button>    
                    <button className='mailButtonsStyle'>                        
                        <img src='images/mailIcon4.png' alt='mail button' width="45" height="45"/>
                    </button>
                    <button className='mailButtonsStyle'>
                        <img src='images/mailIcon5.png' alt='mail button' width="45" height="45"/>
                    </button>
                    <button className='mailButtonsStyle'>                    
                        <img src='images/mailIcon6.png' alt='mail button' width="45" height="45"/>            
                    </button>
                </div>
            </div>
            <span className='mailTheme'>Nextmail New Look</span>
            <div className='mailLine'>
                <div className='mailUserInfo'>
                    <div className='mailUserWrapper'>
                        <img className='mailUserPhoto' src='images/mailUserPhoto.png' alt='user photo'/>
                        <div className='mailUserMail'>
                            <span className='mailName'>Salman Shah</span>
                            <div>
                                <span className='mailFrom'>From:  </span> 
                                <span className='mailWho'>shah.salman4@gmail.com</span>
                            </div>                        
                        </div>                    
                    </div>    
                    <span className='mailTime'>11:00 AM, Today</span>                            
                </div>
            </div>
            <div className='mailLine'>
                <span className='mailText mailHello'>Hello Adithya,</span>
                <span  className='mailText mailTextNormal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <span  className='mailText mailTextNormal'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</span>
                <span  className='mailText newLine'>Cheers</span>
                <span  className='mailText newLine'>DesignAvenger</span>
            </div>
            <div className='mailUploadFileWrapper'>
                <button className='mailUploadFile'>
                    <img src='images/uploadFile.png'/>
                    <span className='mailUserfile'>Sample.pdf</span>
                </button>
            </div>
            <div className='mailButtonsSend'>
                <button className='mailButtonReply'>
                    <img className='buttonTextReply' src='images/buttonReply.png'/>
                    <span>Reply</span>
                </button>
                <button className='mailButtonForward'>
                    <img className='buttonTextReply' src='images/buttonForward.png'/>
                    <span>Forward</span>
                </button>
            </div>
        </div>
    )
}