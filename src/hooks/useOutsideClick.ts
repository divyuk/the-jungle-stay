import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //   console.log("Click Outside");
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing); // true so that the event
      // gets captured during capturing phase and not in bubbling phase
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler]
  );
  return ref;
}
