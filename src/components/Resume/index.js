import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        My skills
      </div>
      <div className="grid grid-cols-1 gap-7 mt-7 justify-center items-center">


        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3"></div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"JavaScript"} percent={75} />
            <BarGraph name={"TypeScript"} percent={60} />
            <BarGraph name={"React"} percent={65} />
            <BarGraph name={"AWS"} percent={40} />
            <BarGraph name={"C/C++"} percent={80} />
            <BarGraph name={"Java"} percent={70} />
            <BarGraph name={"SQL"} percent={65} />
          </div>

          <a
            href={require("../../assets/files/Vinit Resume.pdf")}
            download={"Vinit's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
