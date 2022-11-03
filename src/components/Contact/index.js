import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Gif from '../Gif';


const Contact = () => {
    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_qnwm8x2',
                'template_zex7y1l',
                refForm.current,
                'EckuP3y7X4BQW6xzS'
            )
            .then(() => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            }, () => {
                alert('Failed to send the message, try again later')
            })
    }

    return (
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>Contact Me</h1>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input type='text' name='subject' placeholder='Subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Messagge' name='messagge' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND'/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <Gif />
    </div>
    )
}

export default Contact;