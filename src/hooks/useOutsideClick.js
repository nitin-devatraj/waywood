import { useEffect, useRef } from "react";

export function useOutsideClick(handler) {
  const windowRef = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        const target = e.target;
        const element = windowRef.current;
        if (element && !element.contains(target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [handler]
  );

  return windowRef;
}
