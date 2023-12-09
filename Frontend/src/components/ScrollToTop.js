import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div id="scrollToTopBtn" className="scroll-to-top" onClick={scrollToTop}>
        <KeyboardArrowUpIcon />
      </div>
    </>
  );
};
export default ScrollToTop;
