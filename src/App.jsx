import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Hero/Hero";
import SwitchBtn from "./Components/PageSwitch/SwitchBtn";
import Players from "./Components/Players/Players";

function App() {
  const [money, setMoney] = useState(0);
  const [activeBtn, setActiveBtn] = useState("Available");

  const handleAddMoney = () => {
    const newMoney = money + 1000000;
    setMoney(newMoney);
  };
  const handleBtnSwitch = (tab) => {
    setActiveBtn(tab);
  };
  return (
    <div className="sora-font">
      <div className="mx-auto max-w-screen-xl">
        <Navbar money={money}></Navbar>
        <Hero handleAddMoney={handleAddMoney}></Hero>
        <SwitchBtn
          handleBtnSwitch={handleBtnSwitch}
          activeBtn={activeBtn}
        ></SwitchBtn>
        <Players></Players>
      </div>
    </div>
  );
}

export default App;
