

import { useState } from "react";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [buttonColor, setButtonColor] = useState("#0095f666");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setButtonColor(event.target.value ? "#0095f6" : "#0095f666");
  };

  return (
    <>
      <div className="enter-epu">
        <input  type="email" id="email" value={inputValue} onChange={handleInputChange} placeholder="Email,Phone, or Username"/>
      </div>
      <div className="btn code-btn">
        <button style={{ backgroundColor: buttonColor }}>Send login link</button>
      </div>
    </>
  );
}
 

export default Login