/* eslint-disable import/no-extraneous-dependencies */
import { MouseEventHandler } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Logo } from '../logo';

export const Footer = () => {
  const handleToHeader = () => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUnderMaintenance = (e: MouseEventHandler<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const footerLinks = [
    {
      name: 'github',
      to: 'https://github.com/tiblazy',
    },
    {
      name: 'contacts',
      to: 'under-maintenance',
    },
    { name: 'rights', to: 'under-maintenance' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo modifier={'footer'} />

        <ul className="nav-bar__links nav-bar__links--footer">
          {footerLinks.map((link, index) => (
            <li className={`nav-bar__link nav-bar__link--footer`} key={index}>
              <Link
                className={`${link.to === 'under-maintenance' ? 'nav-bar__link--footer nav-bar__link--under' : 'nav-bar__link--footer'}`}
                to={`${link.to}`}
                target="_blank"
                onClick={
                  link.to === 'under-maintenance'
                    ? handleUnderMaintenance
                    : undefined
                }
              >
                {link.name}
              </Link>
              {link.to === 'under-maintenance' && (
                <span className="nav-bar__link--maintenance">
                  under maintenance
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="footer__top">
          <p className="footer__message">Back to top</p>
          <button className="icon icon--footer" onClick={handleToHeader}>
            <FaAngleUp />
          </button>
        </div>
      </div>
    </footer>
  );
};
