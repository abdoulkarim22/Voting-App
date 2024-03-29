import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


function Page() {

const [counter, setCounter] = useState(0);

const addOne = () => {
   setCounter(counter + 1)
}
const incrementer = () => {
    setCounter(counter - 1)
 }

  return (
    <>

            <div className='text-center justify-content-center d-flex'>
                <div className="card mb-3" style={{maxWidth:"500px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start "><button onClick={addOne} ><i className="bi bi-caret-up-fill"></i></button><span className='ms-2'><button onClick={incrementer}><i className="bi bi-caret-down-fill"></i></button></span> <span  className='ms-3'>{counter}</span></h5>
                                <p className="card-text text-start "><a className='' href="#">Tinfolid: tailored tinfoil hats</a> <br/> below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-start"><span className='fw-bold'>Submitted by :</span> <img className='img' src="/image/person2.png" alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </>
  )
}

export default Page
