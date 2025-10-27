import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mx-auto text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Портфолио проектов разработчика
          </h1>
          <p className="mt-6 text-md sm:text-lg md:text-xl text-indigo-100/90 max-w-xl mx-auto md:mx-0">
            Фронтенд разработчик, пишу на JavaScript. Делаю красивые веб-интерфейсы.<br />
            Стек: React, TypeScript и Tailwind.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-4 md:gap-6 max-w-md mx-auto md:mx-0">
            <Link
              to="/projects"
              className="inline-block rounded-full bg-white/10 px-6 py-3 text-sm md:text-base font-semibold text-white no-underline transition
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