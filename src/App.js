import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import stays from "./data/stays.json";

function App() {

  const [data, setData] = useState(stays);

  return (
    <div className="container">
      <Header setData={setData} />
      <Main data={data} />
      <Footer />
    </div>
  );
}

export default App;
