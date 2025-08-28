'use client';
import Image from 'next/image';
import './Home.scss';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Garry Pooter App',
      subtitle: 'Приложение о студентах и преподавателях Хогвартса',
      image: '/code_1.jpg',
      tags: ['Typescript', 'React', 'Next.Js'],
      link: 'https://garry-potter-app.vercel.app/',
    },
    {
      id: 2,
      title: 'Neurophotography',
      subtitle: 'Приложение о нейрофотографии',
      image: '/code_2.jpg',
      tags: ['Typescript', 'React', 'Next.Js'],
      link: 'https://garry-potter-app.vercel.app/',
    },
  ];

  const ExternalLink = () => (
    <div className='external-link-icon' style={{ paddingRight: '16px' }}>
      {' '}
      <Image width={32} height={32} alt='icon' src='/rocket.png' />
    </div>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {

      const target = e.target as HTMLElement;

      // Проверяем, кликнули ли по ссылке меню
      const isClickOnLink =
        target.classList.contains('nav__link') || target.closest('.nav__link');



      // Если меню открыто и клик НЕ по меню, НЕ по бургеру и НЕ по ссылке — закрываем
      if (isOpen && navRef) {
        if (!isClickOnLink) {
          setIsOpen(false);
        }
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Блокируем скролл
      document.body.style.overflow = 'hidden';

      // Вешаем обработчики
      document.addEventListener('click', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
    }

    // Очистка
    return () => {
      document.body.style.overflow = ''; // Всегда сбрасываем
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={`wrapper ${isOpen ? 'noscroll' : ''}`}>
      {/* Header */}
      <header className='header'>
        <div className='container'>
          <div className='logo'>mgovoru</div>

          {/* Единое меню — работает и как десктопное, и как мобильное */}
          <nav className={`nav ${isOpen ? 'active' : ''}`} ref={navRef}>
            <a
              href='#project'
              className='nav__link'
              onClick={() => setIsOpen(false)}
            >
              Проекты
            </a>
            <a
              href='#education'
              className='nav__link'
              onClick={() => setIsOpen(false)}
            >
              Образование
            </a>
            <a
              href='#contact'
              className='nav__link'
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </a>
          </nav>

          {/* Бургер — только на мобильных */}
          <div
            className='burger'
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          {/* Hero Section */}
          <section className='section hero'>
            <div className='hero__content'>
              <h1 className='hero__title'>веб-разработчик</h1>
              <div className='hero__subtitle'>
                Cоздаю современные, производительные и адаптивные веб-приложения
                средней сложности для бизнеса, стартапов и индивидуальных
                проектов. Специализируюсь на стеке: React, TypeScript, Next.js /
                Vite — с акцентом на чистый код, быструю загрузку и удобство
                использования. Работаю как фрилансер: от идеи и дизайна до
                деплоя и технической поддержки. <p>Мария Говорухина.</p>
              </div>
            </div>

            <div className='hero__social'>
              <a
                href='https://github.com/mgovoru'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn btn-outline'>GITHUB</button>
              </a>
              <a
                href='https://t.me/mgovoru'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn btn-outline'>TELEGRAM</button>
              </a>
              <a
                href='mailto:m.govoru@yandex.ru'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn btn-outline'>EMAIL</button>
              </a>
            </div>
          </section>

          {/* Featured Projects */}
          <section className='section projects' id='project'>
            <div className='section-header'>
              <h2 className='section__title'>проекты</h2>
            </div>

            <div className='projects__grid'>
              {projects.map((project) => (
                <div key={project.id} className='card project-card'>
                  <div className='project-card__image-wrapper'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className='image'
                      width='1800'
                      height='900'
                    />
                  </div>
                  <div className='project-card__content'>
                    <div className='project-card__header'>
                      <h3 className='project-card__title'>{project.title}</h3>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-card__link'
                      >
                        <ExternalLink />
                      </a>
                    </div>
                    <p className='project-card__subtitle'>{project.subtitle}</p>
                    <div className='project-card__tags'>
                      {project.tags.map((tag) => (
                        <span key={tag} className='tag tag--small'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievement Section */}
          <section className='section achievements' id='education'>
            <h2 className='section__title'>Образование</h2>
            <div className='achievements__grid'>
              <div className='card achievement-card'>
                <h3 className='achievement-card__title'>freeCodeCamp</h3>
                <p className='achievement-card__org'>
                  Javascript Algorithms and Data Structures, 2023
                </p>
              </div>
              <div className='card achievement-card'>
                <h3 className='achievement-card__title'>
                  The Rolling Scopes School
                </h3>
                <p className='achievement-card__org'>
                  JavaScript/Front-end 2023Q4
                </p>
              </div>
              <div className='card achievement-card'>
                <h3 className='achievement-card__title'>
                  The Rolling Scopes School
                </h3>
                <p className='achievement-card__org'>React 2024 Q3</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Get in Touch */}
      <footer className='section contact' id='contact'>
        <h2 className='section__title section__title--large'>
          Свяжитесь со мной
        </h2>
        <p className='contact__text'>
          Расскажите о Вашей идее — помогу воплотить её в жизнь.
        </p>
        <div className='contact__social'>
          <button className='btn btn-outline'>TELEGRAM</button>
          <button className='btn btn-outline'>EMAIL</button>
        </div>
      </footer>
    </div>
  );
}
