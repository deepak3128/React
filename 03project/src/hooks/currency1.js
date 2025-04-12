import { useEffect, useState } from "react";

function currency1() {
    const [data ,setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json)
        .then((res) => setdata(res[currency]))
        console.log(data);
    
    }, [currency])
    console.log(data);
    return data;
}

export const currency = "usd"; // or any default currency code


export default currency1;