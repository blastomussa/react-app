import React from 'react';
import logo from '../assets/logo.png';


function Footer() {

  return (
      <footer className={"py-4 text-center content-center mt-auto text-white bg-slate-900 "}>
          <div className={"w-screen flex justify-center"}>
            <img className="h-32 w-40" src={logo} alt="slipsoap" />
          </div>
          <div >
            © 2022 Copyright:
            <a className="text-white ml-2" href="https://blastomussa.dev">blastomussa.dev</a>
          </div>
      </footer> 
  );
}

export default Footer;