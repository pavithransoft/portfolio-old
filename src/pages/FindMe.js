import { ImGithub, ImWhatsapp, ImDownload3 } from "react-icons/im";
import Resume from "../assets/resume.pdf";

const FindMe = () => {
  return (
    <section className="bg-black text-white grid sm:grid-cols-2 gap-16 place-items-center">
      <div className="px-4 sm:px-6">
        <h2 className="text-yellow-500 font-creepster pb-4">Find Me</h2>
        <div className="font-nunito font-semibold">
          <span className="card-find">
            <span className="card-social sm:p-2">
              <ImGithub className="fill-[#7638b8] sm:w-6 sm:h-6" />
              <h2 className="text-xs text-slate-400 sm:text-base justify-self-center">
                Git<span className="text-white pl-[0.1rem]">Hub</span>
              </h2>
            </span>
            <h2 className="text-xs sm:text-base pt-2 sm:pt-0">pavithransoft</h2>
          </span>
          <span className="card-find">
            <span className="card-social sm:py-[0.1rem]">
              <h2 className="text-base text-blue-500 font-nunito font-bold sm:text-3xl sm:pl-1 justify-self-center">
                in
              </h2>
              <h2 className="text-[0.7rem] text-white sm:text-base sm:pt-1 justify-self-center">
                Linked
                <span className="text-blue-500 pl-[0.1rem] text-[0.9rem] sm:text-lg">
                  in
                </span>
              </h2>
            </span>
            <h2 className="text-xs sm:text-base pt-2 whitespace-pre">
              Pavithran Gopalakrishnan
            </h2>
          </span>
          <span className="card-find">
            <span className="card-social sm:py-1">
              <h2 className="text-red-500 font-nunito font-extrabold sm:text-2xl sm:px-1 justify-self-center">
                M
              </h2>
              <h2 className="text-xs sm:text-lg justify-self-center">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">m</span>
                <span className="text-yellow-500">a</span>
                <span className="text-blue-500">i</span>
                <span className="text-green-500">l</span>
              </h2>
            </span>
            <h2 className="text-xs pt-2 sm:text-base">
              pavithran.soft
              <span className="text-slate-400 pl-[0.1rem]">@gmail.com</span>
            </h2>
          </span>
          <span className="card-find">
            <span className="card-social sm:p-2">
              <ImWhatsapp className="fill-green-500 sm:w-6 sm:h-6" />
              <h2 className="text-xs text-green-400 sm:text-sm">WhatsApp</h2>
            </span>
            <h2 className="text-[0.6rem] sm:text-xs text-slate-400 font-creepster justify-center pt-2">
              +91
              <span className="text-xs sm:text-base text-white pl-1">
                8012322922
              </span>
            </h2>
          </span>
        </div>
      </div>
      <div className="p-2">
        <h2 className="px-4 py-2 text-sm text-slate-400 font-mono font-bold">
          <span className="text-yellow-500 text-base">Hi</span>
          <span className="text-blue-500 pr-2">!</span>I'm Pavithran
          Gopalakrishnan
        </h2>
        <p className="px-4 py-1 text-sm font-mono shadow-white shadow-[0px_0.2px_0px_0px_#00000024]">
          Freelancer software developer knowledge in web application
          development.
        </p>
        <p className="px-4 py-1 text-sm font-mono shadow-white shadow-[0px_0.2px_0px_0px_#00000024]">
          Skills HTML, CSS, JS, React JS, Next JS, Node JS, Mongo DB.
        </p>
        <p className="px-4 py-1 text-sm font-mono shadow-white shadow-[0px_0.2px_0px_0px_#00000024]">
          Experience In handle with latest frameworks, all kinds library and
          latest tools.
        </p>
        <span className="grid grid-cols-2 gap-5 items-center pt-6">
          <ImDownload3 className="justify-self-end fill-slate-300 animate-bounce" />
          <a href={Resume} download="Pavithran_Gopalakrishnan">
            <button className="hire-me">
              Hire <span className="text-blue-500">me</span>
            </button>
          </a>
        </span>
      </div>
    </section>
  );
};

export default FindMe;
