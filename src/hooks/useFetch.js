import { useState } from 'react';

function useFetch(initialArray) {
  const [array, setArray] = useState(initialArray);

  return {
    array,
    setArray,
    filter: (callback) => setArray((prev) => prev.filter(callback)),
    map: (callback) => setArray((prev) => prev.map(callback)),
    push: (element) => setArray((prev) => [...prev, element]),
    removeByIndex: (index) => setArray((prev) => prev.filter((_, i) => i !== index)),
    clear: () => setArray([]),
  };
}

export default useFetch;
