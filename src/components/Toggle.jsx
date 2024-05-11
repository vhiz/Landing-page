import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function Toggle() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || mediaQuery.matches
      ? "luxury"
      : "winter"
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <label className="swap swap-rotate text-2xl mx-2 btn fixed top-10 left-5 btn-circle animate-fadeInLeft z-40">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        value="luxury"
        checked={isDark === "luxury"}
        onChange={() =>
          setIsDark(isDark === "luxury" ? "winter" : "luxury")
        }
      />

      {/* sun icon */}
      <GoSun className="swap-off fill-current" />

      {/* moon icon */}
      <GoMoon className="swap-on fill-current" />
    </label>
  );
}
