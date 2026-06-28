import Card from "../../ui/Card";

import { companyCards } from "../../../data/about";

export default function VisionMission() {
  return (
    <div
      className="
            grid
            md:grid-cols-3
            gap-6
            mt-20
            "
    >
      {companyCards.map((item) => (
        <Card key={item.title} className="p-8">
          <h3
            className="
                            text-2xl
                            font-bold
                            mb-4
                            "
          >
            {item.title}
          </h3>

          <p className="text-slate-400">{item.text}</p>
        </Card>
      ))}
    </div>
  );
}
