// App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
