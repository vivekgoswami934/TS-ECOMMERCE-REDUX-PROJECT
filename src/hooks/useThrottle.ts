import { useEffect, useRef, useState } from "react";

const useThrottle = (value: string, delay: number) => {
  const throttleId = useRef(false);
  const [throttledText, setThrottledText] = useState(value);

  useEffect(() => {
    if (!throttleId.current) {
      throttleId.current = true;
      setTimeout(() => {
        throttleId.current = false;
        setThrottledText(value);
      }, delay);
    }
  }, [delay, value]);
  return throttledText;
};

export default useThrottle;
