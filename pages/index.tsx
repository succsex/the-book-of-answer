import { useRef, useEffect } from "react";
import Layout from "components/Layout";
import Book from "components/Book";
import { gsap } from "gsap";

export default function Home() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    gsap.from(element, {
      scale: 2,
      duration: 1,
      delay: 2,
      perspective: 0,
      webkitPerspective: 0,
      mozPerspective: 0,
      transformStyle: "preserve-3d",
    });
  }, []);

  return (
    <Layout>
      <div className="app" ref={ref}>
        <Book />
      </div>
    </Layout>
  );
}
