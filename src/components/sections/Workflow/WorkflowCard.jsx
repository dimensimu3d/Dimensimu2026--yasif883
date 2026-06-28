import { motion } from "framer-motion";
import Card from "../../ui/Card";

export default function WorkflowCard({
  icon: Icon,
  title,
  description,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative"
    >
      <Card className="p-6">
        <div className="flex items-start gap-5">
          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-cyan-500/10
            flex
            items-center
            justify-center
            shrink-0
            "
          >
            <Icon className="text-cyan-400" size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>

            <p className="text-slate-400 leading-7">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
