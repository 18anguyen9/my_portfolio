import sendReq from '../../sendReq';
import { useState, useRef, useEffect, React } from "react";


function Task({ mon, tues, wed, thurs, fri, sat, sun, title }){
    const [Monday, SetMonday] = useState(mon);
    const [Tuesday, SetTuesday] = useState(tues);
    const [Wednesday, SetWednesday] = useState(wed);
    const [Thursday, SetThursday] = useState(thurs);
    const [Friday, SetFriday] = useState(fri);
    const [Saturday, SetSaturday] = useState(sat);
    const [Sunday, SetSunday] = useState(sun);
    //const [updateTask,SetUpdateTask] = useState(updateTask)
    const updateTask = (e)=> {
        const tesitngUrl  = 'api/add/';
        const bod = {
            'title':title,
            'monday': Monday,
            'tuesday': Tuesday,
            'wednesday': Wednesday,
            'thursday': Thursday,
            'friday': Friday,
            'saturday': Saturday,
            'sunday': Sunday
          };
        bod[e.target.name] = !bod[e.target.name];
        const postOptions = {
            method: 'POST',
            body: bod
        };
        sendReq(tesitngUrl,postOptions)
            //.then((data)=>console.log('Sent!'));
        //window.location.reload();
    };
    
    return(
        <div>
            
            <div className='flex justify-between border-t-2 border-amber-900 border-x-2'>
                <p className='w-24 whitespace-nowrap p-2'>{title}</p>
                <input  type="checkbox" checked={Monday} onClick={(e) => {SetMonday(!Monday); updateTask(e);}} name='monday'></input>
                <input  type="checkbox" checked={Tuesday} onClick={(e) => {SetTuesday(!Tuesday); updateTask(e);}} name='tuesday'></input>
                <input  type="checkbox" checked={Wednesday} onClick={(e) => {SetWednesday(!Wednesday);updateTask(e);}} name='wednesday' ></input>
                <input  type="checkbox" checked={Thursday} onClick={(e) => {SetThursday(!Thursday);updateTask(e);}} name='thursday'></input>
                <input  type="checkbox" checked={Friday} onClick={(e) => {SetFriday(!Friday);updateTask(e);}} name='friday'></input>
                <input  type="checkbox" checked={Saturday} onClick={(e) => {SetSaturday(!Saturday);updateTask(e);}} name='saturday'></input>
                <input  type="checkbox" className='mr-4' checked={Sunday} onClick={(e) => {SetSunday(!Sunday);updateTask(e);}} name='sunday'></input>
                
            </div>
        </div>
    )
}
export default Task