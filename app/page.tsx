'use client';

import Image from 'next/image';
import { useState } from 'react';

type Portrait = {
  src: string;
  name: string;
  alt: string;
  caption: string;
};

const portraits = [
  {
    src: '/saurine-sticker.png',
    name: 'Crowned classic',
    alt: 'Mr Saurine as a crowned blue-and-yellow sticker',
    caption: 'The original. Already too powerful.',
  },
  {
    src: '/saurine-laser.png',
    name: 'Laser focus',
    alt: 'Mr Saurine wearing oversized yellow star glasses',
    caption: 'Nothing gets past those stars.',
  },
  {
    src: '/saurine-substitute.png',
    name: 'Substitute mode',
    alt: 'Mr Saurine in a paper teacher hat with a pencil',
    caption: 'He has a plan. Probably.',
  },
  {
    src: '/saurine-bell.png',
    name: 'Final bell',
    alt: 'Mr Saurine holding a brass school bell with confetti',
    caption: 'Class dismissed. Legend confirmed.',
  },
] satisfies ReadonlyArray<Portrait>;

const archivePortraits = [
  {
    src: '/saurine-01-chalkboard.png',
    name: 'Chalkboard captain',
    alt: 'Mr Saurine in front of a chalkboard with a stack of books',
    caption: 'Every equation is now a performance.',
  },
  {
    src: '/saurine-02-apple.png',
    name: 'Apple of the eye',
    alt: 'Mr Saurine holding an apple in a long teacher tie',
    caption: 'A fruit-based lesson plan.',
  },
  {
    src: '/saurine-03-detective.png',
    name: 'Detective mode',
    alt: 'Mr Saurine wearing a detective cap with a magnifying glass',
    caption: 'The missing homework has been located.',
  },
  {
    src: '/saurine-04-rainy-day.png',
    name: 'Rainy-day duty',
    alt: 'Mr Saurine in a yellow raincoat holding a blue umbrella',
    caption: 'Prepared for weather and pop quizzes.',
  },
  {
    src: '/saurine-05-space.png',
    name: 'Orbiting Saurine',
    alt: 'Mr Saurine as an astronaut floating beside a classroom planet',
    caption: 'Science class has left the building.',
  },
  {
    src: '/saurine-06-magic.png',
    name: 'Magic lesson',
    alt: 'Mr Saurine in a magician hat holding a wand with stars around him',
    caption: 'Now you see the syllabus.',
  },
  {
    src: '/saurine-07-chef.png',
    name: "Chef's special",
    alt: 'Mr Saurine in a chef hat and red apron holding a wooden spoon',
    caption: "Today's special: one more worksheet.",
  },
  {
    src: '/saurine-08-garden.png',
    name: 'Garden of knowledge',
    alt: 'Mr Saurine in a gardening apron watering a smiling plant',
    caption: 'Growing answers one watering can at a time.',
  },
  {
    src: '/saurine-09-captain.png',
    name: 'Captain of the class',
    alt: 'Mr Saurine in a captain hat holding a compass and paper map',
    caption: 'All hands on deck for period three.',
  },
  {
    src: '/saurine-10-conductor.png',
    name: 'Conducting the room',
    alt: 'Mr Saurine conducting with a baton and music notes around him',
    caption: 'The orchestra knows who is in charge.',
  },
  {
    src: '/saurine-11-coach.png',
    name: 'Coach Saurine',
    alt: 'Mr Saurine in a tracksuit holding a whistle and clipboard',
    caption: 'Big energy. Clipboard energy.',
  },
  {
    src: '/saurine-12-artist.png',
    name: 'Art department',
    alt: 'Mr Saurine in an artist beret holding a paintbrush',
    caption: 'The masterpiece is due by Friday.',
  },
  {
    src: '/saurine-13-winter.png',
    name: 'Winter timetable',
    alt: 'Mr Saurine in a scarf and earmuffs beside a snow globe',
    caption: 'Cool head, warm scarf, same schedule.',
  },
  {
    src: '/saurine-14-puzzle.png',
    name: 'Puzzle master',
    alt: 'Mr Saurine in a blue cape surrounded by puzzle pieces',
    caption: 'Every piece is somehow an attendance roll.',
  },
  {
    src: '/saurine-15-inventor.png',
    name: 'Lab report',
    alt: 'Mr Saurine in a lab coat with safety goggles and a blue beaker',
    caption: 'The goggles are doing most of the explaining.',
  },
  {
    src: '/saurine-16-trophy.png',
    name: 'Trophy presentation',
    alt: 'Mr Saurine holding a trophy with a blue rosette and confetti',
    caption: 'First place in looking prepared.',
  },
  {
    src: '/saurine-17-timekeeper.png',
    name: 'Timekeeper',
    alt: 'Mr Saurine holding a pocket watch and a notepad',
    caption: 'The pause has been precisely scheduled.',
  },
  {
    src: '/saurine-18-pilot.png',
    name: 'Flight instructor',
    alt: 'Mr Saurine in a pilot cap with aviator goggles and a paper airplane',
    caption: 'Boarding now at Gate 3B.',
  },
  {
    src: '/saurine-19-builder.png',
    name: 'Building inspector',
    alt: 'Mr Saurine in a hard hat holding a giant ruler and blueprint',
    caption: 'Constructing a stronger excuse for late work.',
  },
  {
    src: '/saurine-20-dj.png',
    name: 'On the decks',
    alt: 'Mr Saurine wearing DJ headphones beside a tiny turntable',
    caption: 'The bell just got a remix.',
  },
] satisfies ReadonlyArray<Portrait>;

