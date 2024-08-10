import { useState } from "react";
import "../index.css";

const CoinFlip = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  const flipTheCoin = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setAnimationClass(""); 
    const coin = document.querySelector('.coin') as HTMLElement;
    if (coin) coin.offsetWidth; 
    setTimeout(() => {
      const headsOrTails = Math.random() < 0.5 ? "heads" : "tails";
      setAnimationClass(`flip-${headsOrTails}`);
      setTimeout(() => setIsFlipping(false), 2000);
    }, 10); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`coin ${animationClass} w-32 h-32`} onClick={flipTheCoin}>
      </div>
    </div>
  );
};

export default CoinFlip;
