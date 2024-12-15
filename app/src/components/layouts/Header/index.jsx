import Image from "next/image";
import { useState } from "react";

import codeLogo from "../../../../public/code-logo.png";

const Header = ({ navigation, actions }) => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [menuActive, setMenuActive] = useState('home');

  const toggleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <header className="relative bg-white">
      <div className="relative flex flex-row items-center justify-between px-4 py-2 z-10">
        <figure>
          <a className="block" href="/">
            <Image src={codeLogo} alt="Logo" width={50} height={50} />
          </a>
        </figure>
        <nav className="hidden lg:flex lg:m-auto" aria-label="Header Navigation Desktop">
          <ul className="flex flex-row items-center justify-center gap-4">
            {Object.entries(navigation).map(([key, value]) => (
              <li key={key} onClick={() => setMenuActive(key)}>
                <a
                  className={`${menuActive === key && 'text-purple font-bold'} text-base hover:text-purple transition ease-in-out`}
                  href={`#${key}`}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:justify-start lg:items-start">
          {actions && Object.entries(actions).map(([key, action]) => (
            <a
              className="bg-purple rounded-lg border-2 border-solid border-transparent text-white text-base font-bold hover:bg-transparent hover:border-purple hover:text-purple p-4 py-2 transition ease-in-out duration-300"
              key={key}
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
        <button className="flex lg:hidden" onClick={toggleHamburger}>{openHamburger ? 'Fechar' : 'Abrir'}</button>
      </div>
      <div className={`${openHamburger ? 'absolute top-0 left-0 bg-white flex flex-col justify-start items-start w-screen h-screen pt-[82px] pb-4 px-4' : 'hidden'}`}>
        <nav aria-label="Header Navigation Mobile">
          <ul className="flex flex-col items-left justify-start gap-4 text-lg">
            {Object.entries(navigation).map(([key, value]) => (
              <li key={key} onClick={() => setMenuActive(key)}>
                <a
                  className={`${menuActive === key && 'text-purple font-bold'} text-base hover:text-purple transition ease-in-out`}
                  href={`#${key}`}
                >{value}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;