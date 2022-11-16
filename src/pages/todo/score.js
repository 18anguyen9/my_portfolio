import { useState, useRef, useEffect } from "react";
function Score( data ){
    const current = new Date();
    const date = current.getDay();

    let curmon = 0;
    let curtues = 0;
    let curwed = 0;
    let curthur = 0;
    let curfri = 0;
    let cursat = 0;
    let cursun = 0;
    data.map((task)=>{
        curmon+=task.monday
        curtues+=task.tuesday
        curwed+=task.wednesday
        curthur+=task.thursday
        curfri+=task.friday
        cursat+=task.saturday
        cursun+=task.sunday
    });
    const curScore = {
        0:curmon/data.length,
        1:curtues/data.length,
        2:curwed/data.length,
        3:curthur/data.length,
        4:curfri/data.length,
        5:cursat/data.length,
        6:cursun/data.length
    }
    return (curScore[date-1]*100)
}
function WeeklyScore(data){
    let curScore = 0;
    data.map((task)=>{
        curScore+=task.completed;
    });
    console.log((curScore/data.length)*100)
    return (curScore/data.length)*100
}
export {Score,WeeklyScore};