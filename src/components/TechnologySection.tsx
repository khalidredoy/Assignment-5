import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Explore Technologies</h2>

      <p>Total technologies: {technologies.length}</p>
    </section>
  );
};

export default TechnologySection;