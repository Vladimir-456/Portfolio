import { social_links } from "./const";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-white  p-4 dark:bg-gray-900">
      <p className="text-black text-sm dark:text-gray-400">
        © 2025 Все права защищены
      </p>
      <div className="flex align-center justify-space-between gap-4 mb-4">
        <ul className="flex align-center gap-3 justify-space-between bg--white rounded sm: mt-5">
          {Object.entries(social_links).map(([key, value]) => (
            <li key={key} className="text-black dark:text-gray-400">
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
