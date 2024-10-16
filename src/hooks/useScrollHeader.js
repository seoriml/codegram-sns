import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideHeader, showHeader } from "../redux/scrollHeaderSlice";

const useScrollHeader = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.scrollHeader.isVisible);
  const [lastScrollY, setLastScrollY] = useState(0); // 이전 스크롤 위치 저장

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤을 내릴 때 헤더 숨기기, 올릴 때 헤더 보이기
      if (currentScrollY > lastScrollY) {
        dispatch(hideHeader());
      } else {
        dispatch(showHeader());
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, dispatch]);

  return isVisible;
};

export default useScrollHeader;
