import { BsBrightnessHighFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between w-full max-w-lg text-white font-bold mb-12">
      <h1 className="text-4xl">To Do</h1>
      <button className="text-4xl">
        <BsBrightnessHighFill />
      </button>
    </div>
  );
};

export default Header;
