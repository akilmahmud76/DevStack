import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard.jsx";
import YourStack from "./YourStack.jsx";

export default function TechGrid() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load technology data from the local JSON file rather than hardcoding it.
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Could not load technology data.");
        setIsLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (tech) => {
    setStack((current) => current.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
        {isLoading ? (
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-slate-200 lg:col-span-1">
            <p className="text-sm text-slate-400">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>
        )}

        <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  );
}
