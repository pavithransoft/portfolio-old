import Login from "../assets/login.png";
import Blog from "../assets/blog.png";

const Creativity = () => {
  return (
    <div className="bg-black text-white grid sm:grid-cols-2 place-items-center gap-4 p-2">
      <div className="grid gap-2 text-center text-xs font-mono font-bold text-slate-300 sm:text-base">
        <h2 className="border p-2 rounded border-slate-500">
          Login and Register
        </h2>
        <img
          src={Login}
          alt="Next Login"
          className="w-full h-40 sm:h-96 p-4 border-x rounded-md"
        />
        <h2 className="border p-2 rounded border-slate-500">
          Tailwind CSS<span className="text-slate-500 px-1">|</span>Next JS
          <span className="text-slate-500 px-1">|</span>OAuth
          <span className="text-slate-500 px-1">|</span>Mongo DB
        </h2>
      </div>
      <div className="grid gap-2 text-center text-xs font-mono font-bold text-slate-300 sm:text-base w-[17rem] sm:w-full lg:w-[28rem] xl:w-[30rem]">
        <h2 className="border p-2 rounded border-slate-500">Online Blog</h2>
        <img
          src={Blog}
          alt="Online Blog"
          className="w-full h-40 sm:h-[22.5rem] lg:h-96 p-4 border-x rounded-md"
        />
        <h2 className="border p-2 rounded border-slate-500">
          Tailwind CSS<span className="text-slate-500 px-1">|</span>React JS
          <span className="text-slate-500 px-1">|</span>Google Auth
          <span className="text-slate-500 px-1">|</span>Firebase
        </h2>
      </div>
    </div>
  );
};

export default Creativity;
