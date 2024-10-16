import { FaRotateLeft, FaCrown } from "react-icons/fa6";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  color: string;
  openSidebar: () => void;
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  color,
  openSidebar,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <div
        className={`flex items-center justify-center w-full h-full rounded-2xl`}
        style={{ backgroundColor: color }}
      >
        <button
          onClick={onIncrement}
          className="bg-transparent active:bg-black active:bg-opacity-10 p-2 text-4xl h-full w-1/2 animate-bg-opacity"
        >
          +
        </button>
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-6xl">{count}</h2>
          <div className="flex mt-4">
            <button onClick={onReset} className="m-2">
              <FaRotateLeft className="w-4 h-4" />
            </button>
            <button onClick={openSidebar} className="m-2">
              <FaCrown className="w-4 h-4" />
            </button>
          </div>
        </div>
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