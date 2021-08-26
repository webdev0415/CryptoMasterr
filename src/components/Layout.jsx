import React, { useState } from "react";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
