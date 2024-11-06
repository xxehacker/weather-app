import React from "react";
import {Header , SideCards , MainCards , Map} from "./components/index"

function App() {

  return (
    <div className="bg-black min-h-screen flex flex-col gap-2 justify-center items-center">
      <Header />
      <div className="flex flex-col w-full justify-center items-center gap-6 lg:flex-row p-4 lg:gap-4">
        <SideCards />
        <MainCards />
      </div>
      <Map />
    </div>
  );
}

export default App;
