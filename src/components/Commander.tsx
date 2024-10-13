import React, { useState } from "react";
import { ShieldPlus } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [counters, setCounters] = useState<number[]>([]);
  if (!isOpen) return null;

  const incrementCounter = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] + 1;
      if (newCounters[index] === 21) {
        newCounters[index] = 0;
      }
      return newCounters;
    });
  };

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const removeCounter = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters.splice(index, 1);
      return newCounters;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3 max-h-full overflow-y-auto">
        <div className="flex justify-between">
          <div className="flex justify-start">
            <button
              className="mt-4 p-2 text-black rounded"
              onClick={addCounter}
            >
                  <ShieldPlus />
            </button>
          </div>
          <div className="flex justify-end">
            <button className="text-black" onClick={onClose}>
              X
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {counters.map((counter, index) => (
            <div key={index} className="flex items-center mt-2">
              <button
                className="p-2 bg-blue-500 text-white rounded mr-2"
                onClick={() => incrementCounter(index)}
              >
                {counter}
              </button>
              <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={() => removeCounter(index)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
