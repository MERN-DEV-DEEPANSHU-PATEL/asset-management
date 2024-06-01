import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { AlignJustify, Moon, Package2Icon, Sun } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const [mode, setMode] = useState<string | null>("light");
  const [headerPosition, setHeaderPosition] = useState<boolean>(Boolean);
  const handleFirstMode = useCallback(() => {
    const beforeMode = localStorage.getItem("mode");
    if (!beforeMode) {
      localStorage.setItem("mode", "light");
      setMode(localStorage.getItem("light"));
    } else {
      setMode(localStorage.getItem("mode"));
    }
  }, []);

  const handleMode = useCallback(() => {
    if (mode !== "dark") {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  }, [mode]);

  useEffect(() => {
    handleFirstMode();
  }, []);

  useEffect(() => {
    if (mode == "dark") {
      document.getElementById("html")?.classList.add("dark");
    } else {
      document.getElementById("html")?.classList.remove("dark");
    }
  }, [mode]);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setHeaderPosition(true);
    } else {
      setHeaderPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`${
          headerPosition ? "fixed w-screen" : "static"
        } flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 sm:px-6 dark:bg-gray-800/40`}
      >
        <Link className="lg:hidden" to="#">
          <Package2Icon className="h-6 w-6 dark:text-gray-300" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="font-semibold text-lg dark:text-gray-400">
            Asset Dashboard
          </h1>
        </div>
        <div className="flex gap-5">
          <Button onClick={() => handleMode()} size="icon" variant="ghost">
            {mode !== "dark" ? <Moon /> : <Sun />}
          </Button>
          <Button onClick={() => setShow(true)} size="icon" variant="ghost">
            <AlignJustify />
          </Button>
        </div>
      </header>
      <Sidebar show={show} setShow={setShow} />
    </>
  );
};

export default Header;
