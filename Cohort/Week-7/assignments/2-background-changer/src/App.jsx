import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState('light');

  return (
    <>
      <BackgroundChanger color={color} setColor={setColor}></BackgroundChanger>
    </>
  );
}
function BackgroundChanger({color,setColor}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        // border: "2px solid red",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor:`${color}`
      }}
    >
      <div
        style={{
          marginBottom: "25px",
          boxShadow:"2px 2px 20px black",
          borderRadius:"5px",
          backgroundColor:"white"
        }}
      >
        <button onClick={()=>{
          setColor('#0d6efd');
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-primary">
          Blue
        </button>
        <button onClick={()=>{
          setColor('gray')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-secondary">
          Gray
        </button>
        <button onClick={()=>{
          setColor('#198754')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-success">
          Green
        </button>
        <button onClick={()=>{
          setColor('#dc3545')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-danger">
          Red
        </button>
        <button onClick={()=>{
          setColor('#ffc107')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-warning">
          Yellow
        </button>
        <button onClick={()=>{
          setColor('#6610f2')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-info">
          Indigo
        </button>
        <button onClick={()=>{
          setColor('light')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-light">
          Light
        </button>
        <button onClick={()=>{
          setColor('#495057')
        }} type="button" style={{
          margin:"4px"
        }} className="btn btn-dark">
          Dark
        </button>
      </div>
    </div>
  );
}
export default App;
