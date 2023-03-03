import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='Banner-buttons'>
            <button className="button">Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator</h1>
        </div>
       <div className="fade-bottom"></div>

    </div>
  )
}

export default Banner