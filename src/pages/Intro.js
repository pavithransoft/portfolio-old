import { IoMdHand } from "react-icons/io";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";

const Intro = () => {
  return (
    <section className="bg-black text-white grid place-items-center sm:grid-cols-2">
      <div className="px-6">
        <span className="text-yellow-500 grid grid-cols-[25px_1fr] sm:grid-cols-[50px_1fr] items-center">
          <span className="font-creepster text-lg sm:text-4xl">
            Hi<span className="text-blue-500">!</span>
          </span>
          <IoMdHand className="fill-orange-300 animate-wave sm:w-8 sm:h-8" />
        </span>
        <span className="font-creepster px-1 sm:text-xl">
          I'm Pavithran Gopalakrishnan
        </span>
        <p className="text-sm text-slate-400 font-semibold font-jetbrainsmono grid gap-2 pt-2 px-1 sm:text-base">
          <span className="shadow-white shadow-[0px_0.2px_0px_0px_#00000024]">
            Freelancer Software Developer With
          </span>
          <span className="shadow-white shadow-[0px_0.2px_0px_0px_#00000024]">
            Experience In Web Application Development.
          </span>
        </p>
        <span className="grid grid-cols-2 gap-6 place-content-center pt-8">
          <ImGithub className="social place-self-end rounded-full" />
          <ImLinkedin className="social rounded-md" />
        </span>
      </div>
      <div className="hidden sm:grid sm:grid-cols-3 font-nunito text-center">
        <div className="grid gap-2 place-content-center font-bold font-jetbrainsmono">
          <div className="grid grid-cols-2 gap-12 justify-start animate-bounce">
            <span className="card-round text-xl text-blue-600 ">M</span>
            <BiLogoTailwindCss className="w-8 h-8 fill-cyan-600 card-round" />
          </div>
          <span className="card text-blue-500 justify-self-center w-12 animate-wave">
            CSS
          </span>
          <div className="grid grid-cols-2 gap-12 justify-start animate-bounce pt-3">
            <AiOutlineAntDesign className="w-8 h-8 fill-red-600 card-round" />
            <span className="card-round text-xl text-violet-700">B</span>
          </div>
        </div>
        <div className="grid gap-24 place-items-center justify-self-end">
          <span className="card text-orange-600 w-16">HTML</span>
          <span className="card text-white animate-none">Application</span>
          <span className="card text-yellow-500 w-8">JS</span>
        </div>
        <div className="grid gap-28 place-content-center pl-8">
          <span className="card text-sky-400">React JS</span>
          <span className="card text-white">Next JS</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
