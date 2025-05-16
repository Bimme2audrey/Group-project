import "./FloatingHearts.css";

export default function FloatingHearts() {
  return (
    <div className="heart-container">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className={`heart heart-${i + 1}`}>🧑🏽‍❤️‍💋‍👩🏼</div>
      ))}
    </div>
  );
}
