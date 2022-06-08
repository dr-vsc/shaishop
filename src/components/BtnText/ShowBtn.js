import { useState } from "react";

function ShowBtn() {
  const [show, setShow] = useState(true);
  // const messages = newFunction(count===0);
  return (
    <div>
      <button onClick={() => setShow(!show)} >click</button>
      {show && <div>YES</div>}

    </div>
  );

}
// console.log(count);

export default ShowBtn;


