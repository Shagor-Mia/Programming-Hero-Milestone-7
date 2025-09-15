import React from "react";

const Food = ({ food, iseEaten, time = 0 }) => {
  // if-else
  //   if (iseEaten) {
  //     return (
  //       <div>
  //         <p>
  //           i ate :{food} and takes {time} minutes.
  //         </p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>i didn't eat and i will eat {food} now.</p>
  //       </div>
  //     );
  //   }

  // ternary
  //   return iseEaten ? (
  //     <p>
  //       i ate :{food} and takes {time} minutes.
  //     </p>
  //   ) : (
  //     <p>i didn't eat and i will eat {food} now.</p>
  //   );

  // truthy &&
  //   return (
  //     iseEaten && (
  //       <p>
  //         i ate :{food} and takes {time} minutes.
  //       </p>
  //     )
  //   );

  // falsy ||
  return iseEaten || <p>i didn't eat and i will eat {food} now.</p>;
};

export default Food;
