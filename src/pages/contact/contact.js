import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [subject,setSubject] = useState('');
    const [success, setSuccess] = useState('');
    const form = useRef();
    const [fail,setFail] = useState('');

    const SendEmail = (e) =>{
        
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_i1why2k', 'template_trmmfms', form.current, '-H9zs88_sbBksYcow')
        .then((result) => {
            console.log(result.text);
            setName('');
            setEmail('');
            setMessage('');
            setSubject('');
            setSuccess('text-green-400');
            setFail('Email was successfully sent!')

        }, (error) => {
            console.log(error.text);
            setSuccess('text-red-400')
            setFail('Sorry email was not sent. Email limit has been reached for the day.')
        });


    };

    return (
        <div className='text-amber-600 ml-32 w-2/3 h-screen'>
            <p className='text-4xl pt-12'>Send Me a message!</p>
            <form className = 'pt-12' ref={form} onSubmit={SendEmail}>
                <input
                className='w-full p-6 my-4 bg-gray-900 rounded-lg'
                placeholder='Your Name'
                value = {name}
                name = 'Name'
                onChange={(e)=> setName(e.target.value)}
                ></input>

                <input
                className='w-full p-6 my-4 bg-gray-900 rounded-lg'
                placeholder='Your Email'
                value = {email}
                name = 'Email'
                onChange={(e)=> setEmail(e.target.value)}
                ></input>

                <input
                className='w-full p-6 my-4 bg-gray-900 rounded-lg'
                placeholder='Email Subject'
                value = {subject}
                name = 'Subject'
                onChange={(e)=> setSubject(e.target.value)}
                ></input>

                <textarea
                className='w-full p-6 mt-4 bg-gray-900 rounded-lg'
                placeholder='Your Message'
                value = {message}
                name = 'Message'
                onChange={(e)=> setMessage(e.target.value)}
                ></textarea>

                <button className='w-1/4 rounded-lg p-2 mt-2 bg-gray-900 font-bold' onClick={SendEmail}>Submit</button>
            </form>
            <div className={success}>{fail}</div>
            

        </div>
    )

}
export default Contact;