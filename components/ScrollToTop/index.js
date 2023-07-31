import { useState, useEffect } from "react";
import { styled } from "styled-components";

const ScrollToTopElement = styled.div`
  position: fixed;
  bottom: 10px;
  left: calc(50% - 25px);
  font-size: 1.5em;
  width: 50px;
  text-align: center;
  z-index: 999;
  cursor: pointer;
  color: var(--primaryColor);
`;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <ScrollToTopElement
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ⬆️
    </ScrollToTopElement>
  );
}
