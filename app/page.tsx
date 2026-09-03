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

const extendedArchivePortraits = [
  {
    src: '/saurine-21-mail-carrier.jpg',
    name: 'Mailroom Saurine',
    alt: 'Mr Saurine as a mail carrier with envelopes and a red mailbox',
    caption: 'The memo has arrived.',
  },
  {
    src: '/saurine-22-beekeeper.jpg',
    name: 'Honey duty',
    alt: 'Mr Saurine as a beekeeper with a honey dipper and friendly bees',
    caption: 'Sweetening the lesson plan.',
  },
  {
    src: '/saurine-23-librarian.jpg',
    name: 'Library mode',
    alt: 'Mr Saurine as a librarian with a rolling book cart and colorful books',
    caption: 'Quiet, please. The books are plotting.',
  },
  {
    src: '/saurine-24-train-conductor.jpg',
    name: 'Train conductor',
    alt: 'Mr Saurine as a train conductor with a navy cap and timetable',
    caption: 'Next stop: period three.',
  },
  {
    src: '/saurine-25-park-ranger.jpg',
    name: 'Trail guide',
    alt: 'Mr Saurine as a park ranger with binoculars and a folded trail map',
    caption: 'Taking the scenic route to homeroom.',
  },
  {
    src: '/saurine-26-museum-curator.jpg',
    name: 'Museum mode',
    alt: 'Mr Saurine as a museum curator with white gloves and a tiny sculpture',
    caption: 'Please do not touch the syllabus.',
  },
  {
    src: '/saurine-27-weather-presenter.jpg',
    name: 'Weather desk',
    alt: 'Mr Saurine as a weather presenter with an umbrella and a colorful map',
    caption: 'Forecast: scattered worksheets.',
  },
  {
    src: '/saurine-28-baker.jpg',
    name: 'Flour power',
    alt: 'Mr Saurine as a baker with a rolling pin and a giant mixing bowl',
    caption: 'Whisking up another example.',
  },
  {
    src: '/saurine-29-photographer.jpg',
    name: 'Flashbulb faculty',
    alt: 'Mr Saurine as a photographer with a vintage camera and a flash',
    caption: 'Say cheese, then cite your sources.',
  },
  {
    src: '/saurine-30-florist.jpg',
    name: 'Bouquet boss',
    alt: 'Mr Saurine as a florist with a bright bouquet and gardening shears',
    caption: 'A blooming good explanation.',
  },
  {
    src: '/saurine-31-zookeeper.jpg',
    name: 'Zoo notes',
    alt: 'Mr Saurine as a zookeeper with a safari hat and a tiny toy giraffe',
    caption: 'The classroom ecosystem is thriving.',
  },
  {
    src: '/saurine-32-archaeologist.jpg',
    name: 'Artifact hour',
    alt: 'Mr Saurine as an archaeologist with a soft brush and a tiny ancient pot',
    caption: 'Unearthing the lost homework.',
  },
  {
    src: '/saurine-33-submarine-captain.jpg',
    name: 'Submarine Saurine',
    alt: 'Mr Saurine as a submarine captain with a periscope and nautical sweater',
    caption: 'Going deep on the topic.',
  },
  {
    src: '/saurine-34-lighthouse-keeper.jpg',
    name: 'Lighthouse duty',
    alt: 'Mr Saurine as a lighthouse keeper with a lantern and striped sweater',
    caption: 'Keeping every thought illuminated.',
  },
  {
    src: '/saurine-35-circus-ringmaster.jpg',
    name: 'Ringmaster',
    alt: 'Mr Saurine as a circus ringmaster with a top hat and bright red jacket',
    caption: 'The greatest lesson on Earth.',
  },
  {
    src: '/saurine-36-stage-performer.jpg',
    name: 'Puppet stage',
    alt: 'Mr Saurine as a stage performer with a colorful toy figure and tiny curtains',
    caption: 'A supporting character has entered.',
  },
  {
    src: '/saurine-37-chess-grandmaster.jpg',
    name: 'Chess clock',
    alt: 'Mr Saurine as a chess grandmaster with an oversized blue chess piece',
    caption: 'Thinking three moves ahead.',
  },
  {
    src: '/saurine-38-game-host.jpg',
    name: 'Game-show Saurine',
    alt: 'Mr Saurine as a game host with foam dice and colorful game pieces',
    caption: 'The answer is probably C.',
  },
  {
    src: '/saurine-39-paper-craft-teacher.jpg',
    name: 'Paper crane',
    alt: 'Mr Saurine as a paper craft teacher folding a paper crane',
    caption: 'Folding facts into shape.',
  },
  {
    src: '/saurine-40-kite-flyer.jpg',
    name: 'Kite class',
    alt: 'Mr Saurine as a kite flyer with a vivid diamond kite and string spool',
    caption: 'Taking the lesson airborne.',
  },
  {
    src: '/saurine-41-surfer.jpg',
    name: 'Surf report',
    alt: 'Mr Saurine as a surfer with a tiny surfboard and beach umbrella',
    caption: 'Wave hello to the timetable.',
  },
  {
    src: '/saurine-42-skater.jpg',
    name: 'Skate park',
    alt: 'Mr Saurine as a skater standing beside a colorful skateboard and bright helmet',
    caption: 'Rolling into the next period.',
  },
  {
    src: '/saurine-43-skier.jpg',
    name: 'Snow day',
    alt: 'Mr Saurine as a skier in a knitted scarf holding skis upright',
    caption: 'Cool head, warmer scarf.',
  },
  {
    src: '/saurine-44-cyclist.jpg',
    name: 'Bell rider',
    alt: 'Mr Saurine as a cyclist with a helmet, bicycle bell, and route map',
    caption: 'Pedalling toward the answer.',
  },
  {
    src: '/saurine-45-rowing-coach.jpg',
    name: 'Oar office',
    alt: 'Mr Saurine as a boating instructor with an oar and bright life vest',
    caption: 'Pulling the class together.',
  },
  {
    src: '/saurine-46-cricket-teacher.jpg',
    name: 'Cricket call',
    alt: 'Mr Saurine as a cricket teacher holding a bat and colorful scorecard',
    caption: 'A very official appeal.',
  },
  {
    src: '/saurine-47-tennis-teacher.jpg',
    name: 'Court coach',
    alt: 'Mr Saurine as a tennis teacher holding a racket and yellow tennis ball',
    caption: 'Serving a clean explanation.',
  },
  {
    src: '/saurine-48-golfer.jpg',
    name: 'Fairway faculty',
    alt: 'Mr Saurine as a golfer holding a putter beside a tiny flag',
    caption: 'A hole-in-one attendance roll.',
  },
  {
    src: '/saurine-49-bowling-teacher.jpg',
    name: 'Strike zone',
    alt: 'Mr Saurine as a bowling teacher with a bowling ball and colorful pins',
    caption: 'Striking the right tone.',
  },
  {
    src: '/saurine-50-ice-cream-seller.jpg',
    name: 'Scoop shop',
    alt: 'Mr Saurine as an ice-cream seller with a striped apron and giant cone',
    caption: 'Extra sprinkles, no extensions.',
  },
  {
    src: '/saurine-51-pizza-chef.jpg',
    name: 'Pizza period',
    alt: 'Mr Saurine as a pizza chef with a pizza paddle and bright slice',
    caption: 'The slice is due Friday.',
  },
  {
    src: '/saurine-52-barista.jpg',
    name: 'Coffee break',
    alt: 'Mr Saurine as a barista with a coffee mug and blank board-shaped prop',
    caption: 'Strong notes, stronger coffee.',
  },
  {
    src: '/saurine-53-tea-host.jpg',
    name: 'Tea time',
    alt: 'Mr Saurine as a tea host with a teapot, teacup, and tiny biscuits',
    caption: 'Steeping in the key idea.',
  },
  {
    src: '/saurine-54-chocolatier.jpg',
    name: 'Bonbon boss',
    alt: 'Mr Saurine as a chocolatier with a tray of colorful bonbons',
    caption: 'A deliciously complex topic.',
  },
  {
    src: '/saurine-55-jam-maker.jpg',
    name: 'Jam session',
    alt: 'Mr Saurine as a jam maker with a fruit jar and toast',
    caption: 'Spreading the knowledge.',
  },
  {
    src: '/saurine-56-picnic-captain.jpg',
    name: 'Picnic period',
    alt: 'Mr Saurine as a picnic captain with a basket, checkered cloth, and lemonade',
    caption: 'Lunch break has entered the chat.',
  },
  {
    src: '/saurine-57-camping-guide.jpg',
    name: 'Camp counselor',
    alt: 'Mr Saurine as a camping guide with a tiny tent model and flashlight',
    caption: 'Gather round the campfire of facts.',
  },
  {
    src: '/saurine-58-astronomer.jpg',
    name: 'Star chart',
    alt: 'Mr Saurine as an astronomer with a telescope and star chart',
    caption: 'The syllabus is in orbit.',
  },
  {
    src: '/saurine-59-paleontologist.jpg',
    name: 'Fossil finding',
    alt: 'Mr Saurine as a paleontologist with a fossil bone and soft brush',
    caption: 'A prehistoric pop quiz.',
  },
  {
    src: '/saurine-60-marine-science-teacher.jpg',
    name: 'Tide pool',
    alt: 'Mr Saurine as a marine science teacher with a seashell and blue raincoat',
    caption: 'Making waves in science.',
  },
  {
    src: '/saurine-61-botanist.jpg',
    name: 'Leaf lab',
    alt: 'Mr Saurine as a botanist with a leaf press and leafy sprig',
    caption: 'Growing the answer organically.',
  },
  {
    src: '/saurine-62-chemist.jpg',
    name: 'Bubble lab',
    alt: 'Mr Saurine as a classroom chemist with colorful test tubes and bubbles',
    caption: 'A formula for staying curious.',
  },
  {
    src: '/saurine-63-mathematician.jpg',
    name: 'Number crunch',
    alt: 'Mr Saurine as a mathematician with an abacus and geometric blocks',
    caption: 'The numbers have feelings.',
  },
  {
    src: '/saurine-64-geographer.jpg',
    name: 'Globe class',
    alt: 'Mr Saurine as a geographer with a globe, compass, and rolled map',
    caption: 'Around the world in one lesson.',
  },
  {
    src: '/saurine-65-historian.jpg',
    name: 'History desk',
    alt: 'Mr Saurine as a historian with a scroll and magnifying glass',
    caption: 'The past has submitted a report.',
  },
  {
    src: '/saurine-66-poet.jpg',
    name: 'Poetry period',
    alt: 'Mr Saurine as a poet with a fountain pen and blank notebook',
    caption: 'A full stop with rhythm.',
  },
  {
    src: '/saurine-67-novelist.jpg',
    name: 'Typewriter teacher',
    alt: 'Mr Saurine as a novelist with a vintage typewriter and coffee mug',
    caption: 'Chapter one: open your book.',
  },
  {
    src: '/saurine-68-drummer.jpg',
    name: 'Drum roll',
    alt: 'Mr Saurine as a drummer with a tiny drum and drumsticks',
    caption: 'Please hold for dramatic emphasis.',
  },
  {
    src: '/saurine-69-guitar-teacher.jpg',
    name: 'Guitar club',
    alt: 'Mr Saurine as a guitar teacher with a small acoustic guitar',
    caption: 'Strumming toward the solution.',
  },
  {
    src: '/saurine-70-saxophone-player.jpg',
    name: 'Sax class',
    alt: 'Mr Saurine as a saxophone player with a shiny saxophone',
    caption: 'A smooth explanation incoming.',
  },
  {
    src: '/saurine-71-choir-director.jpg',
    name: 'Choir cue',
    alt: 'Mr Saurine as a choir director with a closed music folder and tuning fork',
    caption: 'Everyone find their key.',
  },
  {
    src: '/saurine-72-ballet-teacher.jpg',
    name: 'Ballet brief',
    alt: 'Mr Saurine as a ballet teacher with dance shoes and ribbon wand',
    caption: 'Graceful, precise, slightly dramatic.',
  },
  {
    src: '/saurine-73-mime.jpg',
    name: 'Invisible box',
    alt: 'Mr Saurine as a friendly mime with a striped shirt and white gloves',
    caption: 'The instructions are right here.',
  },
  {
    src: '/saurine-74-friendly-clown.jpg',
    name: 'Party horn',
    alt: 'Mr Saurine as a friendly clown with a colorful bow tie and party horn',
    caption: 'No red noses were harmed.',
  },
  {
    src: '/saurine-75-crystal-ball.jpg',
    name: 'Crystal desk',
    alt: 'Mr Saurine as a whimsical fortune-teller with a decorative crystal ball',
    caption: 'The forecast says: more Saurine.',
  },
  {
    src: '/saurine-76-robot-workshop.jpg',
    name: 'Robot workshop',
    alt: 'Mr Saurine as a robot workshop teacher with a toy robot and small wrench',
    caption: 'Teaching machines good manners.',
  },
  {
    src: '/saurine-77-computer-technician.jpg',
    name: 'Pixel support',
    alt: 'Mr Saurine as a computer technician with a keyboard and pixel sparkles',
    caption: 'Have you tried turning in the homework?',
  },
  {
    src: '/saurine-78-game-designer.jpg',
    name: 'Game studio',
    alt: 'Mr Saurine as a video game designer with a controller and pixel blocks',
    caption: 'Achievement unlocked: understanding.',
  },
  {
    src: '/saurine-79-architect.jpg',
    name: 'Blueprint boss',
    alt: 'Mr Saurine as an architect with a scale ruler and tiny model building',
    caption: 'Constructing a better excuse.',
  },
  {
    src: '/saurine-80-hasidic-jewish.jpg',
    name: 'Traditional dress',
    alt: 'Mr Saurine respectfully dressed in traditional Hasidic Jewish clothing with a black fedora and book',
    caption: 'Traditional dress, unmistakably Saurine.',
  },
  {
    src: '/saurine-81-map-maker.jpg',
    name: 'Map maker',
    alt: 'Mr Saurine as a map maker with rolled maps, a ruler, and compass',
    caption: 'Charting a course through period four.',
  },
  {
    src: '/saurine-82-interior-designer.jpg',
    name: 'Room remix',
    alt: 'Mr Saurine as an interior designer with color swatches and tiny chair model',
    caption: 'Rearranging the learning environment.',
  },
  {
    src: '/saurine-83-tailor.jpg',
    name: 'Stitch teacher',
    alt: 'Mr Saurine as a tailor with a measuring tape, thread spool, and bright fabric',
    caption: 'A perfectly fitted explanation.',
  },
  {
    src: '/saurine-84-shoemaker.jpg',
    name: 'Shoe story',
    alt: 'Mr Saurine as a shoemaker with a giant friendly shoe and leather apron',
    caption: 'Putting the lesson on its feet.',
  },
  {
    src: '/saurine-85-watchmaker.jpg',
    name: 'Timepiece teacher',
    alt: 'Mr Saurine as a watchmaker with a pocket watch and decorative gears',
    caption: 'Every minute has been accounted for.',
  },
  {
    src: '/saurine-86-toy-maker.jpg',
    name: 'Toy lab',
    alt: 'Mr Saurine as a toy maker with wooden blocks and a cheerful wind-up toy',
    caption: 'Building play into the curriculum.',
  },
  {
    src: '/saurine-87-comic-artist.jpg',
    name: 'Comic corner',
    alt: 'Mr Saurine as a comic-book artist with an ink brush and blank speech bubbles',
    caption: 'To be continued after lunch.',
  },
  {
    src: '/saurine-88-film-director.jpg',
    name: 'Movie maker',
    alt: 'Mr Saurine as a film director with a blank clapperboard and vintage camera',
    caption: 'Roll camera, cue the bell.',
  },
  {
    src: '/saurine-89-radio-host.jpg',
    name: 'Radio room',
    alt: 'Mr Saurine as a radio host with a retro microphone and headphones',
    caption: 'Broadcasting from the staffroom.',
  },
  {
    src: '/saurine-90-podcaster.jpg',
    name: 'Podcast period',
    alt: 'Mr Saurine as a podcaster with a studio microphone and colorful audio bars',
    caption: 'Please subscribe to the syllabus.',
  },
  {
    src: '/saurine-91-seed-librarian.jpg',
    name: 'Seed shelf',
    alt: 'Mr Saurine as a seed librarian with seed packets, drawer cabinet, and leafy sprig',
    caption: 'Planting ideas for later.',
  },
  {
    src: '/saurine-92-city-planner.jpg',
    name: 'City grid',
    alt: 'Mr Saurine as a city planner with tiny colorful buildings and a street grid',
    caption: 'Population: one very busy teacher.',
  },
  {
    src: '/saurine-93-ferry-captain.jpg',
    name: 'Ferry faculty',
    alt: 'Mr Saurine as a ferry captain with a navy cap, route map, and life ring',
    caption: 'All aboard for the next bell.',
  },
  {
    src: '/saurine-94-bicycle-shop.jpg',
    name: 'Bike shop',
    alt: 'Mr Saurine as a bicycle shop teacher with a hand pump, toolkit, and bell',
    caption: 'A well-oiled lesson plan.',
  },
  {
    src: '/saurine-95-umbrella-designer.jpg',
    name: 'Umbrella lab',
    alt: 'Mr Saurine as an umbrella designer with colorful umbrellas and fabric swatches',
    caption: 'Covering every possible angle.',
  },
  {
    src: '/saurine-96-candle-maker.jpg',
    name: 'Candle class',
    alt: 'Mr Saurine as a candle maker with a mold, apron, and colorful wax shapes',
    caption: 'A bright idea, carefully poured.',
  },
  {
    src: '/saurine-97-glass-artist.jpg',
    name: 'Glass studio',
    alt: 'Mr Saurine as a glass artist with a colorful glass orb and studio apron',
    caption: 'Handling the concept with care.',
  },
  {
    src: '/saurine-98-ceramicist.jpg',
    name: 'Clay club',
    alt: 'Mr Saurine as a ceramicist with a clay pot, apron, and pottery-wheel shape',
    caption: 'Shaping the lesson by hand.',
  },
  {
    src: '/saurine-99-woodworker.jpg',
    name: 'Woodshop',
    alt: 'Mr Saurine as a woodworker with a ruler, tiny birdhouse, and wood shavings',
    caption: 'Building something worth remembering.',
  },
  {
    src: '/saurine-100-leather-crafter.jpg',
    name: 'Leather lab',
    alt: 'Mr Saurine as a leather craft teacher with stitching tools and a small satchel',
    caption: 'A handcrafted final answer.',
  },
] satisfies ReadonlyArray<Portrait>;

const allArchivePortraits = [...archivePortraits, ...extendedArchivePortraits];
const allPortraits = [...portraits, ...allArchivePortraits] satisfies ReadonlyArray<Portrait>;
const tickerPortraits = [...portraits, ...allArchivePortraits.slice(0, 4)];

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
            <h2>One hundred Saurines.</h2>
          </div>
          <p>Twenty classics, eighty fresh universes. Pick one to send it straight to the top.</p>
        </div>

        <div className="archive-grid" role="group" aria-label="One hundred Mr Saurine portraits">
          {allArchivePortraits.map((portrait, index) => {
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
