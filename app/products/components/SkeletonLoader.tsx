export default function SkeletonLoader() {
  return (
    <div className=" space-y-4 animate-pulse transition-opacity">
      <div className="h-32 bg-gray-300 rounded"></div>
      <div className="h-32 bg-gray-300 rounded"></div>
      <div className="h-32 bg-gray-300 rounded"></div>
    </div>
  );
}
