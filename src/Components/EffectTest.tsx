import { useEffect, useState } from "react";

const TestingClickEffect = () =>{
    console.log("sadge");
    /*
    useEffect(
        () =>{
            console.log("Click with use Effect is activated");

            document.addEventListener("click",listener);
        },

        return ()=>{
            console.log("Click with use Effect is now gone")
            document.removeEventListener("click", listener);
        },


    );
    */
   return (
    <div>
        <h1>
            Hello there
        </h1>
        <button>
            Click me
        </button>

    </div>
   );
}

