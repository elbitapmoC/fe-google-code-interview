const InCommon = () => {
  // console.log(true); // T
  // console.log(!!{}); // T
  // console.log(!![]); // T
  // console.log(!!"Oi"); // T
  // console.log(!!0); // T

  // console.log(!!""); // F
  // console.log(!!-1); // F

  // try {
  //   // throw new Error();
  //   console.log(`Works 😀`);
  // } catch (error) {
  //   console.log(`Yikes.. 🫥`);
  // }

  // High Order Functions?
  // Means we can provide functions as an argument to another function
  //High order functions can also be used as return values from another function.

  // Closure?
  // Function within a function.
  // const outer = () => {
  //   const fish = "🐟";
  //   let count = 0;

  //   const inner = () => {
  //     count++;
  //     return `${count} ${fish}`;
  //   };
  //   return inner;
  // };

  // const fun = outer();
  // fun();
  // fun();
  // fun();
  // fun();
  // fun();
  // fun();
  // console.log(fun());

  // const shop = {
  //   icecream: "Choco Taco",
  //   candy: "Gummies",
  //   getCandy: function () {
  //     console.log(this); // Refers to the object it's defined on.
  //   },
  //   getIceCream: () => {
  //     console.log(this); // Refers to the global object.
  //   },
  // };

  // shop.getCandy();
  // shop.getIceCream();
  return (
    <>
      <h1 className="title text-4xl">Truthy and Falsy</h1>
    </>
  );
};

export default InCommon;
