import React from "react";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home"), {
  loading: () => <div>loading...</div>
});

const App = () => (
  <Home />
);
export default App;
