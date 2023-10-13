import { SideBar } from "../SideBar/SideBar";
import "./NavBar.scss";
import { motion } from "framer-motion";
export const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          NV Truong
        </motion.span>
        <div className="social__links">
          <img src="/public/facebook.png" alt="facebook" />
          <img src="/public/instagram.png" alt="instagram" />
          <img src="/public/youtube.png" alt="youtube" />
          <img src="/public/dribbble.png" alt="dribbble" />
        </div>
      </div>
    </div>
  );
};
