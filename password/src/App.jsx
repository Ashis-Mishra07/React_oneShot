import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [numberAllowed , setNumberAllowed]=useState(false);
  const [charAllowed , setCharAllowed]=useState(false);
  const [length , setLength]=useState(8);
  const [password , setPassword]=useState();


  const passwordGenerator = useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="[]{}!@#$%^&*()_'':;<>?/"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1);
      pass+=str.charAt(char);
    }
    setPassword(pass);

  }, [numberAllowed, charAllowed, length]);

  useEffect(() => { 
    passwordGenerator()
   }, [numberAllowed, charAllowed, length, passwordGenerator]);


  const passwordRef= useRef(null);
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8
                    bg-gray-800 text-orange-500">
        <h1 className="text-white text-center">PassWord Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3"
                  placeholder="Password" readOnly ref={passwordRef}/>
          
          <button onClick={copyPasswordToClipboard} className=" hover:bg-blue-500 outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>(setLength(e.target.value))}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
