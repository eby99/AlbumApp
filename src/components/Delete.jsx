import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
  return (
    <div>
            <Navbar/>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 md-12 col-lg-12 col-col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Delete</label>
                            <input type="text" className="input form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br></br><button className="btn btn-danger">Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Delete