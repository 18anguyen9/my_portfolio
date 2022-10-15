
import { useState } from "react";
import profile_pic from './../../profile_pic.JPEG'
import home from './home.css'
import Contact from './../contact/contact'
import Discord from './discord';

function Home() {
	const profilePic = require('./../../profile_pic.JPEG');
	return (
		<div className='flex text-white text-3xl w-full '>
		
			<div className='ml-60 mt-44 w-2/6'>
				<p className='text-amber-400 text-xl py-2'>Hello!</p>
				<p className='text-amber-400 text-4xl py-2'>I'm Alex Nguyen</p>
				<p className='text-amber-400 text-xl py-2'>A Software developer</p>

				<div className='flex pt-2'>
					<div className = 'pr-2'>
						<button class="bg-slate-100	 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
							<svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
							<a  href={require("../../Alex_Resume.pdf")} download="Alex_Nguyen_Resume">Resume</a>
						</button>
					</div>
					
					<div className='pl-2'>
						<button class="bg-slate-100	hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center">
							<a>Let's talk</a>
						</button>
					</div>
				</div>
			</div>
			
			
			<Discord></Discord>
			

			
        </div>
	);
}

export default Home;
