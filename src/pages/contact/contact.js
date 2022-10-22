import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [subject,setSubject] = useState('');
    const [success, setSuccess] = useState(false);
    const form = useRef();

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
            setSuccess(true);

        }, (error) => {
            console.log(error.text);
        });


    };

    return (
        <div className='text-amber-600 ml-32 w-2/3'>
            <p className='text-4xl pt-12'>Send Me a message!</p>
            <form className = 'py-12' ref={form} onSubmit={SendEmail}>
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
            {success ? (<div>EMail was sent!</div>): (<div>EMail was failed!</div>)}

        </div>
    )

}
export default Contact;