import React from 'react'

export default function Loginform() {
    return (
        <center>
            <div className="bg-info w-50 mt-5 p-3 ">
                <form action="#" method="GET">
                    <div className="mb-3 ">
                        <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                        <input  type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlfor="exampleInputPassword1" className="form-label" required>Password</label>
                        <input type="password" className="form-control " id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        </center>
    )
}
