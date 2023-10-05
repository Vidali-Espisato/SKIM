import React, { useEffect, useState } from 'react'
import Logo from 'assets/images/logo.png'
import { Btn } from 'components'
import { useHistory } from 'react-router'


function LandingPage() {
  const history = useHistory()

  const handleConnect = async e => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      sessionStorage.setItem("skimToken", response.publicKey.toString())
      history.push("/home")
    }
  }

  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
     console.log('Phantom wallet found!');

     try {
      const response = await window.solana.connect({ onlyIfTrusted: true });

      sessionStorage.setItem("skimToken", response.publicKey.toString())
      history.push("/home")
     } catch (err) {
      console.log("user rejected to connect")
     }
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])


  return (
    <div className='py-5 h-screen flex flex-col landing-page'>
      <div className='flex items-center mx-20'>
        <img src={ Logo } alt="logo" />
        <h2 className='text-2xl pt-2'>SKIM</h2>
      </div>
      <div className='h-1/5'></div>
      <div className='text-center'>
        <h2 className='font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#72FF1C] to-[#00F0FF] py-5'>
          Elevate Your SKIMming Experience
        </h2>
        <b className='text-lg block pb-20'>
          Enter the realm of next-gen content curation and censorship control.
        </b>
        <Btn onClick={ handleConnect } className="shadow-md shadow-zinc-600 animate-bounce">Connect</Btn>
      </div>
    </div>
  )
}

export default LandingPage