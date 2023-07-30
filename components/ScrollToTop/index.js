import { useState } from "react";
import { styled } from "styled-components";

const ScrollToTopElement = styled.div`
  position: fixed;
  bottom: 40px;
  left: 85vw;
  font-size: 2.5em;
  z-index: 999;
  cursor: pointer;
  color: var(--primaryColor);
`;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollToTopElement
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ⬆️
    </ScrollToTopElement>
  );
}
