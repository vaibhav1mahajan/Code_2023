import './App.css'

function App() {

  return (
    <>
      <Prop title='sdhfasdfa' description='asdfjkaslf' ></Prop>
    </>
  )
}

interface PropType {
  title:string,
  description:string
}

function Prop(props:PropType){
  return (

    <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
 </div>
   )
}

export default App
