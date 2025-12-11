const Rating = ({ rating }) => {
  return (
    <div className="flex items-center text-lg rounded text-[#df4444]">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>
          {rating >= i + 1 ? "★" : "☆"}
        </span>
      ))}
      
    </div>
  );
};

export default Rating;
