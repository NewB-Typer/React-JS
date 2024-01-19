import React, { useState, useCallback, useEffect, useRef } from "react"
import './App.css'

function App() {
const [length, setLength] = useState(6)
const [number, noNumber] = useState(false)
const [symbol, noSymbol] = useState(false)
const [password, setPassword] = useState('')
const[copymsg, setCopyMsg] = useState('copy')
const passwordRefer = useRef(null)
const passwordGenerator = useCallback(()=>{
  let pass= ""
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if (number){
  str +=  "01234567899"
}
if (symbol){
  str +=  "!@#$%^&*-_+={}[]~/£()"
}

for(let i = 1; i <= length; i++){
  let charPlace = Math.floor(Math.random() *  str.length + 1)
 pass += str.charAt(charPlace)

}

setPassword(pass)

}, [length, number, symbol, setPassword ])

useEffect(()=>{
  passwordGenerator()
}, [length, number, symbol, passwordGenerator])

const copyFunc = useCallback(()=>{
  passwordRefer.current?.select();
  window.navigator.clipboard.writeText(password)
setCopyMsg("Copied");

setTimeout(()=>{
setCopyMsg("copy")
},500)

},[password])


  return (
    <>
<div className=" border-4  m-auto justify-center h-60 bg-gray-700 w-1/3">
<h1 className=" p-4 border-dotted border-2 text-4xl text-center text-white" >Password Generator</h1>
<div className="flex  text-4xl p-6 py-8 ">
  <input className="text-2xl border-2 border-blue-500 w-3/4" type="text" placeholder="********" value={password} readOnly ref={passwordRefer}></input>
<button className="w-40 bg-blue-200 text-green-900 ml-8 border-solid border-green-600 border-2  text-center" onClick={copyFunc}>{copymsg}</button>
</div>
<div>
<input onChange={(e)=>{
  setLength(e.target.value)
} } className="ml-6"  type="range" min={8} max={30} value={length}/>
<label className="text-white text-3xl ml-3" >Length: {length} </label>


<input className="ml-2 w-6 h-6" type="checkbox" defaultChecked={number} onChange={()=>{
noNumber((prev) => !prev )
}}/>
<label className="text-white text-3xl ml-1 ">Number {number} </label>
<input className="ml-2 w-6 h-6" type="checkbox" defaultChecked={symbol} onChange={()=>{
noSymbol((prev) => !prev)
}}/> 
<label className="text-white text-3xl ml-1">Symbol</label>
</div>



</div>

        </>
  )
}

export default App
