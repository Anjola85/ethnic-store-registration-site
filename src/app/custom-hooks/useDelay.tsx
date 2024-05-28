import { useCallback } from "react";

/**
 * Custom hook to delay function execution.
 * @param {number} delay - Delay duration in milliseconds.
 * @return {Function} A function that accepts a callback to be executed after the delay.
 */
function useDelay(delay: number) {
  return useCallback(
    (callback: () => void) => {
      setTimeout(callback, delay);
    },
    [delay]
  );
}

export default useDelay;
