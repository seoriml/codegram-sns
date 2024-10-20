import { useState, useEffect } from "react";

const useScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 내릴 때 헤더 숨김, 올릴 때 헤더 표시
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // 헤더 숨김
      } else {
        setIsVisible(true); // 헤더 표시
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isVisible;
};
export default useScrollHeader;
