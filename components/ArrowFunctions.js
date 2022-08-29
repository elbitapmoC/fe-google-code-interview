import { useEffect } from "react";
const ArrowFunctions = () => {
  // original function
  function sum(a, b) {
    return a + b;
  }

  const sum2 = (a, b) => a + b;

  function isPositive(number) {
    return number >= 0;
  }

  const isPositive2 = (number) => number >= 0;

  useEffect(() => {
    console.log(`positive? ${isPositive(1)}`);
    console.log(`positive2? ${isPositive2(0)}`);
    console.log(`sum? ${sum(11, 334)}`);
    console.log(`sum2? ${sum2(344, 65)}`);
  }, []);
  return <p>ArrowFunctions</p>;
};

export default ArrowFunctions;
