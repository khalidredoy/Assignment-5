import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
}

const YourStack = ({ stack }: YourStackProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
    
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length} Technology Selected
        </span>
      </div>

    
      {stack.length === 0 ? (
        <p className="mt-8 text-center text-sm text-gray-400">
          Your stack is empty. Add technologies from the list.
        </p>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-9 w-9 object-contain"
              />

              <div>
                <h3 className="font-medium text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;