import Head from 'next/head'
import {useState , useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Form from '../components/Form'
// import UploadForm from '../components/UploadForm'


export default function Home() {
  // const [currentStep, setCurrentStep] = useState(1)
  // const steps=["Information","Upload","Confirm"];
  // const displayStep=(step)=>{
  //   switch (step) {
  //     case 1: return <Information/>;
  //     case 2: return <Upload/>;
  //     case 3: return <Confirm/>;
  //   }
  // }
  return (
    <div className='md:w-1/2 mx-auto bg-white p-4 rounded-2xl shadow-xl mt-6 h-screen '>
      {/* <div className='container mt-4 horizontal'>
      <Stepper steps={steps} currentStep={currentStep}/>
      </div>
      <StepperControl/> */}
      <Form/>
      {/* <UploadForm/> */}

    </div>
  )
}
