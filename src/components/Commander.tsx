import React, { useState, useEffect } from "react";
import { ShieldPlus } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  index: number;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, index }) => {
  const [counters, setCounters] = useState<number[]>(() => {
    const savedCounters = localStorage.getItem(`counters_${index}`);
    return savedCounters ? JSON.parse(savedCounters) : [];
  });
  const [commanderNames, setCommanderNames] = useState<string[]>(() => {
    const savedNames = localStorage.getItem(`commanderNames_${index}`);
    return savedNames ? JSON.parse(savedNames) : [];
  });

  useEffect(() => {
    localStorage.setItem(`counters_${index}`, JSON.stringify(counters));
  }, [counters, index]);

  useEffect(() => {
    localStorage.setItem(`commanderNames_${index}`, JSON.stringify(commanderNames));
  }, [commanderNames, index]);

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
    setCommanderNames([...commanderNames, "Commander Name"]);
  };

  const removeCounter = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters.splice(index, 1);
      return newCounters;
    });
    setCommanderNames((prevNames) => {
      const newNames = [...prevNames];
      newNames.splice(index, 1);
      return newNames;
    });
  };

  const updateCommanderName = (index: number, name: string) => {
    setCommanderNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = name;
      return newNames;
    });
  };

  return (
    <div className="fixed inset-0 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-80 max-h-full overflow-y-auto">
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
        <div className="mt-4">
          {counters.map((counter, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="text"
                value={commanderNames[index]}
                onChange={(e) => updateCommanderName(index, e.target.value)}
                className="p-2 text-black rounded mr-2 border"
              />
              <button
                className="p-2 text-black rounded mr-2 border"
                onClick={() => incrementCounter(index)}
              >
                {counter}
              </button>
              <button
                className="p-1 text-black border"
                onClick={() => removeCounter(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;