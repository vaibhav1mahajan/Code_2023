import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile></Profile>
      </>
  )
}

function Profile(){
  return (
    <div style={{
      height:"550px",
      width:"450px",
      border:"2px solid red",
      position:"relative",

    }}>
      <div style={{
        height:"40%",
        width:"100%",
        border:"2px solid red"
      }}></div>
      <div style={{
        height:"120px",
        width:"120px",
        borderRadius:"50%",
        border:"1px solid blue",
        position:"absolute",
        left:"35%",
        top:"30%"
        // right:"50%"
      }}>
      </div>
      <div style={{
        height:"20%",
        width:"100%"
      }}></div>
        <h3 style={{
          textAlign:"center"
        }}>Vaibhav Mahajan <span style={{
          fontWeight:"normal",
          color:"gray"
        }}>1</span></h3> 
        <h4 style={{
          textAlign:"center",
          marginTop:"0"
        }}>Manawar</h4>
        <hr />
        <div style={{
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center",
          alignContent:"center",
          height:"15%",
          // flexGrow:"1"
          
        }}>
          <div>
            <div style={{
              textAlign:"center"
            }}> 50k</div>
            <div>Followers</div>
          </div>

          <div>
          <div style={{
              textAlign:"center"
            }}> 50k</div>
            <div>Followers</div>
          </div> 
          
          <div>
          <div style={{
              textAlign:"center"
            }}> 50k</div>
            <div>Followers</div>
          </div>

        </div>
    </div>
  )
}

export default App
