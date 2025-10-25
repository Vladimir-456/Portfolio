import { useEffect, useRef } from "react";
import sampleProjects from "../../../data/data";
import Header from "../../header/header";
import Hero from "../../hero/hero";
import Projects from "../../projects/projects";
import { useToast } from "../../../context/ToastContext";
import { useToastStore } from "../../../store/useToastStore";


export default function Home() {
  const addToast = useToastStore((state) => state.addToast);
   const hasShownToast = useRef(false);
  useEffect(() => {
    if(!hasShownToast.current) {
        addToast('Страница портфолио');
        hasShownToast.current = true;
    }

    return () => {};
  }, []);

  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
          <Projects  items={sampleProjects}/>
        </main>
      </div>
    </>
  );
}