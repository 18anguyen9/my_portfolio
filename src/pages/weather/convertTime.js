function ConvertTime(time){
    const newTime = new Date(time*1000).toDateString();
    return newTime
}
export default ConvertTime;