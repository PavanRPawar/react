import { useState } from "react"
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div 
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          {/* <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{backgroundColor: "orange"}}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}
          >
            Blue
          </button> */}
          
          <Button 
            color = "red"
            btnName = "Red"
            setColor = {setColor}
          />
          <Button 
            color = "orange"
            btnName = "Orange"
            setColor = {setColor}
          />
          <Button 
            color = "blue"
            btnName = "Blue"
            setColor = {setColor}
          />
        </div>
      </div>
    </div>
  )
}

export default App
