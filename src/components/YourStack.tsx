import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
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
        <>
        
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-3"
              >
                <div className="flex items-center gap-3">
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

                
                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg font-bold text-gray-400 hover:text-red-500"
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

         
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;