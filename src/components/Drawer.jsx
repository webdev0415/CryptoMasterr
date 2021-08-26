import gsap from "gsap";
import React, { useEffect } from "react";

const Drawer = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      gsap
        .to(".drawer__cover", {
          display: "block",
        })
        .then(() => {
          gsap.to(".drawer", 0.4, {
            x: "0",
            ease: "power3.expo",
          });
        });
    } else {
      gsap
        .to(".drawer", 0.4, {
          x: "100%",
        })
        .then(() => {
          gsap.to(".drawer__cover", {
            display: "none",
            ease: "power3.expo",
          });
        });
    }
  }, [open]);
  return (
    <>
      <div
        className="drawer__cover"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(false);
        }}
      >
        <div className="drawer"></div>
      </div>
    </>
  );
};

export default Drawer;
