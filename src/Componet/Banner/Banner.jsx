import React from 'react';
import "./Banner.css"

function Banner(props) {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
               <h1 className='discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis quidem odio autem offici</h1>
            </div>
            <div className="bottom"></div>
        </div>
    );
}

export default Banner;