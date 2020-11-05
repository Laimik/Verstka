import React from 'react'
import styles from './style.css'

export default function panel() {
    return (
        <div className='panel'>
            <button className='buttonCompose'>
                <img src='images/Shape.png' alt='Button Logo'/>
                <span className='buttonComposeText'>Compose</span>
            </button>
            <span className='spanMailbox'>MAILBOX</span>
            <div className='line'>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" className='buttonMenuSvg'><g><g><g><path d="M13.5 0c.825 0 1.5.675 1.5 1.5v12c0 .825-.675 1.5-1.5 1.5h-12C.675 15 0 14.325 0 13.5v-12C0 .675.675 0 1.5 0zm0 1.5h-12v12h12z"/></g><g><path d="M9.75 10.5c0 1.275-.975 2.25-2.25 2.25s-2.25-.975-2.25-2.25H0v3c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-3H9.75z"/></g></g></g></svg>
                    <span className='buttonMenuText'>Inbox&nbsp;(200)</span>
                </button>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" className='buttonMenuSvg'><g><g><path d="M6.586 8.728h-.001a.753.753 0 0 0-.202.429l-.157 1.822c-.08.907-.223.592-.397.047L4.697 7.538l7.418-4.75c1.147-.716 1.147-.304.389.39zM.592 5.605c-.799.309-.788.784.025 1.055l3.577 1.195 1.39 4.336c.167.547.633.664 1.037.26l1.905-1.91.024-.023 3.49 2.638c.683.517 1.383.252 1.556-.588l2.357-11.503c.173-.84-.34-1.274-1.139-.965z"/></g></g></svg>
                    <span className='buttonMenuText'>Sent Mail</span>
                </button>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" className='buttonMenuSvg'><g><g><path d="M6.263 10.55c.196-.103.227-.314.07-.47L4.92 8.665c-.156-.157-.369-.124-.47.07 0 0-1.265 2.3-.875 2.69.39.39 2.688-.876 2.688-.876zM12.842.177l-.28.28a.4.4 0 0 0 0 .568l1.412 1.414c.157.156.411.156.568 0l.28-.281a.602.602 0 0 0 .002-.851L13.693.176a.601.601 0 0 0-.851 0zm-1.122 1.13l-6.519 6.51a.4.4 0 0 0 .002.566l1.415 1.413a.4.4 0 0 0 .567.003l6.518-6.512a.4.4 0 0 0-.002-.565l-1.415-1.414a.4.4 0 0 0-.566-.002zm2.294 3.855c-.416.13-.438.535-.393.707a6.333 6.333 0 1 1-4.45-4.48s.425.104.633-.325c.207-.43-.142-.752-.367-.811a7.5 7.5 0 1 0 5.31 5.312c-.042-.177-.317-.534-.733-.403z"/></g></g></svg>
                    <span className='buttonMenuText'>Drafts</span>
                </button>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" className='buttonMenuSvg'><g><g><path d="M3.916 5.362v7.747a.723.723 0 0 1-1.447 0V5.362zM7.68 1.046v-.53S7.665.05 7.197.05H5.194c-.466 0-.45.465-.45.465v.531h-3.67a.933.933 0 0 0-.934.931v1.531h12.143v-1.53a.933.933 0 0 0-.934-.932zm-.743 4.316v7.747a.724.724 0 0 1-1.45 0V5.362zm2.987 0v7.747c0 .4-.323.723-.718.723a.721.721 0 0 1-.72-.723V5.362zm-7.917 9.587h8.407a.932.932 0 0 0 .936-.93v-9.58H1.074v9.58c0 .513.418.93.934.93z"/></g></g></svg>
                    <span className='buttonMenuText'>Trash (2)</span>
                </button>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" className='buttonMenuSvg'><g><g><path d="M15.45 1.46a3.41 3.41 0 0 0-4.814 0l-7.15 7.187a2.042 2.042 0 0 0 0 2.895 2.042 2.042 0 0 0 2.895 0l4.43-4.465a.674.674 0 0 0 0-.977.674.674 0 0 0-.977 0L5.37 10.53a.653.653 0 0 1-.907 0 .653.653 0 0 1 0-.907l7.151-7.186a2.022 2.022 0 0 1 2.826 0 2.022 2.022 0 0 1 0 2.826l-7.151 7.186c-1.326 1.325-3.454 1.325-4.745 0-1.325-1.326-1.325-3.454 0-4.744l6.419-6.419a.674.674 0 0 0 0-.977.674.674 0 0 0-.977 0L1.567 6.693c-1.85 1.849-1.85 4.884 0 6.733 1.848 1.848 4.883 1.848 6.732 0l7.151-7.152a3.41 3.41 0 0 0 0-4.813z"/></g></g></svg>
                    <span className='buttonMenuText'>Attachments</span>
                </button>
                <button className='buttonMenu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" className='buttonMenuSvg'><g><g><path d="M9.94 7.48a1.265 1.265 0 1 0 2.53 0 1.265 1.265 0 0 0-2.53 0zm-3.795 0a1.265 1.265 0 1 0 2.53 0 1.265 1.265 0 0 0-2.53 0zm-3.796 0a1.265 1.265 0 1 0 2.53 0 1.265 1.265 0 0 0-2.53 0zm7.952-6.326a3.414 3.414 0 0 1 3.434 3.434v5.783a3.414 3.414 0 0 1-3.434 3.434H4.518a3.414 3.414 0 0 1-3.434-3.434V4.588a3.414 3.414 0 0 1 3.434-3.434zM0 4.588v5.783a4.52 4.52 0 0 0 4.518 4.518h5.783a4.52 4.52 0 0 0 4.518-4.518V4.588A4.52 4.52 0 0 0 10.301.07H4.518A4.52 4.52 0 0 0 0 4.588z"/></g></g></svg>
                    <span className='buttonMenuText'>More…</span>
                </button>
            </div>
            <span className='spanMailbox'>LISTS</span>
            <a href='#' className='refLinkedn'>Linkedn</a>
            <div className='line'></div>
            <span className='spanMailbox'>LABELS</span>
            <div>
                <button className='buttonMenu'>
                    <img className='buttonMenuPurple' scr='images/RectanglePurple.png'/>
                    <span className='buttonMenuText'>Personal&nbsp;(2)</span>
                </button>
                <button className='buttonMenu'>
                    <img className='buttonMenuOrange' scr='images/RectangleOrange.png'/>
                    <span className='buttonMenuText'>Clients</span>
                </button>
                <button className='buttonMenu'>
                    <img className='buttonMenuYellow' scr='images/RectanglePurple.png'/>
                    <span className='buttonMenuText'>Work&nbsp;(2)</span>
                </button>
                <button className='buttonMenu'>
                    <img className='buttonMenuBlue' scr='images/RectanglePurple.png'/>
                    <span className='buttonMenuText'>Friends</span>
                </button>
            </div>
            <div className='buttonMenuFooter lineBottom'>
                <img className='buttonMenuFooterPhoto' src='images/userPhoto.png'/>
                <div className='buttonMenuFooterWrapper'>
                    <span className='buttonMenuFooterUsername'>Salman&nbsp;Shah</span>
                    <span className='buttonMenuFooterUseremail'>shah.salman4@gmaiil.com</span>
                </div>                
            </div>
        </div>        
    )
}