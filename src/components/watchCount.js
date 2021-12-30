import React, { useState, useEffect } from "react";

function WatchCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var timer = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  return <h6>You have used {count} seconds on this website</h6>;
}

export default WatchCount;