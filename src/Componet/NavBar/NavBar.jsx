import React from 'react';
import "./NavBar.css"

function NavBar(props) {
    return (
        <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />

            <img className='avatar' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
        </div>
    );
}

export default NavBar;