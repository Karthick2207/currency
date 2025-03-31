// import logo from './logo.svg';
// import './App.css';


// const API_URL = "https://api.exchangerate-api.com/v4/latest/";

// export default function App(){
//   const[amount,SetAmount]=useState("");
//   const[fromCurrency,SetFromCurrency]=useState("USD");
//   const[toCurrency,SetToCurrency]=useState("INR");
//   const[exchangeRates,SetExchangeRates]=useState({});
//   const[convertedAmount,SetconvertedAmount]=useState(null);
//   const inputRef=useRef();
//   useEffect(()=>{
//   fetch(`${API_URL}${fromCurrency}`)
//   .then((res)=> res.json())
//   .then((data)=>SetExchangeRates(data.rates))
//   .catch((err)=>console.error("Failed to fetch "))
//   },[fromCurrency]);
//   useEffect(()=>{
//     inputRef.current.focus[]
//   });

//   const availableCurrencies = useMemo(
//     ()=Object.keys(exchangeRates)>
//     [exchangeRates]
//   );
//   const covert =useCallback(()=>{
//     if(exchangeRates[toCurrency]){
//       const rate=exchangeRates[toCurrency];
//       SetConvertedAmount((amount*rate).toFixed(2))
//     }
//   },[amount,toCurrency,exchangeRates]
// );


//   return <div className="app">
//     <h1>Currency Converter</h1>
//     <div>
//       <input type="number" value={amount} onChange={(e)=>SetAmount(e.target.value)}
//       />
//       <select value={fromCurrency}
//       onChange={(e)=>SetFromCurrency(e.target.value)}>
//         {availableCurrencies.map((cur)=>(
//           <option key={cur} value={cur}>
//             {cur}
//           </option>
//         ))}
//       </select>
//       <span>to</span>
//       <select value={ToCurrency}
//       onChange={(e)=>SetToCurrency(e.target.value)}>
//         {availableCurrencies.map((cur)=>(
//           <option key={cur} value={cur}>
//             {cur}
//           </option>
//         ))}
//       </select>
//      <button onClick={convert}>Convert</button>
//      {convertedAmount &&
//      <h2>{amount}{fromCurrency}={cu</h2>}
//     </div>
//   </div> ;
// }

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URL = "https://api.exchangerate-api.com/v4/latest/";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRates, setExchangeRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    fetch(`${API_URL}${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => setExchangeRates(data.rates))
      .catch((err) => console.error("Failed to fetch", err));
  }, [fromCurrency]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const availableCurrencies = useMemo(
    () => Object.keys(exchangeRates),
    [exchangeRates]
  );

  const convert = useCallback(() => {
    if (exchangeRates[toCurrency]) {
      const rate = exchangeRates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [amount, toCurrency, exchangeRates]);

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <div>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          ref={inputRef}
        />
        <select 
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {availableCurrencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
        <span>to</span>
        <select 
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {availableCurrencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
        <button onClick={convert}>Convert</button>
        {convertedAmount &&
          <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>
        }
      </div>
    </div>
  );
}