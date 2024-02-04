import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Groups from "@/pages/Groups";
import Contact from "@/pages/Contact";
const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/groups/:group"} element={<Groups />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
