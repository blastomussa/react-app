import React from 'react';
import logo from '../assets/logo.png';


function Footer() {

  return (
      <footer className={"border-2 text-center content-center p-4 mt-auto text-white"}>
          <div class={"w-screen flex justify-center"}>
            <img class="h-32 w-40 " src={logo} alt="slipsoap" />
          </div>
          <div >
            © 2022 Copyright:
            <a className="text-white ml-5 bg-black" href="https://blastomussa.dev">blastomussa.dev</a>
          </div>
      </footer> 
  );
}

export default Footer;