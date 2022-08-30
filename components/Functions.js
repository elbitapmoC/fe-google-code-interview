import { useEffect, useState } from "react";

const Functions = () => {
  const [bread, makeBread] = useState("");

  // freshBread();
  // Reminder: This is a declaration.
  // It's hoisted - meaning it's brought to the top of our functional component.
  // This allows us to use freshBread().
  // function freshBread() {
  //   let bread = "🥐".repeat(3);
  //   return bread;
  // }

  const freshBread = () => {
    let bread = "🥐".repeat(3);
    return bread;
  };

  useEffect(() => {
    makeBread(freshBread());
  }, []);

  // ARGUMENTS & PARAMS -------------------------------- BAD
  const makeBreakfast = (main, side, drink) => {
    return `Breakfast includes: ${main}, ${side}, ${drink}`;
  };

  const breakfast = makeBreakfast("🥓", "🍕", "🍵");
  console.log("breakfast : ", breakfast);

  return (
    <>
      {bread}

      <button
        type="button"
        class="mt-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        onClick={() => {
          makeBread(bread + "🥐");
        }}
      >
        More Please
      </button>
    </>
  );
};

export default Functions;
