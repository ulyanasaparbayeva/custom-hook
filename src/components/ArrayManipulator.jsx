import React from 'react';
import useFetch from '../hooks/useFetch';


function ArrayManipulator() {
  const { array, filter, map, push, removeByIndex, clear } = useFetch([1, 2, 3, 4, 5]);

  return (
    <div>
      <div>
        Current Array: {array.join(', ')}
      </div>
      <button onClick={() => filter(num => num % 2 === 0)}>Filter Evens</button>
      <button onClick={() => map(num => num * 2)}>Double Values</button>
      <button onClick={() => push(6)}>Add 6</button>
      <button onClick={() => removeByIndex(0)}>Remove First Element</button>
      <button onClick={clear}>Clear Array</button>
    </div>
  );
}

export default ArrayManipulator;
