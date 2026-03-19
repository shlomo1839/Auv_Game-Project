import { useState, useEffect } from "react";

export const Enemy = () => {
    // position of enemy
    const [pos, setPos] = useState({x: 100, y: 100});

    const [targets, setTargets] = useState([]);
    const [currentTargetIdx, setCurrentTargetIdx] = useState(0);

    //rando pos in screen 
    const getRandomPos = () => ({
        x: Math.random() * (window.innerWidth - 100) + 50,
        y: Math.random() * (window.innerHeight - 100) + 50
    });

// 3 points to start
    useEffect(() => {
        setTargets([getRandomPos(), getRandomPos(), getRandomPos()])
    }, []);

    useEffect(() => {
        if(targets.length === 0) return;

        const moveInterval = setInterval(() => {
            const target = targets[currentTargetIdx]

            setPos(prev => {
                // what the distannce to target
                const dx = target.x - prev.x;
                const dy = target.y - prev.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // if is close move to the next
                if (distance < 5) {
                    setCurrentTargetIdx((prevIdx) => (prevIdx + 1) % targets.length);
                    return prev;
                }

                // how fast is the movement
                const speed = 2;
                return {
                    x: prev.x + (dx / distance) *speed,
                    y: prev.y + (dy / distance) *speed
                };
            });
        }, 20);
        return () => clearInterval(moveInterval);

    }, [targets, currentTargetIdx]);

    return (
        <div 
            className="enemy"
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`
            }}
        />
    );
}