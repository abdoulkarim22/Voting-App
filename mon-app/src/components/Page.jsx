import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Page extends Component {
    render() {
        return (
           <>
            <h1>Popular Apps on Product Hunt</h1>
            <hr />
            <div className='text-center justify-content-center d-flex'>
                <div className="card mb-3" style={{maxWidth:"500px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start ">Card title</h5>
                                <p className="card-text text-start ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-start "><img className='img' src="/image/person2.png" alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </>
        )
    }
}

export default Page
