
import { useState } from "react";
import profile_pic from './../../profile_pic.JPEG'
import home from './home.css'
import Contact from './../contact/contact'

function Home() {
	const logo = require('./../../profile_pic.JPEG');
	return (
		<div className='bg-white text-slate-700 text-3xl text-center w-full'>
		
			<div className='text-center py-4'>
				<p className=''>Hi, I am Alex Nguyen</p>
			</div>

			<div className='flex justify-center py-4'>
				<div className = 'px-2'>
					<button class="bg-slate-300	 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
						<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
						<a  href={require("../../Alex_Resume.pdf")} download="Alex_Nguyen_Resume">Resume</a>
					</button>

				</div>
				
				<div className='px-2'>
					<button class="bg-slate-300	hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
						<a>Let's talk</a>
					</button>
				</div>
			</div>
			
			<div className='flex justify-center pb-4'>
				<img className='w-2/12 h-2/12 rounded-t-full' src={logo} />
			</div>
			<p className=''>HEREEREEE</p>
			<Contact/>
        </div>
	);
}

export default Home;
