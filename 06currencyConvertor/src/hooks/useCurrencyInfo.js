import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // .then((res) => setData(res.currency))        // same like line no. 9
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;