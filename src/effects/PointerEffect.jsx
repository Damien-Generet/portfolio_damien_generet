import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const PointerEffect = () => {

   const [cursorX, setCursorX] = useState()
   const [cursorY, setCursorY] = useState()

   useEffect(() => {
    const setCursorPosition = (e) => {

      // define the position of the cursor on X and Y. We remove the scroll.value to reAdjust the cursor position when we scroll
      setCursorX(e.pageX - window.scrollX)
      setCursorY(e.pageY - window.scrollY)
    };

    // we set the cursor position value every time we move the mouse
    window.addEventListener('mousemove', setCursorPosition);

    return () => {
          window.removeEventListener('mousemove', setCursorPosition)
    }

   }, []);

// set the position of the spotlight
   const haloX = window.innerWidth - cursorX - 1000;
   const haloY = window.innerHeight - cursorY + 500; 

  return (
    <>
    <div className="cursor"
      style={{left:cursorX +'px',
              top:cursorY + 'px'}}>
    </div>
    <div className="halo"
      style={{left:haloX + 'px',
              top:haloY + 'px'}}>
    </div>
    </>
  )
}


export function changeScale(scale) {
  if(scale > 1){
    const pointer = document.querySelector(".cursor");
  pointer.style.scale = scale
  } else {
    const pointer = document.querySelector(".cursor");
    pointer.style.scale = 1
  }
}
export default PointerEffect