const allPortraits = [...portraits, ...archivePortraits] satisfies ReadonlyArray<Portrait>;
const tickerPortraits = [...portraits, ...archivePortraits.slice(0, 4)];

const moments = [
  {
    title: 'The Look',
    text: 'The room gets quiet. Eyebrows report for duty.',
    src: '/saurine-laser.png',
    alt: 'Mr Saurine in laser-focus mode',
    doodle: 'eyes',
  },
  {
    title: 'The Lecture',
    text: 'A sentence begins. Nobody knows how long it will be.',
    src: '/saurine-substitute.png',
    alt: 'Mr Saurine in substitute-teacher mode',
    doodle: 'speech',
  },
  {
    title: 'The Legendary Pause',
    text: 'A full stop with its own zip code.',
    src: '/saurine-bell.png',
    alt: 'Mr Saurine in final-bell mode',
    doodle: 'clock',
  },
] satisfies ReadonlyArray<{
  title: string;
  text: string;
  src: string;
  alt: string;
  doodle: 'eyes' | 'speech' | 'clock';
}>;

function getNextIndex(index: number) {
  return (index + 1) % allPortraits.length;
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [deployCount, setDeployCount] = useState(1);
  const activePortrait = allPortraits[activeIndex];

  function deployAnotherSaurine() {
    setActiveIndex((index) => getNextIndex(index));
    setDeployCount((count) => count + 1);
  }

  function choosePortrait(index: number) {
    setActiveIndex(index);
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Saurine Dot Club home">
          <span className="brand-avatar">
            <Image
              src="/saurine-sticker.png"
              alt=""
              width={64}
              height={64}
              priority
            />
          </span>
          <span>
            <strong>SAURINE</strong>
            <em>DOT CLUB</em>
          </span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a className="nav-link active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#moments">
            Hall of fame
          </a>
          <a className="nav-link" href="#archive">
            Archive
          </a>
          <a className="nav-link nav-button" href="#wall">
            Press the button <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <h1>
            Mr Saurine
            <span>is everywhere.</span>
          </h1>
          <p className="hero-lede">
            One teacher. A frankly unreasonable number of stickers. Welcome to
            the internet&apos;s least official fan club.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={deployAnotherSaurine}>
              Deploy more Saurines <span aria-hidden="true">↗</span>
            </button>
            <a className="text-link" href="#moments">
              See the evidence <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="deploy-status" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            {deployCount} Saurine{deployCount === 1 ? '' : 's'} deployed on this page
          </p>
        </div>

        <div className="hero-art" aria-label={`${activePortrait.name} portrait`}>
          <span className="scribble scribble-top" aria-hidden="true">
            ✦
          </span>
          <span className="scribble scribble-side" aria-hidden="true">
            ↗
          </span>
          <span className="burst burst-left" aria-hidden="true" />
          <span className="burst burst-right" aria-hidden="true" />
          <div className="hero-image-wrap">
            <Image
              key={activePortrait.src}
              className="hero-image"
              src={activePortrait.src}
              alt={activePortrait.alt}
              fill
              priority
              sizes="(max-width: 760px) 88vw, 48vw"
            />
          </div>
          <div className="hero-caption">
            <span>Currently showing</span>
            <strong>{activePortrait.name}</strong>
          </div>
        </div>
      </section>

      <section className="portrait-ticker" aria-label="A parade of Mr Saurine portraits">
        <div className="ticker-track">
          {[...Array(2)].flatMap(() => tickerPortraits).map((portrait, index) => (
            <Image
              key={`${portrait.src}-${index}`}
              src={portrait.src}
              alt=""
              width={94}
              height={94}
              loading="eager"
              className="ticker-image"
            />
          ))}
        </div>
      </section>

      <section className="moments section-wrap" id="moments">
        <div className="section-heading">
          <p className="section-number">02 / Hall of fame</p>
          <h2>Certified Saurine moments</h2>
          <p>
            Small, completely unofficial observations from the Saurine
            cinematic universe.
          </p>
        </div>

        <div className="moment-list">
          {moments.map((moment, index) => (
            <article className="moment" key={moment.title}>
              <div className="moment-image-wrap">
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes="(max-width: 760px) 78vw, 22vw"
                  loading="eager"
                  className="moment-image"
                />
              </div>
              <div className="moment-copy">
                <span className="moment-index">0{index + 1}</span>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
                <span className={`doodle doodle-${moment.doodle}`} aria-hidden="true">
                  {moment.doodle === 'eyes' && '◡ ◡'}
                  {moment.doodle === 'speech' && '•••'}
                  {moment.doodle === 'clock' && '◷'}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wall section-wrap" id="wall">
        <div className="wall-heading">
          <div>
            <p className="section-number">03 / The wallpaper</p>
            <h2>Pick your Saurine.</h2>
          </div>
          <p>Tap a variant. Pretend this is a very serious archive.</p>
        </div>

        <div className="portrait-grid" role="group" aria-label="Choose a Mr Saurine portrait">
          {portraits.map((portrait, index) => (
            <button
              className={`portrait-option ${activeIndex === index ? 'selected' : ''}`}
              type="button"
              key={portrait.src}
              onClick={() => choosePortrait(index)}
              aria-pressed={activeIndex === index}
            >
              <span className="option-image-wrap">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  sizes="(max-width: 560px) 80vw, (max-width: 900px) 42vw, 22vw"
                  loading="eager"
                  className="option-image"
                />
              </span>
              <span className="option-meta">
                <strong>{portrait.name}</strong>
                <span>{portrait.caption}</span>
              </span>
              <span className="option-arrow" aria-hidden="true">
                {activeIndex === index ? '✓' : '↗'}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="archive section-wrap" id="archive">
        <div className="archive-heading">
          <div>
            <p className="section-number">04 / The expanded archive</p>
            <h2>Twenty more Saurines.</h2>
          </div>
          <p>Twenty fresh universes. Pick one to send it straight to the top.</p>
        </div>

        <div className="archive-grid" role="group" aria-label="Twenty more Mr Saurine portraits">
          {archivePortraits.map((portrait, index) => {
            const allIndex = portraits.length + index;

            return (
              <button
                className={`archive-card ${activeIndex === allIndex ? 'selected' : ''}`}
                type="button"
                key={portrait.src}
                onClick={() => choosePortrait(allIndex)}
                aria-pressed={activeIndex === allIndex}
              >
                <span className="archive-image-wrap">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    sizes="(max-width: 680px) 44vw, (max-width: 920px) 28vw, 18vw"
                    loading="lazy"
                    className="archive-image"
                  />
                </span>
                <span className="archive-meta">
                  <span className="archive-number">#{String(index + 1).padStart(2, '0')}</span>
                  <strong>{portrait.name}</strong>
                  <span>{portrait.caption}</span>
                </span>
                <span className="archive-arrow" aria-hidden="true">
                  {activeIndex === allIndex ? '✓' : '↗'}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="closing-band">
        <div className="closing-face face-one" aria-hidden="true">
          <Image src="/saurine-laser.png" alt="" fill sizes="190px" loading="eager" />
        </div>
        <div className="closing-face face-two" aria-hidden="true">
          <Image src="/saurine-bell.png" alt="" fill sizes="190px" loading="eager" />
        </div>
        <div className="closing-copy">
          <p className="section-number">End of the internet</p>
          <h2>Thanks for visiting the noticeboard.</h2>
          <button className="button button-light" type="button" onClick={deployAnotherSaurine}>
            Add one more face <span aria-hidden="true">+</span>
          </button>
        </div>
        <span className="closing-doodle closing-star" aria-hidden="true">✦</span>
        <span className="closing-doodle closing-heart" aria-hidden="true">♡</span>
      </section>

      <footer className="footer">
        <span>SAURINE DOT CLUB</span>
        <span>Made with an unreasonable amount of blue.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
