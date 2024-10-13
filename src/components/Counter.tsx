import { FaRotateLeft, FaCrown } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Commander";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement, onReset }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-center w-full h-full bg-white rounded-2xl">
        <button
          onClick={onIncrement}
          className="bg-transparent active:bg-black active:bg-opacity-10 p-2 text-4xl h-full w-1/2 animate-bg-opacity"
        >
          +
        </button>
        <div className="flex flex-col items-center mx-4">
          <h2 className="text-2xl">{count}</h2>
          <div className="flex mt-4">
            <button onClick={onReset} className="m-2">
              <FaRotateLeft className="w-4 h-4" />
            </button>
            <button onClick={openModal} className="m-2">
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
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Counter;