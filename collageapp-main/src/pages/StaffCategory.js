import React from "react";
import { Users } from "../Data/Users";
import { Link } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
export default function StaffCategory() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={easeInOut}
      >
        <div className="grid grid-cols-2 px-3 my-5 place-items-center justify-center gap-5">
          {Users.map((item) => {
            return (
              <motion.div whileTap={{ scale: 0.8 }}>
                <Link to={`/Loginuser/${item.Tilltle}`}>
                  <div className="bg-white w-[] shadow-sm shadow-gray-300 p-4 rounded-lg">
                    <h1 className="text-xl font-bold text-center my-2 text-slate-700">
                      {item.Tilltle}
                    </h1>
                    <img
                      src={item.image}
                      alt="professions"
                      className="mx-auto w-[200px]"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
