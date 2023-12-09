import gsap from 'gsap';

const SmoothScrolling = (props) => {
  const { targetElement, duration } = props;
  console.log(targetElement, duration)
  if (!targetElement) {
    console.error("SmoothScrolling: Target element not found");
    return;
  }

  gsap.to(targetElement, {
    scrollTo: {
      y: 0, 
      autoKill: false,
    },
    duration: duration / 1000,
    ease: "power2.inOut",
  });
};

export default SmoothScrolling;
