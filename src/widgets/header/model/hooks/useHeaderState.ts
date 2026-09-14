import {useEffect, useState} from "react";
import {useLocation} from "react-router";

const HEADER_HEIGHT = 20

export const useHeaderState = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => setIsScrolled(window.scrollY > HEADER_HEIGHT)

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return !isHome || isScrolled;
};