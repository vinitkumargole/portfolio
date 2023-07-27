import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}
