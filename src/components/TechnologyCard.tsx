import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

     
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      
      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h3>

    
      <p className="mt-2 text-sm leading-5 text-gray-500">
        {technology.description}
      </p>

     
      <div className="mt-5 flex items-center justify-between">
        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>
      </div>

     
      <div className="mt-3 flex items-center gap-1 text-sm">
        <span>⭐</span>
        <span className="text-gray-700">
          {technology.rating}
        </span>
      </div>

      
    <button
  onClick={() => onAddToStack(technology)}
  className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium text-white ${
    isAdded
      ? "bg-gray-400"
      : "bg-gray-900"
  }`}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>

    </div>
  );
};

export default TechnologyCard;