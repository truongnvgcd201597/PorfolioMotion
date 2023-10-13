import "./Links.scss";
import { motion } from "framer-motion";

const items = ["Homepage", "Services", "Porfolio", "Contact", "About"];
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{
            scale: 1.2,
            color: "#000",
            transition: { ease: "backInOut", duration: 0.4 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { ease: "backOut", duration: 0.2 },
          }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
