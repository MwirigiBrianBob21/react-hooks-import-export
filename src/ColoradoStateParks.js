import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";

import * as RMFunctions from "./parks/RockyMountain";


export default function ColoradoStateParks() {
  return(
    <div>
      <MesaVerde />
    </div>
  )
}
// import { trees, wildlife} from "./parks/RockyMountain"
// console.log(trees)
// wildlife()

// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain"

// function ColoradoStateParks() {
//   howManyParks(); // => "42 parks!"

//   return <h1>Colorado State Parks!</h1>;
          
// }
// export default ColoradoStateParks;