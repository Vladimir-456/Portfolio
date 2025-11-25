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

export default function Home() {
  const dispatch = useDispatch<useAppDispatch>();
  // const addToast = useToastStore((state) => state.addToast);
  const hasShownToast = useRef(false);
  const toasts = useSelector(selectToasts);

  useEffect(() => {
    if (!hasShownToast.current) {
      dispatch(addToast("Страница портфолио"));
      hasShownToast.current = true;
    }

    return () => {};
  }, []);

  return (
    <>
      <div>
        {toasts && <ToastList />}
        <Header />
        <main>
          <Hero />
          <Projects items={sampleProjects} />
        </main>
      </div>
    </>
  );
}
