// import React, { useState } from 'react';
// import Button from './component/button';
// import "./styling.css";
// import Form from './component/form';


// function App() {

//   return (
//     <div>
//       {/* Your content goes here */}
//       {/* <h1>Hello, World!</h1>
//       <p>This is a paragraph of text that will appear below the image.</p> */}
//       <Form />
//       {/* <Button />
//       <Button color="red" label="Sign up"/>
//       <Button color="dark" label="Sign in"/> */}
//     </div>
    
//   );
// }

import React, { useState } from 'react';
import NameInput from './Nameinput';
import EmailInput from './component/Emailinput';
import PhoneInput from './component/phoneinput';
// import Button from './component/button';
// import "./styling.css";

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phone) {
      alert(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <NameInput value={name} onChange={(event) => setName(event.target.value)} />
      <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
      <PhoneInput value={phone} onChange={(event) => setPhone(event.target.value)} />
      {/* <button /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

// export default App;

