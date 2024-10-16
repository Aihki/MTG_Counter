import { useState, useEffect } from "react";
import "../index.css";
import Counter from "../components/Counter";
import Sidebar from "../components/Commander";

const Life = () => {
  const [numPlayers, setNumPlayers] = useState(1);
  const [counts, setCounts] = useState<number[]>(() => {
    const savedCounts = localStorage.getItem("counterCounts");
    return savedCounts ? JSON.parse(savedCounts) : Array(4).fill(40);
  });
  const [activeSidebar, setActiveSidebar] = useState<number | null>(null);

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

  const openSidebar = (index: number) => {
    setActiveSidebar(index);
  };

  const closeSidebar = () => {
    setActiveSidebar(null);
  };

  const colors = ["#FF1493", "#008B8B", "#FF4500", "#8A2BE2"];

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-200 pr-4 pl-4 pb-2">
      <div className="w-full pb-4">
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
        className={`w-full h-full ${
          numPlayers === 1
            ? "flex justify-center items-center"
            : `grid gap-x-2 gap-y-2 ${
                numPlayers === 2 ? "grid-cols-1 grid-rows-2" : "grid-cols-2 grid-rows-2"
              }`
        }`}
        style={{
          gridTemplateAreas: `
            "player2 player4"
            "player1 player3"
          `,
        }}
      >
        {Array.from({ length: numPlayers }).map((_, index) => (
          <div
            key={index}
            style={{ gridArea: `player${index + 1}` }}
            className={`h-full w-full ${index === 1 || index === 3 ? "rotate-180" : ""}`}
          >
            <Counter
              count={counts[index]}
              onIncrement={() => increment(index)}
              onDecrement={() => decrement(index)}
              onReset={() => reset(index)}
              color={colors[index % colors.length]}
              openSidebar={() => openSidebar(index)}
            />
          </div>
        ))}
      </div>
      {activeSidebar !== null && (
        <Sidebar isOpen={true} onClose={closeSidebar} index={activeSidebar} />
      )}
    </div>
  );
};

export default Life;