import React from "react";

// const Button = ({ color, label }) => {
//   return (
//     <div>
//       <button className={color ? `btn ${color}`
//       {label ? label : "empty"}

//       </button>
//     </div>
//   );
// };

// export default Button;

const Button = ({ color, label }) => {
    return (
      <div>
        <button className={`btn ${color || ""}`} style={{ backgroundColor: color }}>
          {label || "Submit"}
        </button>
      </div>
    );
  };
  
  export default Button;
  
