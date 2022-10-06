import { useState, useEffect } from "react";

function Weathercall({ data }) {

    return (
        <div>

            <div>{data.main ? (<div>{data.weather[0].main}</div>):(<p>loading</p>)}</div>

        </div>
    )
}
export default Weathercall;