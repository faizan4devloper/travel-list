export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start adding some items to your packing lists🚀</p>
    );
  const num = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const numPercentage = Math.round((numPacked / num) * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${num} items on your list, and you already packed ${numPacked}
         (${numPercentage}%)`}
      </em>
    </footer>
  );
}
