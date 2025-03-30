import { useState ,useCallback } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberallowed , setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberallowed) str += "0123456789"
        if (charallowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)

        }

        setPassword(pass)


    }, [length, numberallowed, charallowed, setPassword])

  return (
    <>
      <h1 className={'text-4xl text-center text-black font-bold'}>PassForge</h1>
    </>
  )
}

export default App

