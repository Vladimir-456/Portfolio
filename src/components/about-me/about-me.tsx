type AboutMeProps = {
  photo: string;
  skills: string[];
  links: {label: string, href: string}[]
}

const AboutMe = ({ photo, skills, links }: AboutMeProps) => {
  return (
    <main className="max-w-3xl md:max-w-5xl mx-auto px-4 py-12">
      <section 
        aria-labelledby="about-heading" 
        className="rounded-lg shadow-sm bg-white dark:bg-gray-900 md:p-8 p-4"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-10">
          {/* Photo */}
          <div className="w-90 h-90 md:w-72 md:h-72 rounded-md overflow-hidden flex-shrink-0">
            <img 
              src={photo} 
              alt="Владимир — фронтенд разработчик" 
              className="w-full h-full object-cover rounded-md" 
            />
          </div>

          {/* Info */}
          <div className="mt-5 md:mt-0 flex flex-col items-center md:items-start w-full md:w-auto">
            <h1 
              id="about-heading" 
              className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center md:text-left"
            >
              Владимир
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-md text-center md:text-left">
              Фронтенд разработчик
            </p>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 max-w-md text-center md:text-left">
              Создаю интерфейсы на React и TypeScript, пишу чистый и поддерживаемый код.
            </p>

            <ul className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2 max-w-md text-left">
              <li><strong>Специализация:</strong> SPA на React, TypeScript, компонентная архитектура</li>
              <li><strong>Опыт:</strong> pet-проекты, фриланс, code reviews</li>
              <li><strong>Ищу:</strong> Junior/Middle позиции или интересные проекты для роста</li>
            </ul>

            {/* Links / CTA */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start max-w-md">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10 max-w-md mx-auto md:mx-0">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Навыки</h2>
          <ul className="flex flex-wrap gap-3">
            {skills.map(s => (
              <li 
                key={s} 
                className="px-4 py-2 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
