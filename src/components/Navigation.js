import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navList = [
    { name: "Intro", path: "/" },
    { name: "Creativity", path: "/creativity" },
    { name: "Find me", path: "/findme" },
  ];
  return (
    <section className="bg-black text-white font-semibold border-b border-white grid grid-cols-2 place-content-center">
      <h2 className="place-self-center justify-self-start px-4 font-creepster sm:text-2xl">
        {"<"} code {"/>"}
      </h2>
      <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs justify-end px-4 lg:text-lg">
        {navList.map((nav, index) => (
          <ul key={index}>
            <NavLink
              to={nav?.path}
              className={({ isActive }) =>
                isActive ? "inactive active" : "inactive"
              }
            >
              {nav?.name}
            </NavLink>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
