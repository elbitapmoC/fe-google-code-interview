import Champions from "../data/Champions";

const ConsoleLogs = () => {
  // assert() -------------------------------------

  let number = 11;
  const errorMsg = "the # is not even";
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, { number, errorMsg });

  // dir() -------------------------------------
  console.log(Champions);
  console.dir(Champions);

  // group() -------------------------------------
  console.groupCollapsed("Entering the Matrix...");
  // group #2 -------------------------------- START
  console.group("Level 2 | Down the rabbit hole");
  console.log('L2 => Content... "FOCUS!"');
  // group #3 -------------------------------- START
  console.group("Level 3 | Red Pill");
  console.log("L3 => Content");
  console.warn("More of L3 => Content");
  console.groupEnd();
  // group #3 -------------------------------- END
  console.log("Back to level 2");
  console.groupEnd();
  // group #2 -------------------------------- END
  console.log("Back to the outer level");
  console.groupEnd();

  return <div>ConsoleLogs</div>;
};

export default ConsoleLogs;
