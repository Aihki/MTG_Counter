import { FaRotateLeft } from "react-icons/fa6";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[300px]">
      <div className="flex justify-end w-full">
        <button onClick={onReset} className="m-4">
          <FaRotateLeft className="w-8 h-8" />
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full bg-white rounded-2xl">
        <button
          onClick={onIncrement}
          className="bg-transparent active:bg-black active:bg-opacity-10 p-2 text-4xl h-full w-1/2 animate-bg-opacity"
        >
          +
        </button>
        <h2 className="mx-4 text-2xl">{count}</h2>
        <button
          onClick={onDecrement}
          className="bg-transparent active:bg-black active:bg-opacity-10 p-2 text-4xl h-full w-1/2 animate-bg-opacity"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;