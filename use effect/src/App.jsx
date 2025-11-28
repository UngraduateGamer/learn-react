import { useState,useEffect ,React} from 'react'
import axios from "axios";
const App = () => {
  const [num,setNum]=useState(0);
  const [a,setA]=useState(10);
  const [data,setData] = useState([]);
  // it runs all time when the page is render or any changes
  // useEffect(()=>{
    // console.log("i run every time when any changes of the website")
  // })

  // it runs only when first page render
  // useEffect(function(){
  //   console.log("It runs only when the page is loaded first time")
  // },[])

  // it runs only when the state is changed
  // useEffect(function(){
  //   console.log('It runs only when the state "A" is changed')
  // },[a])

  // fetching data from api when page is render first time
    useEffect(()=>{
      async function loadData(){
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data.data)
        await setData(data.data);
      }
      loadData()
    },[])
  function changeNum(){
    setNum(num+1)
  }

  function changeA(){
    setA(a+1)
  }
  return (
    <>
    <div>Use Effect</div>
    <h2>Num : {num}</h2>
    <h2>a : {a}</h2>
    <button onClick={changeNum}>Change Num</button> <br />
    <br />
    <button onClick={changeA}>Change A</button>
    <h3>Api Data</h3>
    {
      data.map((elem,index)=>{
        return <p key={index}>{elem.title}</p>;
      })
    }
    </>
  )
}

export default App