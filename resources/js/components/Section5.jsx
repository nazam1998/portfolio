import React, { useState } from 'react';

const Section5 = () => {

    return (

        <div id='section5'>

            <h2 className='text-white text-center'>Let’s discuss for <span className='text-danger mt-3'>a project</span> :</h2>

            <div id='formulaire' className='text-left container-lg' action="#" method='post'>
                <form action="submit">
                    <div className="row">
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="prenom">First name</label>
                        <input className='form-control' type="text" name='prenom' placeholder='Nazam' />
                    </div>
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="name">Last Name</label>
                        <input className='form-control' type="text" name='nom' placeholder='Muhammad' />
                    </div>
                    <div className="form-group col-lg-8 col-12 justify-content-center" >
                        <label htmlFor="mail">Email</label>
                        <input className='form-control' type="mail" name='mail' placeholder='YourAdress@gmail.com' />
                    </div>
                    </div>
                    <div className="form-group w-100" >
                        <label htmlFor="message">Message</label>
                        <textarea className='form-control' name='message' placeholder='Type your message here...' />
                    </div>
                    <div className="text-center">
                    <button className="btn btn-success mt-5 px-3 py-2 text-center" type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )

};

export default Section5
