import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className=" mt-5 mx-auto text-white">
            <div className="container mx-auto px-4 py-16">
                <div className='max-w-6xl mx-auto'>
                      <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">Портфолио проектов разработчика</h1>
                      <p className="mt-5 text-lg text-indigo-100/90">Фронтенд разработчик, пишу на JavaScript. Делаю красивые веб-интерфейсы. Стек: React, TypeScript и Tailwind.</p>
                      <div className='mt-5 flex gap-3 justify-center color-white'>
                        <Link to="/projects" className='inline-block rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white text-transparent no-underline transition hover: border border-white/20'>Проекты</Link>
                        <Link to="/contact" className='inline-block rounded-full bg-white/10 px-8 py-3 text-sm font-semibold no-underline transition hover: border border-white/20'>Контакты для связи</Link>
                      </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;