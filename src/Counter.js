import {useState } from "react";


function Counter(props) {

const [counter, setCounter] = useState(0);

 const handleButtonClick = () => {
     setCounter((prevCounter) => prevCounter + 1);
   };

   return (
     <>
       <h1 style={{ marginLeft: "30px", marginTop: "100px" }}>{props.title}</h1>
       <div style={{ marginLeft: "30px", marginTop: "20px" }}>
         <button onClick={handleButtonClick}>Naciśnij mnie</button>
         <p>Suma: {counter}</p>
       </div>
     </>
   );
  }
  export default Counter