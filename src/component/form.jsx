// import React, { useState } from 'react';

// const Form = () => {

//     const [name, setName] = useState("")
    
//   const handleChange = (e) =>{
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//         alert("no name input");
//         return
//     }

//     console.log(name)
//   }
  
//     return (
//       <form onSubmit={(e)=> handleSubmit{
//         e.preventDefault()
//         const {name}
//       }}>
//         <input type="text" 
//         placeholder='ENTER NAME' 
//         value={name} 
//         name="name" 
//         onChange={handleChange} 
//         required />


//       </form>
//     );
//   };

//   export default Form;



// import React, { useState } from 'react';
// import Button from './button';

// const Form = () => {
//   const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     if (!name) { // Trim whitespace to avoid false negatives
//       alert("No name input");
//       return;
//     }

//     console.log(name); // Log the name to the console
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="ENTER NAME"
//         value={name}
//         name="name"
//         onChange={handleChange}
//         required
//       />
//       <Button onSubmit color="red" label="Sign up"/>
//     </form>
//   );
// };

// export default Form;

import { useState } from "react";
import Button from "./button";
import Input from "./input";

const Form = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("no name input");
      return;
    }
    console.log(name);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        type="text"
        placeholder="enter a name"
        value={name}
        label="name"
        handleChange={handleChange}
      />
      <Button color="dark" />
    </form>
  );
};

export default Form;

