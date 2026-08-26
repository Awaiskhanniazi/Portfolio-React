import "./stars.css";

const stars = Array.from({ length: 200 }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() > 0.85 ? 2 : 1,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 4,
}));

function Stars() {
    return (
        <div className="stars">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default Stars;