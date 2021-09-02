import React, { useState } from 'react';
import router from 'react-router';

const Section5 = () => {

    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[msg, setMessage] = useState('');
    const[success, setSuccess] = useState('');

    async function sendMail()
    {

        let item ={firstname, lastname, email, msg}

        let result = await fetch(window.location.href+"api/send/mail", {
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        result = await result.json();

        setFirstName('')
        setLastName('')
        setEmail('')
        setMessage('')
    }
    return (

        <div id='section5'>

            <h2 className='text-white text-center'>Let’s discuss for <span className='text-danger mt-3'>a project</span> :</h2>
            {success=='success' &&
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Your message has been successfully sent
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            {success=='error' &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    There was an error sending your message. Please try again later
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }
            <div id='formulaire' className='text-left container-lg'>
                    <div className="row">
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="firstname">First name</label>
                        <input className='form-control' type="text" value={firstname} name='firstname' placeholder='Nazam' onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group col-lg-6 col-12" >
                        <label htmlFor="lastname">Last Name</label>
                        <input className='form-control' type="text" value={lastname} name='lastname' placeholder='Muhammad' onChange={(e)=>setLastName(e.target.value)}/>
                    </div>
                    <div className="form-group col-lg-8 col-12 justify-content-center" >
                        <label htmlFor="mail">Email</label>
                        <input className='form-control' type="mail" value={email} name='email' placeholder='YourAdress@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    </div>
                    <div className="form-group w-100" >
                        <label htmlFor="message">Message</label>
                        <textarea className='form-control' name='message' value={msg} placeholder='Type your message here...' onChange={(e)=>setMessage(e.target.value)}/>
                    </div>
                    <div className="text-center">
                    <button className="btn btn-success mt-5 px-3 py-2 text-center" type='submit' onClick={sendMail}>Submit</button>
                    </div>
            </div>
        </div>

    )

};

export default Section5
