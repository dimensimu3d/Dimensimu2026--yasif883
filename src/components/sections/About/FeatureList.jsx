import { FaCheckCircle } from "react-icons/fa";

export default function FeatureList({ features }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-8">
      {features.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-400" />

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
