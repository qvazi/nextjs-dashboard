'use client';
import { useEffect, useState } from 'react';

export const ClientComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('effect');
  }, []);

  const bindedSetCount = setCount.bind(null, (prev) => prev + 1);

  return (
    <button
      type="button"
      className="bg-blue-500 px-2 py-1 text-white hover:bg-blue-400 active:bg-blue-300"
      onClick={bindedSetCount}
    >
      Clicked: {count}
    </button>
  );
};
