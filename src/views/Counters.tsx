import { useState, useEffect } from "react";
import { FaRotateLeft } from "react-icons/fa6";

const Counters = () => {

const [poisonCount, setPoisonCount] = useState(() => {
  const savedPoisonCount = localStorage.getItem("poisonCounter");
  return savedPoisonCount !== null ? parseInt(savedPoisonCount, 10) : 0;
}
);

const [stormCount, setStormCount] = useState(() => {
  const savedStormCount = localStorage.getItem("stormCounter");
  return savedStormCount !== null ? parseInt(savedStormCount, 10) : 0;
}
);

useEffect(() => {
  localStorage.setItem("poisonCounter", poisonCount.toString());
  localStorage.setItem("stormCounter", stormCount.toString());
}, [poisonCount, stormCount]);

const stormIncrement = () => {
  setStormCount(stormCount + 1);
}

const poisonIncrement = () => {
  setPoisonCount(poisonCount + 1);
}


 const resetPoison = () => {
    setPoisonCount(0);
  }

  const resetStorm = () => {
    setStormCount(0);
  }




  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex justify-center items-center space-x-4">
      <h1 className="text-4xl">{poisonCount}</h1>
      <button 
        onClick={poisonIncrement}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg">
          Poison
      </button>
      <button
        onClick={resetPoison}
        className="text-3xl">
        <FaRotateLeft className="w-10 h-10" />
      </button>
    </div>
    <div className="flex justify-center items-center space-x-4 mt-10">
      <h1 className="text-4xl">{stormCount}</h1>
      <button
        onClick={stormIncrement}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg">
        Storm
      </button>
      <button
        onClick={resetStorm}
        className="text-3xl">
        <FaRotateLeft className="w-10 h-10" />
      </button>
    </div>
  </div>
  );
};

export default Counters;
