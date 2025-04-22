const SwitchBtn = ({ handleBtnSwitch, activeBtn }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 justify-between mb-8">
      <h1 className="font-bold text-3xl">Available Players</h1>
      <div>
        <button
          onClick={() => handleBtnSwitch("Available")}
          className={`px-7 py-3.5 rounded-md  rounded-r-none ${
            activeBtn === "Available" ? "bg-lime-400" : "bg-gray-300"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleBtnSwitch("Selected")}
          className={`px-7 py-3.5 rounded-md  rounded-l-none ${
            activeBtn === "Selected" ? "bg-lime-400" : "bg-gray-300"
          }`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default SwitchBtn;
