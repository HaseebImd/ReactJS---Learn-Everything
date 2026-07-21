import React, { useEffect, useState } from "react";

function USEEffect() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(
    function () {
      console.log("Use Effect called...");
    },
    [num1],
  );

  return (
    <div>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        Increment Num 1{" "}
      </button>
      <button
        onClick={() => {
          setNum2(num2 + 1);
        }}
      >
        Increment Num 2{" "}
      </button>
      <h2>Num 1 : {num1}</h2>
      <h2>Num 2 : {num2}</h2>
    </div>
  );
}

export default USEEffect;
