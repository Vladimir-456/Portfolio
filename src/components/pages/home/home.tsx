import { useEffect, useRef } from "react";
import sampleProjects from "../../../data/data";
import Header from "../../header/header";
import Hero from "../../hero/hero";
import Projects from "../../projects/projects";
import { useDispatch, useSelector } from "react-redux";
import { addToast } from "../../../redux/toasts/actions";
import type { useAppDispatch } from "../../../redux/store";
import ToastList from "../../toast-list/toast-list";
import { selectToasts } from "../../../redux/selectors";
import Footer from "../../footer/footer";
import { loadProjects } from "../../../redux/app/selectors";

export default function Home() {
  const dispatch = useDispatch<useAppDispatch>();
  // const addToast = useToastStore((state) => state.addToast);
  const hasShownToast = useRef(false);
  const toasts = useSelector(selectToasts);

  useEffect(() => {
    if (!hasShownToast.current) {
      dispatch(addToast("Страница портфолио"));
      dispatch(loadProjects(sampleProjects));
      hasShownToast.current = true;
    }

    return () => {};
  }, []);

  return (
    <>
      <div className="bg-white p-5 dark:bg-gray-900">
        {toasts && <ToastList />}
        <Header />
        <main>
          <Hero />
          <Projects />
        </main>
        <div className="mt-10"></div>
        <Footer />
      </div>
    </>
  );
}
