export const CreatedAt = ({ date }) => {
  return (
    <div className="text-gray-400">
      {new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "2-digit",
      })}
    </div>
  );
};
