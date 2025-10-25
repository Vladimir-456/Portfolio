type AboutMeProps = {
  photo: string;
  skills: string[];
  links: {label: string, href: string}[]
}

const AboutMe = ({ photo, skills, links }: AboutMeProps) =>  {
    return (
  <main className="max-w-5xl mx-auto px-4 py-12">
      <section aria-labelledby="about-heading" className=" rounded-lg shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-7 md:gap-10">
          {/* Photo */}
          <div className="w-90 h-90 rounded-md overflow-hidden ">
            <img src={photo} alt="Владимир — фронтенд разработчик" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Info */}
          <div className="w-300 mt-5 md:mt-0 flex flex-col items-center md:items-start">
            <h1 id="about-heading" className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Владимир — фронтенд разработчик
            </h1>
            <div className="max-w-xl">
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                    Создаю интерфейсы на React и TypeScript, пишу чистый и поддерживаемый код.
                </p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><strong>Специализация:</strong> SPA на React, TypeScript, компонентная архитектура</li>
              <li><strong>Опыт:</strong> pet-проекты, фриланс, code reviews</li>
              <li><strong>Ищу:</strong> Junior/Middle позиции или интересные проекты для роста</li>
            </ul>

            {/* Links / CTA */}
            <div className="mt-4 flex  items-center  flex-wrap gap-3">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 border rounded-md text-sm text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">Навыки</h2>
          <ul className="mt-3 flex items-center flex-wrap gap-2 mx-12">   
            {skills.map(s => (
              <li key={s} className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
    )
}

export default AboutMe;