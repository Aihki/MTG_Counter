import { useState, useEffect } from "react";
import "../index.css";
import Counter from "../components/Counter";

const Life = () => {
  const [numPlayers, setNumPlayers] = useState(1);
  const [counts, setCounts] = useState<number[]>(() => {
    const savedCounts = localStorage.getItem("counterCounts");
    return savedCounts ? JSON.parse(savedCounts) : Array(4).fill(40);
  });

  useEffect(() => {
    localStorage.setItem("counterCounts", JSON.stringify(counts));
  }, [counts]);

  const increment = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const reset = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = 40;
      return newCounts;
    });
  };

  const handleNumPlayersChange = (num: number) => {
    setNumPlayers(num);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-2">
      <div className="w-full p-4">
        <div className="flex justify-center">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handleNumPlayersChange(num)}
              className={`mt-4 mx-1 sm:mx-2 md:mx-3 lg:mx-4 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 text-base sm:text-lg md:text-xl ${
                numPlayers === num ? "bg-gray-800 text-white" : "bg-gray-300"
              }`}
            >
              {num} Player{num > 1 ? "s" : ""}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`grid gap-4 ${
          numPlayers > 1 ? "grid-cols-2" : "grid-cols-1"
        } w-full h-full`}
      >
        {Array.from({ length: numPlayers }).map((_, index) => (
          <Counter
            key={index}
            count={counts[index]}
            onIncrement={() => increment(index)}
            onDecrement={() => decrement(index)}
            onReset={() => reset(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Life;