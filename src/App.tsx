import './App.css';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-3xl text-blue-500 font-bold underline">
          VITE + REACT + TS + TAILWIND + SHADCN + ESLINT + PRETTIER
        </h1>
<Button onClick={() => setCount(count + 1)}>Click me</Button>
        <p>Count: {count}</p>
      </div>
    </>
  );
}

export default App;
