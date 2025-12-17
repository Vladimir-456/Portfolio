import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-white min-h-full  flex items-center">
      <div className="container mx-0 my-7 px-6 py-20">
        <div className="mx-auto text-center md:text-left mb-2">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Портфолио проектов разработчика
          </h1>
          <p className="mt-7 text-md md:mt-6 sm:text-lg md:text-xl text-indigo-100/90 mx-auto">
            Фронтенд разработчик, пишу на JavaScript. Делаю красивые
            веб-интерфейсы.
            <br />
            Стек: React, TypeScript и Tailwind.
          </p>
          <div
            className="flex md:mt-6 flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-5 max-w-md mx-auto md:my-5
           md:mx-0"
          >
            <Link
              to="/projects"
              className="inline-block rounded-full bg-white/10 px-7 py-3 text-sm md:text-base font-semibold text-white no-underline transition
                border border-transparent hover:border-white/30 hover:bg-white/20"
            >
              Проекты
            </Link>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm md:text-base font-semibold text-white no-underline transition
                border border-transparent hover:border-white/30 hover:bg-white/20"
            >
              Контакты для связи
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
