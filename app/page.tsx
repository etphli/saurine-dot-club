'use client';

import Image from 'next/image';
import { useState } from 'react';

type Portrait = {
  src: string;
  name: string;
  alt: string;
  caption: string;
};

type NumberedPortrait = Portrait & { id: number };

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

const newArchivePortraits = [
  {
    src: '/saurine-101-principal-for-a-day.jpg',
    name: "Principal for a day",
    alt: "Mr Saurine as an overprepared principal behind a towering stack of colorful folders",
    caption: "The folders have folders.",
  },
  {
    src: '/saurine-102-crossing-guard.jpg',
    name: "Crossing guard",
    alt: "Mr Saurine as a cheerful crossing guard with a bright stop sign",
    caption: "The line starts at the staffroom.",
  },
  {
    src: '/saurine-103-chess-coach.jpg',
    name: "Chess coach",
    alt: "Mr Saurine as a chess coach holding an oversized knight piece",
    caption: "Checkmate, but politely.",
  },
  {
    src: '/saurine-104-lifeguard.jpg',
    name: "Pool patrol",
    alt: "Mr Saurine as a pool lifeguard with a red rescue float and whistle",
    caption: "No running. Especially in the syllabus.",
  },
  {
    src: '/saurine-105-astronomy-club.jpg',
    name: "Astronomy club",
    alt: "Mr Saurine as an astronomy teacher with a telescope and planet model",
    caption: "The homework is in orbit.",
  },
  {
    src: '/saurine-106-school-photographer.jpg',
    name: "Picture day",
    alt: "Mr Saurine as a school portrait photographer with a vintage camera",
    caption: "Big smile, smaller homework pile.",
  },
  {
    src: '/saurine-107-flower-show-judge.jpg',
    name: "Flower show",
    alt: "Mr Saurine as a flower-show judge beside an oversized sunflower",
    caption: "A blooming report card.",
  },
  {
    src: '/saurine-108-escape-room-host.jpg',
    name: "Escape room",
    alt: "Mr Saurine as an escape-room host with keys and puzzle clues",
    caption: "The answer was on the board.",
  },
  {
    src: '/saurine-109-timetable-wizard.jpg',
    name: "Timetable wizard",
    alt: "a timetable wizard with floating colored schedule cards",
    caption: "\nEvery minute has a laminated tab.",
  },
  {
    src: '/saurine-110-snow-day-forecaster.jpg',
    name: "Snow-day forecaster",
    alt: "a weather forecaster pointing at a tiny snow cloud map",
    caption: "Forecast: 90% chance of one more question.",
  },
  {
    src: '/saurine-111-sandwich-architect.jpg',
    name: "Sandwich architect",
    alt: "a sandwich architect measuring a comically tall sandwich",
    caption: "A stackable lunch with a measurable outcome.",
  },
  {
    src: '/saurine-112-silent-disco-dj.jpg',
    name: "Silent disco",
    alt: "a silent-disco DJ with bright headphones and one tiny turntable",
    caption: "The playlist is mostly the bell.",
  },
  {
    src: '/saurine-113-balloon-wrangler.jpg',
    name: "Balloon wrangler",
    alt: "a balloon artist with a cluster of funny balloon shapes",
    caption: "Balloon budget: somehow approved.",
  },
  {
    src: '/saurine-114-origami-master.jpg',
    name: "Origami master",
    alt: "an origami artist holding a tiny paper crane and paper-folding ruler",
    caption: "Folding a lesson into several dimensions.",
  },
  {
    src: '/saurine-115-school-nurse.jpg',
    name: "Nurse's office",
    alt: "a school nurse with a first-aid kit and friendly bandage box",
    caption: "A plaster for the paper cut. A form for the plaster.",
  },
  {
    src: '/saurine-116-lunchbox-judge.jpg',
    name: "Lunchbox judge",
    alt: "a lunchbox judge holding a tiny golden sandwich trophy",
    caption: "Four stars for the sandwich. One for presentation.",
  },
  {
    src: '/saurine-117-toy-repairer.jpg',
    name: "Toy repair",
    alt: "a toy repairer with screwdriver and a repaired wind-up robot",
    caption: "The robot has better attendance.",
  },
  {
    src: '/saurine-118-train-platform-poet.jpg',
    name: "Platform poet",
    alt: "a train station poet holding a pocket notebook and tiny clock",
    caption: "Next stop: a very punctual metaphor.",
  },
  {
    src: '/saurine-119-mini-golf-pro.jpg',
    name: "Mini golf pro",
    alt: "a miniature golf pro holding a tiny putter and a school-bell-shaped golf ball",
    caption: "Par is three. The worksheet is nine.",
  },
  {
    src: '/saurine-120-dog-obedience-coach.jpg',
    name: "Dog coach",
    alt: "a dog-obedience coach with a whistle and a well-behaved plush dog",
    caption: "Sit, stay, cite your sources.",
  },
  {
    src: '/saurine-121-plant-detective.jpg',
    name: "Plant detective",
    alt: "a plant detective inspecting a dramatically droopy potted plant",
    caption: "The fern says the homework is late.",
  },
  {
    src: '/saurine-122-paper-plane-pilot.jpg',
    name: "Paper-plane pilot",
    alt: "a paper-plane test pilot launching colorful folded airplanes",
    caption: "Flight path: directly into the staffroom.",
  },
  {
    src: '/saurine-123-puzzle-champion.jpg',
    name: "Puzzle champion",
    alt: "a puzzle champion holding a nearly complete jigsaw with one missing piece",
    caption: "One piece missing. It was in the assignment brief.",
  },
  {
    src: '/saurine-124-parade-marshal.jpg',
    name: "Parade marshal",
    alt: "a parade marshal with a tiny baton and cheerful paper streamers",
    caption: "Streamers strictly by alphabetical order.",
  },
  {
    src: '/saurine-125-ice-cream-taster.jpg',
    name: "Ice-cream tasting",
    alt: "an ice-cream taster holding three miniature cones and a judge's score card",
    caption: "\nA scientific sample of every flavor.",
  },
  {
    src: '/saurine-126-museum-night-guard.jpg',
    name: "Night guard",
    alt: "a museum night guard with flashlight beside a tiny dinosaur skeleton",
    caption: "The dinosaurs are being respectfully quiet.",
  },
  {
    src: '/saurine-127-campfire-storyteller.jpg',
    name: "Campfire story",
    alt: "a campfire storyteller with a marshmallow on a stick and a lantern",
    caption: "The story has a suspiciously detailed rubric.",
  },
  {
    src: '/saurine-128-submarine-captain.jpg',
    name: "Submarine captain",
    alt: "a submarine captain peering through a toy periscope with bubbles",
    caption: "Periscope up. Recess down.",
  },
  {
    src: '/saurine-129-robotics-mentor.jpg',
    name: "Robotics mentor",
    alt: "a robotics mentor beside a small friendly cardboard robot",
    caption: "The robot volunteered to mark.",
  },
  {
    src: '/saurine-130-kite-flyer.jpg',
    name: "Kite flyer",
    alt: "a kite flyer holding a bright kite string with a tiny kite overhead",
    caption: "Wind speed: one rogue worksheet.",
  },
  {
    src: '/saurine-131-taxi-dispatcher.jpg',
    name: "Taxi dispatcher",
    alt: "a taxi dispatcher with a small map, headset, and toy yellow cab",
    caption: "The taxi meter is counting periods.",
  },
  {
    src: '/saurine-132-train-set-builder.jpg',
    name: "Train set builder",
    alt: "a model train builder with a miniature train looping around a stack of books",
    caption: "A scenic route around the curriculum.",
  },
  {
    src: '/saurine-133-treasure-map-maker.jpg',
    name: "Map maker",
    alt: "a treasure-map maker with compass and a very small X-marked map",
    caption: "X marks the spot. It’s still room 3.",
  },
  {
    src: '/saurine-134-museum-audio-guide.jpg',
    name: "Audio guide",
    alt: "a museum guide wearing headphones beside a tiny framed portrait",
    caption: "Audio guide says, “Please keep voices down.”",
  },
  {
    src: '/saurine-135-trophy-polisher.jpg',
    name: "Trophy polisher",
    alt: "a trophy polisher buffing an absurdly large golden apple trophy",
    caption: "First prize in polishing the apple.",
  },
  {
    src: '/saurine-136-school-garden-gnome.jpg',
    name: "Garden gnome",
    alt: "Mr Saurine as a garden gnome holding a tiny watering can",
    caption: "The gnome has excellent punctuality.",
  },
  {
    src: '/saurine-137-soup-taster.jpg',
    name: "Soup taster",
    alt: "a soup taster with a ladle and a steaming tiny pot",
    caption: "Today’s special: soup of the day.",
  },
  {
    src: '/saurine-138-cupcake-decorator.jpg',
    name: "Cupcake decorator",
    alt: "a cupcake decorator piping a very tall swirl of frosting",
    caption: "A frosting-to-homework ratio of 1:1.",
  },
  {
    src: '/saurine-139-kite-safety-officer.jpg',
    name: "Kite safety",
    alt: "a kite safety officer in a bright vest carefully checking a string spool",
    caption: "All kites grounded until the bell.",
  },
  {
    src: '/saurine-140-museum-dinosaur-curator.jpg',
    name: "Dinosaur curator",
    alt: "a dinosaur curator holding a tiny fossil and a magnifying glass",
    caption: "Please do not feed the syllabus.",
  },
  {
    src: '/saurine-141-beach-sandcastle-engineer.jpg',
    name: "Sandcastle engineer",
    alt: "a sandcastle engineer with a small blue bucket and elaborate sandcastle",
    caption: "\nSandcastle rubric: structurally sound.",
  },
  {
    src: '/saurine-142-school-bus-tour-guide.jpg',
    name: "Tour guide",
    alt: "a tour guide beside a tiny yellow school bus with a folded city map",
    caption: "The bus is full. The questions are not.",
  },
  {
    src: '/saurine-143-sleep-scientist.jpg',
    name: "Sleep scientist",
    alt: "a sleepy scientist in pajamas holding a clipboard and moon model",
    caption: "His nap has a permission slip.",
  },
  {
    src: '/saurine-144-pancake-flipper.jpg',
    name: "Pancake flipper",
    alt: "a pancake chef flipping one impossibly high pancake",
    caption: "One flip, two worksheets.",
  },
  {
    src: '/saurine-145-arcade-champion.jpg',
    name: "Arcade champion",
    alt: "an arcade champion holding a joystick and a tiny pixel-style trophy",
    caption: "High score: 10/10 attendance.",
  },
  {
    src: '/saurine-146-boardgame-referee.jpg',
    name: "Game referee",
    alt: "a board-game referee with dice, timer, and a very serious whistle",
    caption: "The dice are weighted toward extra practice.",
  },
  {
    src: '/saurine-147-snowglobe-maker.jpg',
    name: "Snow globe maker",
    alt: "a snow-globe maker holding a miniature classroom in a glass globe",
    caption: "Inside the globe: a tiny timetable.",
  },
  {
    src: '/saurine-148-clockwork-inventor.jpg',
    name: "Clockwork inventor",
    alt: "a clockwork inventor with brass gears and a wind-up key",
    caption: "The gears are mostly decorative. The plan is not.",
  },
  {
    src: '/saurine-149-paper-crown-designer.jpg',
    name: "Crown designer",
    alt: "a paper-crown designer with scissors and a stack of folded crowns",
    caption: "One crown per correctly cited source.",
  },
  {
    src: '/saurine-150-marathon-cheerleader.jpg',
    name: "Marathon cheer",
    alt: "a marathon cheerleader holding tiny flags and a foam finger",
    caption: "Cheer louder. There’s a quiz after this.",
  },
  {
    src: '/saurine-151-school-radio-weather.jpg',
    name: "Radio forecast",
    alt: "a radio weather host with microphone and a miniature sunny-cloud forecast",
    caption: "Breaking news: homework still exists.",
  },
  {
    src: '/saurine-152-friendly-ghost-tourist.jpg',
    name: "Ghost tour",
    alt: "Mr Saurine wearing a comical friendly ghost sheet with his glasses visible",
    caption: "A friendly ghost with a very visible clipboard.",
  },
  {
    src: '/saurine-153-haunted-house-guide.jpg',
    name: "Haunted house guide",
    alt: "a haunted-house guide holding a lantern beside a friendly cartoon bat",
    caption: "The haunted house has a strict late policy.",
  },
  {
    src: '/saurine-154-magic-trick-referee.jpg',
    name: "Magic referee",
    alt: "a magic-trick referee inspecting a top hat with a tiny rabbit toy",
    caption: "The rabbit knows the answer. It won’t tell.",
  },
  {
    src: '/saurine-155-bowling-coach.jpg',
    name: "Bowling coach",
    alt: "a bowling coach with a tiny bowling ball and three colorful pins",
    caption: "Spare pins available after class.",
  },
  {
    src: '/saurine-156-table-tennis-umpire.jpg',
    name: "Table tennis umpire",
    alt: "a table-tennis umpire holding a paddle and a tiny score board",
    caption: "Love means never missing match point.",
  },
  {
    src: '/saurine-157-school-newspaper-editor.jpg',
    name: "Newspaper editor",
    alt: "a school-newspaper editor surrounded by a fountain pen and rolled newspapers",
    caption: "Extra, extra: another reminder in the newsletter.",
  },
  {
    src: '/saurine-158-comet-spotter.jpg',
    name: "Comet spotter",
    alt: "a comet spotter with a telescope and a tiny paper comet",
    caption: "The forecast calls for one dramatic comet.",
  },
  {
    src: '/saurine-159-museum-gift-shop-clerk.jpg',
    name: "Gift shop",
    alt: "a museum gift-shop clerk holding a tiny souvenir dinosaur",
    caption: "Souvenir dinosaur has been put on the roll.",
  },
  {
    src: '/saurine-160-hobby-train-reviewer.jpg',
    name: "Train reviewer",
    alt: "a hobby reviewer presenting a tiny model train with a magnifying glass",
    caption: "A detailed review of tiny trains. Five stars.",
  },
  {
    src: '/saurine-161-library-book-cart-racer.jpg',
    name: "Book cart racer",
    alt: "a library book-cart racer steering an overloaded cart of books",
    caption: "\nThe book cart is in pole position.",
  },
  {
    src: '/saurine-162-school-bell-tuner.jpg',
    name: "Bell tuner",
    alt: "a school-bell tuner holding a tuning fork beside a brass bell",
    caption: "The bell is tuned to “two minutes left.”",
  },
  {
    src: '/saurine-163-pencil-sharpener-engineer.jpg',
    name: "Pencil engineer",
    alt: "a pencil-sharpener engineer with a giant colorful pencil and tiny toolkit",
    caption: "The pencil is ready. The sharpener is nervous.",
  },
  {
    src: '/saurine-164-lost-and-found-detective.jpg',
    name: "Lost and found",
    alt: "a lost-and-found detective holding a single mitten like a priceless clue",
    caption: "Case closed. It was behind the chair.",
  },
  {
    src: '/saurine-165-coat-hook-inspector.jpg',
    name: "Coat hook inspector",
    alt: "a coat-hook inspector using a clipboard beside a row of tiny coats",
    caption: "Coat hooks inspected. One has tenure.",
  },
  {
    src: '/saurine-166-assembly-host.jpg',
    name: "Assembly host",
    alt: "a school assembly host with a microphone and a very small podium",
    caption: "The podium is four inches taller than necessary.",
  },
  {
    src: '/saurine-167-science-fair-judge.jpg',
    name: "Science fair",
    alt: "a science-fair judge with a ribbon and a harmless fizzing beaker",
    caption: "The volcano is bubbling. The rubric is not.",
  },
  {
    src: '/saurine-168-school-lunch-critic.jpg',
    name: "Lunch critic",
    alt: "a lunch critic holding a tiny tray with an apple and a comically fancy fork",
    caption: "Presentation: excellent. Mystery vegetable: pending.",
  },
  {
    src: '/saurine-169-field-trip-photobomber.jpg',
    name: "Field trip",
    alt: "a field-trip chaperone with a camera and an enormous backpack",
    caption: "Chaperone count: one. Backpack count: twelve.",
  },
  {
    src: '/saurine-170-museum-statue-pose.jpg',
    name: "Statue pose",
    alt: "Mr Saurine posing like a museum statue with one arm dramatically raised",
    caption: "Hold the pose until the bell rings.",
  },
  {
    src: '/saurine-171-rainbow-measurer.jpg',
    name: "Rainbow measurer",
    alt: "a rainbow scientist measuring a rainbow with a comically long ruler",
    caption: "Measuring the rainbow. No calculators.",
  },
  {
    src: '/saurine-172-cloud-shape-referee.jpg',
    name: "Cloud referee",
    alt: "a cloud-shape judge with binoculars and a chart of cloud shapes",
    caption: "That cloud is shaped like an incomplete assignment.",
  },
  {
    src: '/saurine-173-rubber-duck-regatta.jpg',
    name: "Duck race",
    alt: "a rubber-duck regatta host with a tiny yellow duck and finish flag",
    caption: "The ducks have all handed in their forms.",
  },
  {
    src: '/saurine-174-school-pet-whisperer.jpg',
    name: "Pet whisperer",
    alt: "a school-pet whisperer holding a friendly plush hamster",
    caption: "The hamster is now class monitor.",
  },
  {
    src: '/saurine-175-camping-checklist-expert.jpg',
    name: "Camping checklist",
    alt: "a camping expert with checklist, tiny tent, and oversized compass",
    caption: "Checklist: tent, compass, emergency pencils.",
  },
  {
    src: '/saurine-176-snowman-sculptor.jpg',
    name: "Snow sculptor",
    alt: "a snow sculptor with scarf and a tiny snowman wearing glasses",
    caption: "Snowman has been assigned a reading log.",
  },
  {
    src: '/saurine-177-lighthouse-keeper.jpg',
    name: "Lighthouse keeper",
    alt: "a lighthouse keeper holding a lantern and a tiny model lighthouse",
    caption: "The light is on. The bell still rings.",
  },
  {
    src: '/saurine-178-harbor-master.jpg',
    name: "Harbor master",
    alt: "a harbor master with a captain's cap and a tiny paper boat",
    caption: "Smooth sailing until somebody asks for extra credit.",
  },
  {
    src: '/saurine-179-botanical-label-writer.jpg',
    name: "Plant labels",
    alt: "a botanical label writer with plant tags and a leafy sprig",
    caption: "Botanical labels: spelling counts.",
  },
  {
    src: '/saurine-180-picnic-planner.jpg',
    name: "Picnic planner",
    alt: "a picnic planner with gingham blanket, tiny basket, and meticulous checklist",
    caption: "Picnic scheduled between periods.",
  },
  {
    src: '/saurine-181-marble-run-engineer.jpg',
    name: "Marble-run engineer",
    alt: "a marble-run engineer with a colorful spiral track and a marble",
    caption: "\nThe marble has a very clear path.",
  },
  {
    src: '/saurine-182-school-play-director.jpg',
    name: "Play director",
    alt: "a school-play director with script pages and a tiny stage curtain",
    caption: "Opening night. The script has footnotes.",
  },
  {
    src: '/saurine-183-costume-department.jpg',
    name: "Costume department",
    alt: "a costume designer with a measuring tape and a rack of miniature hats",
    caption: "Costume change in the time it takes to say “settle down.”",
  },
  {
    src: '/saurine-184-puppet-show-host.jpg',
    name: "Puppet show",
    alt: "a puppet-show host beside a friendly sock puppet wearing glasses",
    caption: "The puppet knows what you did in maths.",
  },
  {
    src: '/saurine-185-card-trick-collector.jpg',
    name: "Card collector",
    alt: "a playing-card collector with a fan of colorful cards and a tiny binder",
    caption: "Pick a card. Any card is the homework.",
  },
  {
    src: '/saurine-186-origami-boat-captain.jpg',
    name: "Paper boat captain",
    alt: "a paper-boat captain standing by a tiny blue paper boat",
    caption: "A paper boat with a full timetable.",
  },
  {
    src: '/saurine-187-festival-stamp-booth.jpg',
    name: "Festival booth",
    alt: "a festival stamp-booth attendant with a colorful ink pad and tiny passport",
    caption: "One stamp per excellent question.",
  },
  {
    src: '/saurine-188-museum-map-folding.jpg',
    name: "Map folder",
    alt: "a museum visitor trying to fold an oversized map neatly",
    caption: "The map folds. The schedule does not.",
  },
  {
    src: '/saurine-189-staffroom-barista.jpg',
    name: "Staffroom barista",
    alt: "a staffroom barista holding a cappuccino with a tiny foam star",
    caption: "Coffee first. Attendance immediately after.",
  },
  {
    src: '/saurine-190-tea-ceremony-host.jpg',
    name: "Tea host",
    alt: "a tea ceremony host with a small teapot and a precise timer",
    caption: "Steeping time: exactly one period.",
  },
  {
    src: '/saurine-191-cookie-decorator.jpg',
    name: "Cookie decorator",
    alt: "a cookie decorator with a star-shaped biscuit and icing bag",
    caption: "Frosting is not an extension policy.",
  },
  {
    src: '/saurine-192-sourdough-scientist.jpg',
    name: "Sourdough scientist",
    alt: "a sourdough baker observing a bubbly starter jar",
    caption: "Starter culture: thriving. Group project: TBD.",
  },
  {
    src: '/saurine-193-garden-pond-keeper.jpg',
    name: "Pond keeper",
    alt: "a pond keeper with a lily pad and a tiny friendly frog",
    caption: "The frog has excellent pond manners.",
  },
  {
    src: '/saurine-194-aquarium-diver.jpg',
    name: "Aquarium diver",
    alt: "an aquarium diver with snorkel goggles and toy fish around him",
    caption: "Underwater lesson plans are still lesson plans.",
  },
  {
    src: '/saurine-195-birdwatching-club.jpg',
    name: "Birdwatching club",
    alt: "a birdwatcher with binoculars and a colorful toy bird perched nearby",
    caption: "The bird has a hall pass.",
  },
  {
    src: '/saurine-196-butterfly-house-guide.jpg',
    name: "Butterfly guide",
    alt: "a butterfly-house guide with delicate paper butterflies and a net",
    caption: "Butterfly net: for science, obviously.",
  },
  {
    src: '/saurine-197-junior-astronaut-trainer.jpg',
    name: "Astronaut trainer",
    alt: "an astronaut trainer holding a small rocket and flight checklist",
    caption: "Countdown to launch: three assignments.",
  },
  {
    src: '/saurine-198-robot-dance-judge.jpg',
    name: "Dance judge",
    alt: "a robot-dance judge with a tiny robot doing a silly pose",
    caption: "The robot has surprisingly good rhythm.",
  },
  {
    src: '/saurine-199-circus-ringmaster.jpg',
    name: "Circus ringmaster",
    alt: "a friendly circus ringmaster with a tiny top hat and colorful baton",
    caption: "The show must go on, after roll call.",
  },
  {
    src: '/saurine-200-paper-airship-builder.jpg',
    name: "Airship builder",
    alt: "a paper-airship builder with a floating handmade balloon model",
    caption: "First flight approved. Landing before recess.",
  },
] satisfies ReadonlyArray<Portrait>;

const newestArchivePortraits = [
  { id: 201, src: '/saurine-201-portrait-painter.jpg', name: "Mr Saurine Portrait painter", alt: "Mr Saurine as a portrait painter with a tiny easel painting Mr Saurine’s own portrait", caption: "The job title comes with absolutely no authority." },
  { id: 202, src: '/saurine-202-menu-meteorologist.jpg', name: "Mr Saurine Menu forecast", alt: "Mr Saurine as a cafeteria menu meteorologist pointing to a colorful menu forecast", caption: "He has prepared a briefing nobody requested." },
  { id: 203, src: '/saurine-203-pencil-case-stylist.jpg', name: "Mr Saurine Pencil-case stylist", alt: "Mr Saurine as a pencil-case stylist presenting a perfectly organized pencil case", caption: "A clipboard has entered the situation." },
  { id: 204, src: '/saurine-204-hallway-controller.jpg', name: "Mr Saurine Hallway traffic control", alt: "Mr Saurine as a hallway traffic controller with toy traffic lights and a clipboard", caption: "The glasses say expert. The notes say unclear." },
  { id: 205, src: '/saurine-205-homework-archivist.jpg', name: "Mr Saurine Homework archivist", alt: "Mr Saurine as a homework archivist carefully cataloging a comically tall pile of papers", caption: "This is somehow on the timetable now." },
  { id: 206, src: '/saurine-206-drying-paint-commentator.jpg', name: "Mr Saurine Paint commentator", alt: "Mr Saurine as a sports commentator narrating a freshly painted wall with a tiny microphone", caption: "He insists this counts as professional development." },
  { id: 207, src: '/saurine-207-hamster-translator.jpg', name: "Mr Saurine Hamster translator", alt: "Mr Saurine as a class pet translator listening to a friendly plush hamster with headphones", caption: "No one remembers scheduling this meeting." },
  { id: 208, src: '/saurine-208-poster-model.jpg', name: "Mr Saurine Poster model", alt: "Mr Saurine as an inspirational classroom poster model posing beside an absurdly earnest star chart", caption: "The results are unofficial but very confident." },
  { id: 209, src: '/saurine-209-debate-timekeeper.jpg', name: "Mr Saurine Debate timekeeper", alt: "Mr Saurine as a school debate timekeeper holding a tiny hourglass and a very large bell", caption: "A small problem has received a large report." },
  { id: 210, src: '/saurine-210-zipper-engineer.jpg', name: "Mr Saurine Zipper engineer", alt: "Mr Saurine as a zipper engineer inspecting a backpack zipper with a magnifying glass", caption: "This could have been an email." },
  { id: 211, src: '/saurine-211-map-projection-expert.jpg', name: "Mr Saurine Map projection", alt: "Mr Saurine as a map projection expert with a globe and a very complicated folded map", caption: "He would like to thank the corridor." },
  { id: 212, src: '/saurine-212-due-date-detective.jpg', name: "Mr Saurine Due-date detective", alt: "Mr Saurine as a library due-date detective with magnifier and overdue book slips", caption: "The committee is just him, twice." },
  { id: 213, src: '/saurine-213-cape-tailor.jpg', name: "Mr Saurine Cape tailor", alt: "Mr Saurine as a superhero cape tailor pinning a bright cape and holding sewing scissors", caption: "No further questions. Several follow-ups." },
  { id: 214, src: '/saurine-214-desk-archaeologist.jpg', name: "Mr Saurine Desk archaeology", alt: "Mr Saurine as a desk archaeologist excavating pencils from a tiny desk drawer", caption: "There is a badge for this. He made it." },
  { id: 215, src: '/saurine-215-slug-diplomat.jpg', name: "Mr Saurine Slug diplomacy", alt: "Mr Saurine as a school garden diplomat greeting a friendly garden snail with a tiny flag", caption: "The room has been asked to remain calm." },
  { id: 216, src: '/saurine-216-echo-tester.jpg', name: "Mr Saurine Hallway echo tester", alt: "Mr Saurine as a hallway echo tester holding a sound meter and cupping one ear", caption: "One hat, zero additional qualifications." },
  { id: 217, src: '/saurine-217-switchboard-operator.jpg', name: "Mr Saurine Switchboard operator", alt: "Mr Saurine as a vintage school switchboard operator plugging colorful cords into a tiny panel", caption: "The evidence is mostly vibes." },
  { id: 218, src: '/saurine-218-bubble-wrap-inspector.jpg', name: "Mr Saurine Bubble-wrap inspector", alt: "Mr Saurine as a bubble-wrap quality inspector examining a roll with serious concentration", caption: "A serious face for a very unserious job." },
  { id: 219, src: '/saurine-219-microscope-curator.jpg', name: "Mr Saurine Microscope curator", alt: "Mr Saurine as a microscope sample curator holding a slide and a tiny specimen box", caption: "His next appointment is with the photocopier." },
  { id: 220, src: '/saurine-220-soup-sommelier.jpg', name: "Mr Saurine Soup sommelier", alt: "Mr Saurine as a soup sommelier swirling a tiny soup cup and holding a tasting spoon", caption: "Please allow 3–5 school days for a ruling." },
  { id: 221, src: '/saurine-221-locker-whisperer.jpg', name: "Mr Saurine Locker whisperer", alt: "Mr Saurine as a locker whisperer with a stethoscope listening to a small blue locker", caption: "The job title comes with absolutely no authority." },
  { id: 222, src: '/saurine-222-desk-chair-tester.jpg', name: "Mr Saurine Chair tester", alt: "Mr Saurine as a desk-chair tester carefully rating a little classroom chair", caption: "He has prepared a briefing nobody requested." },
  { id: 223, src: '/saurine-223-paperclip-sculptor.jpg', name: "Mr Saurine Paperclip sculptor", alt: "Mr Saurine as a paperclip sculptor showing a tiny abstract sculpture made of colorful clips", caption: "A clipboard has entered the situation." },
  { id: 224, src: '/saurine-224-chalk-dust-statistician.jpg', name: "Mr Saurine Chalk statistics", alt: "Mr Saurine as a chalk-dust statistician with a chalkboard graph and a tiny feather duster", caption: "The glasses say expert. The notes say unclear." },
  { id: 225, src: '/saurine-225-lab-coat-judge.jpg', name: "Mr Saurine Lab coat runway", alt: "Mr Saurine as a lab-coat fashion judge holding score cards beside a miniature coat rack", caption: "This is somehow on the timetable now." },
  { id: 226, src: '/saurine-226-canteen-cashier.jpg', name: "Mr Saurine Canteen cashier", alt: "Mr Saurine as a school canteen cashier with a small register and a paper lunch bag", caption: "He insists this counts as professional development." },
  { id: 227, src: '/saurine-227-stamp-collector.jpg', name: "Mr Saurine Stamp collector", alt: "Mr Saurine as a stamp collector studying a colorful stamp album with a magnifying glass", caption: "No one remembers scheduling this meeting." },
  { id: 228, src: '/saurine-228-cold-lunch-inspector.jpg', name: "Mr Saurine Lunch inspector", alt: "Mr Saurine as a cold-lunch inspector checking a lunchbox with a clipboard", caption: "The results are unofficial but very confident." },
  { id: 229, src: '/saurine-229-tray-balancer.jpg', name: "Mr Saurine Tray balancing", alt: "Mr Saurine as a cafeteria tray balance champion carrying a perfectly level tray", caption: "A small problem has received a large report." },
  { id: 230, src: '/saurine-230-bell-orchestra-conductor.jpg', name: "Mr Saurine Bell orchestra", alt: "Mr Saurine as a school bell orchestra conductor waving a tiny baton among little bells", caption: "This could have been an email." },
  { id: 231, src: '/saurine-231-classroom-decorator.jpg', name: "Mr Saurine Classroom decorator", alt: "Mr Saurine as a classroom decorator comparing bunting and paper stars with a color chart", caption: "He would like to thank the corridor." },
  { id: 232, src: '/saurine-232-glitter-removal-specialist.jpg', name: "Mr Saurine Glitter removal", alt: "Mr Saurine as a glitter removal specialist with lint roller and a single sparkling sleeve", caption: "The committee is just him, twice." },
  { id: 233, src: '/saurine-233-umbrella-queue-manager.jpg', name: "Mr Saurine Umbrella queue", alt: "Mr Saurine as an umbrella queue manager organizing colorful umbrellas in a neat row", caption: "No further questions. Several follow-ups." },
  { id: 234, src: '/saurine-234-lunch-schedule-optimist.jpg', name: "Mr Saurine Lunch optimist", alt: "Mr Saurine as a cheerful lunch-schedule planner pointing at a tiny clock and sandwich", caption: "There is a badge for this. He made it." },
  { id: 235, src: '/saurine-235-book-repairer.jpg', name: "Mr Saurine Book repair", alt: "Mr Saurine as a library book repairer with book tape, glue brush, and a carefully mended book", caption: "The room has been asked to remain calm." },
  { id: 236, src: '/saurine-236-hush-supervisor.jpg', name: "Mr Saurine Quiet please", alt: "Mr Saurine as a library hush supervisor holding a gentle finger to his lips beside a tiny book", caption: "One hat, zero additional qualifications." },
  { id: 237, src: '/saurine-237-plant-babysitter.jpg', name: "Mr Saurine Plant babysitter", alt: "Mr Saurine as a principal’s plant babysitter holding a tiny watering can and nursery checklist", caption: "The evidence is mostly vibes." },
  { id: 238, src: '/saurine-238-paper-delivery-drone.jpg', name: "Mr Saurine Homework drone", alt: "Mr Saurine as a paper-delivery pilot steering a tiny safe classroom drone carrying worksheets", caption: "A serious face for a very unserious job." },
  { id: 239, src: '/saurine-239-paper-towel-inspector.jpg', name: "Mr Saurine Paper towel inspector", alt: "Mr Saurine as a paper-towel dispenser inspector with checklist and tiny measuring tape", caption: "His next appointment is with the photocopier." },
  { id: 240, src: '/saurine-240-chalk-archaeologist.jpg', name: "Mr Saurine Chalk archaeology", alt: "Mr Saurine as a chalk archaeologist brushing dust from an ancient classroom chalk stick", caption: "Please allow 3–5 school days for a ruling." },
  { id: 241, src: '/saurine-241-festival-ring-toss.jpg', name: "Mr Saurine Ring-toss host", alt: "Mr Saurine as a school festival ring-toss host with colorful hoops and tiny prizes", caption: "The job title comes with absolutely no authority." },
  { id: 242, src: '/saurine-242-scarecrow-consultant.jpg', name: "Mr Saurine Scarecrow consultant", alt: "Mr Saurine as a garden scarecrow consultant with straw hat and a miniature scarecrow", caption: "He has prepared a briefing nobody requested." },
  { id: 243, src: '/saurine-243-hat-day-stylist.jpg', name: "Mr Saurine Hat-day stylist", alt: "Mr Saurine as a hat-day stylist presenting an outrageous but friendly collection of school hats", caption: "A clipboard has entered the situation." },
  { id: 244, src: '/saurine-244-accordion-teacher.jpg', name: "Mr Saurine Accordion lesson", alt: "Mr Saurine as an accordion teacher holding a small accordion with colorful music notes", caption: "The glasses say expert. The notes say unclear." },
  { id: 245, src: '/saurine-245-recess-referee.jpg', name: "Mr Saurine Recess referee", alt: "Mr Saurine as a recess referee with whistle, stopwatch, and playground ball", caption: "This is somehow on the timetable now." },
  { id: 246, src: '/saurine-246-assembly-illusionist.jpg', name: "Mr Saurine Assembly magician", alt: "Mr Saurine as a school assembly illusionist producing a pencil from a top hat", caption: "He insists this counts as professional development." },
  { id: 247, src: '/saurine-247-musical-makeup-artist.jpg', name: "Mr Saurine Stage makeup", alt: "Mr Saurine as a school musical makeup artist with a brush and tiny stage mirror", caption: "No one remembers scheduling this meeting." },
  { id: 248, src: '/saurine-248-seating-cartographer.jpg', name: "Mr Saurine Seating chart", alt: "Mr Saurine as a classroom seating-chart cartographer arranging tiny desk tokens on a map", caption: "The results are unofficial but very confident." },
  { id: 249, src: '/saurine-249-quiz-forecaster.jpg', name: "Mr Saurine Pop quiz forecast", alt: "Mr Saurine as a pop-quiz weather forecaster with a cloud chart and a tiny lightning bolt", caption: "A small problem has received a large report." },
  { id: 250, src: '/saurine-250-sticky-note-archivist.jpg', name: "Mr Saurine Sticky-note archive", alt: "Mr Saurine as a sticky-note archivist surrounded by color-coded notes and a tiny filing box", caption: "This could have been an email." },
  { id: 251, src: '/saurine-251-biscuit-auditor.jpg', name: "Mr Saurine Biscuit audit", alt: "Mr Saurine as a staffroom biscuit auditor with magnifying glass and one lonely biscuit", caption: "He would like to thank the corridor." },
  { id: 252, src: '/saurine-252-homework-delivery-pilot.jpg', name: "Mr Saurine Homework pilot", alt: "Mr Saurine as a homework delivery pilot with a paper airplane and miniature flight checklist", caption: "The committee is just him, twice." },
  { id: 253, src: '/saurine-253-hall-pass-collector.jpg', name: "Mr Saurine Hall pass collection", alt: "Mr Saurine as a hall-pass collector displaying a tiny framed pass collection", caption: "No further questions. Several follow-ups." },
  { id: 254, src: '/saurine-254-photo-album-curator.jpg', name: "Mr Saurine Album curator", alt: "Mr Saurine as a school photo-album curator arranging a miniature yearbook gallery", caption: "There is a badge for this. He made it." },
  { id: 255, src: '/saurine-255-lesson-plan-origami.jpg', name: "Mr Saurine Lesson-plan origami", alt: "Mr Saurine as a teacher folding a lesson plan into a detailed paper crane", caption: "The room has been asked to remain calm." },
  { id: 256, src: '/saurine-256-plant-orchestra-conductor.jpg', name: "Mr Saurine Plant orchestra", alt: "Mr Saurine as a classroom plant orchestra conductor waving a baton among leafy pots", caption: "One hat, zero additional qualifications." },
  { id: 257, src: '/saurine-257-cardboard-architect.jpg', name: "Mr Saurine Cardboard architect", alt: "Mr Saurine as a cardboard architect presenting a tiny elaborate classroom model", caption: "The evidence is mostly vibes." },
  { id: 258, src: '/saurine-258-bus-schedule-prophet.jpg', name: "Mr Saurine Bus timetable", alt: "Mr Saurine as a bus-schedule expert consulting a timetable and a tiny yellow bus", caption: "A serious face for a very unserious job." },
  { id: 259, src: '/saurine-259-bubble-investigator.jpg', name: "Mr Saurine Bubble investigator", alt: "Mr Saurine as a science investigator studying colorful harmless bubbles through a magnifier", caption: "His next appointment is with the photocopier." },
  { id: 260, src: '/saurine-260-bell-impersonator.jpg', name: "Mr Saurine Bell impersonator", alt: "Mr Saurine as a school-bell impersonator holding a small bell and a dramatic expression", caption: "Please allow 3–5 school days for a ruling." },
  { id: 261, src: '/saurine-261-tiny-book-reviewer.jpg', name: "Mr Saurine Tiny book review", alt: "Mr Saurine as a tiny-book reviewer presenting a pocket-sized book with a five-star card", caption: "The job title comes with absolutely no authority." },
  { id: 262, src: '/saurine-262-eraser-collector.jpg', name: "Mr Saurine Eraser collection", alt: "Mr Saurine as a chalkboard eraser collector showing a shelf of colorful miniature erasers", caption: "He has prepared a briefing nobody requested." },
  { id: 263, src: '/saurine-263-dessert-inspector.jpg', name: "Mr Saurine Dessert inspector", alt: "Mr Saurine as a school-lunch dessert inspector comparing a cupcake and fruit cup", caption: "A clipboard has entered the situation." },
  { id: 264, src: '/saurine-264-floor-tile-surveyor.jpg', name: "Mr Saurine Floor surveyor", alt: "Mr Saurine as a floor-tile surveyor with a tape measure and a small grid map", caption: "The glasses say expert. The notes say unclear." },
  { id: 265, src: '/saurine-265-clock-adjuster.jpg', name: "Mr Saurine Clock adjustment", alt: "Mr Saurine as a classroom clock adjuster holding a tiny clock and precision screwdriver", caption: "This is somehow on the timetable now." },
  { id: 266, src: '/saurine-266-school-diorama-architect.jpg', name: "Mr Saurine Diorama architect", alt: "Mr Saurine as a school diorama architect presenting a tiny classroom in a box", caption: "He insists this counts as professional development." },
  { id: 267, src: '/saurine-267-boardgame-inventor.jpg', name: "Mr Saurine Board-game inventor", alt: "Mr Saurine as an educational board-game inventor with a colorful game board and oversized die", caption: "No one remembers scheduling this meeting." },
  { id: 268, src: '/saurine-268-sock-detective.jpg', name: "Mr Saurine Sock mystery", alt: "Mr Saurine as a lost-sock detective with one striped sock and a clue board", caption: "The results are unofficial but very confident." },
  { id: 269, src: '/saurine-269-weather-balloon-tracker.jpg', name: "Mr Saurine Balloon tracker", alt: "Mr Saurine as a weather-balloon tracker with binoculars and a tiny balloon map", caption: "A small problem has received a large report." },
  { id: 270, src: '/saurine-270-trophy-curator.jpg', name: "Mr Saurine Trophy curator", alt: "Mr Saurine as a school-sports trophy curator polishing a tiny silver cup", caption: "This could have been an email." },
  { id: 271, src: '/saurine-271-fountain-pen-fan.jpg', name: "Mr Saurine Pen enthusiast", alt: "Mr Saurine as a fountain-pen enthusiast displaying a beautiful pen and a notebook", caption: "He would like to thank the corridor." },
  { id: 272, src: '/saurine-272-doorstop-innovator.jpg', name: "Mr Saurine Doorstop inventor", alt: "Mr Saurine as a classroom doorstop inventor showing an ingenious wedge prototype", caption: "The committee is just him, twice." },
  { id: 273, src: '/saurine-273-corridor-muralist.jpg', name: "Mr Saurine Mural artist", alt: "Mr Saurine as a school corridor muralist with paintbrush and a colorful mural sketch", caption: "No further questions. Several follow-ups." },
  { id: 274, src: '/saurine-274-swing-safety-tester.jpg', name: "Mr Saurine Swing safety", alt: "Mr Saurine as a playground swing safety tester with a helmet and inspection checklist", caption: "There is a badge for this. He made it." },
  { id: 275, src: '/saurine-275-tea-taster.jpg', name: "Mr Saurine Tea tasting", alt: "Mr Saurine as a science teacher’s tea taster with teacup, timer, and tasting notes", caption: "The room has been asked to remain calm." },
  { id: 276, src: '/saurine-276-recycled-art-curator.jpg', name: "Mr Saurine Recycled art", alt: "Mr Saurine as a recycled-art curator presenting a sculpture made from classroom supplies", caption: "One hat, zero additional qualifications." },
  { id: 277, src: '/saurine-277-bicycle-bell-instructor.jpg', name: "Mr Saurine Bike bell lesson", alt: "Mr Saurine as a bicycle-bell instructor holding a tiny bike bell and a safety diagram", caption: "The evidence is mostly vibes." },
  { id: 278, src: '/saurine-278-photocopier-whisperer.jpg', name: "Mr Saurine Copier whisperer", alt: "Mr Saurine as a photocopier whisperer gently encouraging a friendly office printer", caption: "A serious face for a very unserious job." },
  { id: 279, src: '/saurine-279-theatre-usher.jpg', name: "Mr Saurine Theatre usher", alt: "Mr Saurine as a theatre usher with a tiny flashlight and a row of velvet seats", caption: "His next appointment is with the photocopier." },
  { id: 280, src: '/saurine-280-book-club-host.jpg', name: "Mr Saurine Book club", alt: "Mr Saurine as a library book-club host with a stack of books and a tiny tea cup", caption: "Please allow 3–5 school days for a ruling." },
  { id: 281, src: '/saurine-281-coin-collector.jpg', name: "Mr Saurine Coin collection", alt: "Mr Saurine as an ancient-coin collector inspecting a coin with a magnifying glass", caption: "The job title comes with absolutely no authority." },
  { id: 282, src: '/saurine-282-bird-conductor.jpg', name: "Mr Saurine Bird concert", alt: "Mr Saurine as a woodland bird-concert conductor waving a baton among friendly birds", caption: "He has prepared a briefing nobody requested." },
  { id: 283, src: '/saurine-283-miniature-restorer.jpg', name: "Mr Saurine Miniature restorer", alt: "Mr Saurine as a miniature-painting restorer with tiny brush and magnifying lamp", caption: "A clipboard has entered the situation." },
  { id: 284, src: '/saurine-284-timetable-tarot.jpg', name: "Mr Saurine Timetable reading", alt: "Mr Saurine as a timetable fortune-teller studying playful illustrated schedule cards", caption: "The glasses say expert. The notes say unclear." },
  { id: 285, src: '/saurine-285-bell-museum-curator.jpg', name: "Mr Saurine Bell museum", alt: "Mr Saurine as a school-bell museum curator with a tiny gold bell and white gloves", caption: "This is somehow on the timetable now." },
  { id: 286, src: '/saurine-286-napkin-folder.jpg', name: "Mr Saurine Napkin folding", alt: "Mr Saurine as a cafeteria napkin-folding champion presenting a very elaborate napkin", caption: "He insists this counts as professional development." },
  { id: 287, src: '/saurine-287-dusting-champion.jpg', name: "Mr Saurine Dusting champion", alt: "Mr Saurine as a classroom dusting champion with feather duster and trophy", caption: "No one remembers scheduling this meeting." },
  { id: 288, src: '/saurine-288-greeting-card-writer.jpg', name: "Mr Saurine Card writer", alt: "Mr Saurine as a serious greeting-card writer composing a note with colorful pens", caption: "The results are unofficial but very confident." },
  { id: 289, src: '/saurine-289-certificate-engraver.jpg', name: "Mr Saurine Certificate engraver", alt: "Mr Saurine as an award-certificate engraver with a stylus and tiny gold plaque", caption: "A small problem has received a large report." },
  { id: 290, src: '/saurine-290-mascot-wrangler.jpg', name: "Mr Saurine Mascot wrangler", alt: "Mr Saurine as a school mascot costume wrangler helping a friendly blue mascot", caption: "This could have been an email." },
  { id: 291, src: '/saurine-291-compass-tester.jpg', name: "Mr Saurine Compass test", alt: "Mr Saurine as an outdoor-education compass tester holding a compass and trail map", caption: "He would like to thank the corridor." },
  { id: 292, src: '/saurine-292-recycling-sorter.jpg', name: "Mr Saurine Recycling sorter", alt: "Mr Saurine as a recycling-bin sorter holding a paper, can, and color-coded chart", caption: "The committee is just him, twice." },
  { id: 293, src: '/saurine-293-joke-book-reviewer.jpg', name: "Mr Saurine Joke reviewer", alt: "Mr Saurine as a joke-book reviewer trying to keep a straight face with a book of school jokes", caption: "No further questions. Several follow-ups." },
  { id: 294, src: '/saurine-294-mini-cake-decorator.jpg', name: "Mr Saurine Tiny cake", alt: "Mr Saurine as a mini-cake decorator adding a tiny star to a little blue cake", caption: "There is a badge for this. He made it." },
  { id: 295, src: '/saurine-295-slide-painter.jpg', name: "Mr Saurine Microscope art", alt: "Mr Saurine as a microscope-slide painter decorating a glass slide with tiny colors", caption: "The room has been asked to remain calm." },
  { id: 296, src: '/saurine-296-bridge-load-tester.jpg', name: "Mr Saurine Bridge tester", alt: "Mr Saurine as a model-bridge load tester carefully placing a tiny book on a bridge", caption: "One hat, zero additional qualifications." },
  { id: 297, src: '/saurine-297-sock-puppet-speaker.jpg', name: "Mr Saurine Puppet parliament", alt: "Mr Saurine as a sock-puppet parliament speaker beside a tiny puppet podium", caption: "The evidence is mostly vibes." },
  { id: 298, src: '/saurine-298-staffroom-commentator.jpg', name: "Mr Saurine Staffroom sports", alt: "Mr Saurine as a staffroom sports commentator speaking into a tiny microphone beside a mug", caption: "A serious face for a very unserious job." },
  { id: 299, src: '/saurine-299-cloud-spotting-club.jpg', name: "Mr Saurine Cloud club", alt: "Mr Saurine as a cloud-spotting club leader holding a chart and tiny binoculars", caption: "His next appointment is with the photocopier." },
  { id: 300, src: '/saurine-300-bell-ringer-coach.jpg', name: "Mr Saurine Bell-ringer coach", alt: "Mr Saurine as a school bell-ringer coach with oversized gloves and a little brass bell", caption: "Please allow 3–5 school days for a ruling." },
] satisfies ReadonlyArray<NumberedPortrait>;
const finalArchivePortraits = [
  { id: 301, src: '/saurine-301-hall-pass-bureau-chief.jpg', name: "Mr Saurine Hall-pass bureau chief", alt: "Mr Saurine as a hall-pass bureau chief at an absurdly tiny filing desk", caption: "This meeting could have been a sticky note." },
  { id: 302, src: '/saurine-302-stapler-safety-officer.jpg', name: "Mr Saurine Stapler safety officer", alt: "Mr Saurine as a stapler safety officer inspecting a comically small stapler", caption: "Officially in charge of one very small thing." },
  { id: 303, src: '/saurine-303-lost-pencil-negotiator.jpg', name: "Mr Saurine Lost-pencil negotiator", alt: "Mr Saurine as a lost-pencil negotiator holding a pencil like a peace offering", caption: "The clipboard has requested its own office." },
  { id: 304, src: '/saurine-304-attendance-roll-archivist.jpg', name: "Mr Saurine Attendance archivist", alt: "Mr Saurine as an attendance archivist balancing a tower of school registers", caption: "A bold plan with no budget and three pencils." },
  { id: 305, src: '/saurine-305-queue-etiquette-professor.jpg', name: "Mr Saurine Queue etiquette professor", alt: "Mr Saurine as a queue-etiquette professor arranging tiny floor markers", caption: "He has called a committee. It is just him." },
  { id: 306, src: '/saurine-306-mystery-note-translator.jpg', name: "Mr Saurine Mystery-note translator", alt: "Mr Saurine as a mystery-note translator studying a folded note with a magnifier", caption: "The paperwork is winning, but only narrowly." },
  { id: 307, src: '/saurine-307-desk-drawer-mayor.jpg', name: "Mr Saurine Desk-drawer mayor", alt: "Mr Saurine as a desk-drawer mayor standing beside a tiny drawer podium", caption: "Please allow 3–5 school days for a ruling." },
  { id: 308, src: '/saurine-308-timetable-proofreader.jpg', name: "Mr Saurine Timetable proofreader", alt: "Mr Saurine as a timetable proofreader comparing two wildly complicated schedules", caption: "He insists this is on the timetable." },
  { id: 309, src: '/saurine-309-pencil-budget-auditor.jpg', name: "Mr Saurine Pencil-budget auditor", alt: "Mr Saurine as a pencil-budget auditor counting a very small pile of pencils", caption: "One tiny task. A surprisingly large badge." },
  { id: 310, src: '/saurine-310-classroom-plant-doctor.jpg', name: "Mr Saurine Classroom plant doctor", alt: "Mr Saurine as a classroom plant doctor listening to a droopy potted plant", caption: "The glasses say expert; the prop says otherwise." },
  { id: 311, src: '/saurine-311-whiteboard-frame-inspector.jpg', name: "Mr Saurine Whiteboard inspector", alt: "Mr Saurine as a whiteboard-frame inspector with a tiny spirit level", caption: "A serious briefing about a deeply unserious matter." },
  { id: 312, src: '/saurine-312-excuse-note-notary.jpg', name: "Mr Saurine Excuse-note notary", alt: "Mr Saurine as an excuse-note notary stamping a stack of silly blank notes", caption: "The minutes will be circulated to the entire corridor." },
  { id: 313, src: '/saurine-313-locker-number-historian.jpg', name: "Mr Saurine Locker historian", alt: "Mr Saurine as a locker-number historian beside a miniature school locker", caption: "He has prepared a chart. There will be a chart." },
  { id: 314, src: '/saurine-314-school-map-legend-editor.jpg', name: "Mr Saurine Map legend editor", alt: "Mr Saurine as a school-map legend editor with a rolled map and colored pencils", caption: "Nobody asked for an audit. The audit is here." },
  { id: 315, src: '/saurine-315-assembly-seat-reserver.jpg', name: "Mr Saurine Assembly seat reserver", alt: "Mr Saurine as an assembly-seat reserver marking seats with tiny flags", caption: "A new department has been created for this." },
  { id: 316, src: '/saurine-316-emergency-eraser-coordinator.jpg', name: "Mr Saurine Eraser coordinator", alt: "Mr Saurine as an emergency eraser coordinator displaying a row of colorful erasers", caption: "The whistle is decorative. The authority is not." },
  { id: 317, src: '/saurine-317-classroom-door-greeter.jpg', name: "Mr Saurine Classroom door greeter", alt: "Mr Saurine as a classroom-door greeter with a tiny welcome bell", caption: "The situation is under review by one man." },
  { id: 318, src: '/saurine-318-supply-cupboard-curator.jpg', name: "Mr Saurine Supply cupboard curator", alt: "Mr Saurine as a supply-cupboard curator presenting an impeccably organized tiny cupboard", caption: "There are forms for this. Of course there are." },
  { id: 319, src: '/saurine-319-paper-jam-investigator.jpg', name: "Mr Saurine Paper-jam investigator", alt: "Mr Saurine as a paper-jam investigator consulting a friendly little printer", caption: "He has named the folder. Twice." },
  { id: 320, src: '/saurine-320-substitute-teacher-coach.jpg', name: "Mr Saurine Substitute coach", alt: "Mr Saurine as a substitute-teacher coach holding a tiny whistle and blank lesson plan", caption: "Recess is pending final approval." },
  { id: 321, src: '/saurine-321-toast-crust-critic.jpg', name: "Mr Saurine Toast-crust critic", alt: "Mr Saurine as a toast-crust critic inspecting one tiny square of toast", caption: "This meeting could have been a sticky note." },
  { id: 322, src: '/saurine-322-sandwich-stacking-judge.jpg', name: "Mr Saurine Sandwich-stacking judge", alt: "Mr Saurine as a sandwich-stacking judge measuring a precariously tall sandwich", caption: "Officially in charge of one very small thing." },
  { id: 323, src: '/saurine-323-thermos-temperature-analyst.jpg', name: "Mr Saurine Thermos analyst", alt: "Mr Saurine as a thermos-temperature analyst checking a tiny cup with a thermometer", caption: "The clipboard has requested its own office." },
  { id: 324, src: '/saurine-324-biscuit-crumb-detective.jpg', name: "Mr Saurine Biscuit-crumb detective", alt: "Mr Saurine as a biscuit-crumb detective tracking crumbs with a magnifying glass", caption: "A bold plan with no budget and three pencils." },
  { id: 325, src: '/saurine-325-lunchbox-hinge-engineer.jpg', name: "Mr Saurine Lunchbox hinge engineer", alt: "Mr Saurine as a lunchbox-hinge engineer testing a colorful little lunchbox", caption: "He has called a committee. It is just him." },
  { id: 326, src: '/saurine-326-apple-polishing-commissioner.jpg', name: "Mr Saurine Apple-polishing commissioner", alt: "Mr Saurine as an apple-polishing commissioner buffing an enormous shiny apple", caption: "The paperwork is winning, but only narrowly." },
  { id: 327, src: '/saurine-327-spoon-balance-champion.jpg', name: "Mr Saurine Spoon-balance champion", alt: "Mr Saurine as a spoon-balance champion holding a spoon with a tiny medal", caption: "Please allow 3–5 school days for a ruling." },
  { id: 328, src: '/saurine-328-cereal-box-cryptographer.jpg', name: "Mr Saurine Cereal-box cryptographer", alt: "Mr Saurine as a cereal-box cryptographer decoding a puzzle on a blank cereal box", caption: "He insists this is on the timetable." },
  { id: 329, src: '/saurine-329-snack-napkin-folding-coach.jpg', name: "Mr Saurine Napkin-folding coach", alt: "Mr Saurine as a snack-napkin folding coach showing an absurdly elaborate fold", caption: "One tiny task. A surprisingly large badge." },
  { id: 330, src: '/saurine-330-pickle-quality-arbiter.jpg', name: "Mr Saurine Pickle quality arbiter", alt: "Mr Saurine as a pickle-quality arbiter inspecting a tiny pickle jar", caption: "The glasses say expert; the prop says otherwise." },
  { id: 331, src: '/saurine-331-cupcake-height-surveyor.jpg', name: "Mr Saurine Cupcake-height surveyor", alt: "Mr Saurine as a cupcake-height surveyor measuring frosting with a ruler", caption: "A serious briefing about a deeply unserious matter." },
  { id: 332, src: '/saurine-332-popcorn-kernel-accountant.jpg', name: "Mr Saurine Popcorn accountant", alt: "Mr Saurine as a popcorn-kernel accountant counting a miniature bowl of popcorn", caption: "The minutes will be circulated to the entire corridor." },
  { id: 333, src: '/saurine-333-juice-box-straw-engineer.jpg', name: "Mr Saurine Juice-box straw engineer", alt: "Mr Saurine as a juice-box straw engineer examining a tiny straw and juice box", caption: "He has prepared a chart. There will be a chart." },
  { id: 334, src: '/saurine-334-cafeteria-menu-poet.jpg', name: "Mr Saurine Cafeteria menu poet", alt: "Mr Saurine as a cafeteria-menu poet writing in a notebook beside a lunch tray", caption: "Nobody asked for an audit. The audit is here." },
  { id: 335, src: '/saurine-335-leftover-pasta-curator.jpg', name: "Mr Saurine Leftover pasta curator", alt: "Mr Saurine as a leftover-pasta curator presenting a tiny bowl like museum art", caption: "A new department has been created for this." },
  { id: 336, src: '/saurine-336-cookie-tin-security-chief.jpg', name: "Mr Saurine Cookie-tin security chief", alt: "Mr Saurine as a cookie-tin security chief guarding a comically large biscuit tin", caption: "The whistle is decorative. The authority is not." },
  { id: 337, src: '/saurine-337-soup-spoon-sommelier.jpg', name: "Mr Saurine Soup-spoon sommelier", alt: "Mr Saurine as a soup-spoon sommelier comparing two tiny spoons very seriously", caption: "The situation is under review by one man." },
  { id: 338, src: '/saurine-338-fruit-bowl-cartographer.jpg', name: "Mr Saurine Fruit-bowl cartographer", alt: "Mr Saurine as a fruit-bowl cartographer mapping a bowl of colorful fruit", caption: "There are forms for this. Of course there are." },
  { id: 339, src: '/saurine-339-cheese-sandwich-architect.jpg', name: "Mr Saurine Cheese-sandwich architect", alt: "Mr Saurine as a cheese-sandwich architect presenting a carefully engineered snack", caption: "He has named the folder. Twice." },
  { id: 340, src: '/saurine-340-after-school-tea-thermometer.jpg', name: "Mr Saurine Tea thermometer expert", alt: "Mr Saurine as a tea-temperature expert timing a tiny cup of tea", caption: "Recess is pending final approval." },
  { id: 341, src: '/saurine-341-button-collection-librarian.jpg', name: "Mr Saurine Button librarian", alt: "Mr Saurine as a button-collection librarian displaying colorful buttons in tiny drawers", caption: "This meeting could have been a sticky note." },
  { id: 342, src: '/saurine-342-yarn-tangle-mediator.jpg', name: "Mr Saurine Yarn-tangle mediator", alt: "Mr Saurine as a yarn-tangle mediator negotiating with a comically tangled skein", caption: "Officially in charge of one very small thing." },
  { id: 343, src: '/saurine-343-paper-snowflake-engineer.jpg', name: "Mr Saurine Paper-snowflake engineer", alt: "Mr Saurine as a paper-snowflake engineer holding a delicate folded paper design", caption: "The clipboard has requested its own office." },
  { id: 344, src: '/saurine-344-rubber-stamp-chorographer.jpg', name: "Mr Saurine Rubber-stamp choreographer", alt: "Mr Saurine as a rubber-stamp choreographer arranging colorful stamps like dancers", caption: "A bold plan with no budget and three pencils." },
  { id: 345, src: '/saurine-345-bookmark-personal-shopper.jpg', name: "Mr Saurine Bookmark stylist", alt: "Mr Saurine as a bookmark personal shopper presenting a tiny bookmark collection", caption: "He has called a committee. It is just him." },
  { id: 346, src: '/saurine-346-shoelace-knot-instructor.jpg', name: "Mr Saurine Shoelace-knot instructor", alt: "Mr Saurine as a shoelace-knot instructor demonstrating an enormous neat bow", caption: "The paperwork is winning, but only narrowly." },
  { id: 347, src: '/saurine-347-tiny-terrarium-landlord.jpg', name: "Mr Saurine Terrarium landlord", alt: "Mr Saurine as a tiny-terrarium landlord holding a glass garden with a miniature lease", caption: "Please allow 3–5 school days for a ruling." },
  { id: 348, src: '/saurine-348-origami-crane-air-traffic.jpg', name: "Mr Saurine Paper-crane air traffic", alt: "Mr Saurine as a paper-crane air-traffic controller guiding folded cranes", caption: "He insists this is on the timetable." },
  { id: 349, src: '/saurine-349-magnet-poetry-editor.jpg', name: "Mr Saurine Magnet-poetry editor", alt: "Mr Saurine as a magnet-poetry editor arranging colorful word tiles on a small board", caption: "One tiny task. A surprisingly large badge." },
  { id: 350, src: '/saurine-350-bead-bracelet-foreman.jpg', name: "Mr Saurine Bead-bracelet foreman", alt: "Mr Saurine as a bead-bracelet foreman inspecting a strand of oversized colorful beads", caption: "The glasses say expert; the prop says otherwise." },
  { id: 351, src: '/saurine-351-sock-pairing-arbitrator.jpg', name: "Mr Saurine Sock-pairing arbitrator", alt: "Mr Saurine as a sock-pairing arbitrator matching two mismatched socks", caption: "A serious briefing about a deeply unserious matter." },
  { id: 352, src: '/saurine-352-cardboard-tube-conservator.jpg', name: "Mr Saurine Cardboard-tube conservator", alt: "Mr Saurine as a cardboard-tube conservator protecting a tiny sculpture", caption: "The minutes will be circulated to the entire corridor." },
  { id: 353, src: '/saurine-353-puzzle-piece-matchmaker.jpg', name: "Mr Saurine Puzzle matchmaker", alt: "Mr Saurine as a puzzle-piece matchmaker presenting two pieces like a perfect pair", caption: "He has prepared a chart. There will be a chart." },
  { id: 354, src: '/saurine-354-sticker-sheet-curator.jpg', name: "Mr Saurine Sticker-sheet curator", alt: "Mr Saurine as a sticker-sheet curator showing a dazzling blank sticker sheet", caption: "Nobody asked for an audit. The audit is here." },
  { id: 355, src: '/saurine-355-crayon-tip-restorer.jpg', name: "Mr Saurine Crayon restorer", alt: "Mr Saurine as a crayon-tip restorer carefully repairing a tiny crayon", caption: "A new department has been created for this." },
  { id: 356, src: '/saurine-356-model-boat-harbor-master.jpg', name: "Mr Saurine Model-boat harbor master", alt: "Mr Saurine as a model-boat harbor master beside a fleet of paper boats", caption: "The whistle is decorative. The authority is not." },
  { id: 357, src: '/saurine-357-button-badge-engraver.jpg', name: "Mr Saurine Badge engraver", alt: "Mr Saurine as a button-badge engraver holding a tiny blank badge", caption: "The situation is under review by one man." },
  { id: 358, src: '/saurine-358-bookmark-ribbon-tester.jpg', name: "Mr Saurine Ribbon tester", alt: "Mr Saurine as a bookmark-ribbon tester comparing brightly colored ribbons", caption: "There are forms for this. Of course there are." },
  { id: 359, src: '/saurine-359-wind-up-toy-inspector.jpg', name: "Mr Saurine Wind-up toy inspector", alt: "Mr Saurine as a wind-up-toy inspector testing a cheerful tiny toy", caption: "He has named the folder. Twice." },
  { id: 360, src: '/saurine-360-shoebox-diorama-director.jpg', name: "Mr Saurine Shoebox diorama director", alt: "Mr Saurine as a shoebox-diorama director presenting a miniature scene", caption: "Recess is pending final approval." },
  { id: 361, src: '/saurine-361-puddle-depth-meteorologist.jpg', name: "Mr Saurine Puddle meteorologist", alt: "Mr Saurine as a puddle-depth meteorologist measuring a tiny puddle with a rain gauge", caption: "This meeting could have been a sticky note." },
  { id: 362, src: '/saurine-362-leaf-vein-cartographer.jpg', name: "Mr Saurine Leaf-vein cartographer", alt: "Mr Saurine as a leaf-vein cartographer studying a large leaf under a magnifier", caption: "Officially in charge of one very small thing." },
  { id: 363, src: '/saurine-363-moon-phase-calendar-keeper.jpg', name: "Mr Saurine Moon calendar keeper", alt: "Mr Saurine as a moon-phase calendar keeper with a telescope and tiny moon chart", caption: "The clipboard has requested its own office." },
  { id: 364, src: '/saurine-364-wind-sock-test-pilot.jpg', name: "Mr Saurine Windsock test pilot", alt: "Mr Saurine as a windsock test pilot checking a colorful windsock outdoors", caption: "A bold plan with no budget and three pencils." },
  { id: 365, src: '/saurine-365-ant-parade-marshall.jpg', name: "Mr Saurine Ant parade marshal", alt: "Mr Saurine as an ant-parade marshal with a tiny flag and a harmless line of toy ants", caption: "He has called a committee. It is just him." },
  { id: 366, src: '/saurine-366-backyard-volcano-safety-guide.jpg', name: "Mr Saurine Volcano safety guide", alt: "Mr Saurine as a backyard-volcano safety guide beside a small harmless model volcano", caption: "The paperwork is winning, but only narrowly." },
  { id: 367, src: '/saurine-367-compass-declination-consultant.jpg', name: "Mr Saurine Compass consultant", alt: "Mr Saurine as a compass consultant holding a compass and a tiny trail map", caption: "Please allow 3–5 school days for a ruling." },
  { id: 368, src: '/saurine-368-rainbow-end-surveyor.jpg', name: "Mr Saurine Rainbow-end surveyor", alt: "Mr Saurine as a rainbow-end surveyor pointing a ruler toward a little rainbow", caption: "He insists this is on the timetable." },
  { id: 369, src: '/saurine-369-birdbath-lifeguard.jpg', name: "Mr Saurine Birdbath lifeguard", alt: "Mr Saurine as a birdbath lifeguard with a tiny whistle and a friendly toy bird", caption: "One tiny task. A surprisingly large badge." },
  { id: 370, src: '/saurine-370-cloud-shadow-measurer.jpg', name: "Mr Saurine Cloud-shadow measurer", alt: "Mr Saurine as a cloud-shadow measurer tracking a soft cloud with a chart", caption: "The glasses say expert; the prop says otherwise." },
  { id: 371, src: '/saurine-371-pinecone-classifier.jpg', name: "Mr Saurine Pinecone classifier", alt: "Mr Saurine as a pinecone classifier displaying a few curious pinecones", caption: "A serious briefing about a deeply unserious matter." },
  { id: 372, src: '/saurine-372-backyard-constellation-guide.jpg', name: "Mr Saurine Constellation guide", alt: "Mr Saurine as a backyard-constellation guide with a star chart and binoculars", caption: "The minutes will be circulated to the entire corridor." },
  { id: 373, src: '/saurine-373-garden-worm-weather-reporter.jpg', name: "Mr Saurine Worm weather reporter", alt: "Mr Saurine as a garden-worm weather reporter with a tiny raincoat and chart", caption: "He has prepared a chart. There will be a chart." },
  { id: 374, src: '/saurine-374-snail-race-starter.jpg', name: "Mr Saurine Snail-race starter", alt: "Mr Saurine as a snail-race starter waving a flag beside a friendly toy snail", caption: "Nobody asked for an audit. The audit is here." },
  { id: 375, src: '/saurine-375-birdsong-volume-auditor.jpg', name: "Mr Saurine Birdsong auditor", alt: "Mr Saurine as a birdsong-volume auditor listening with oversized headphones outdoors", caption: "A new department has been created for this." },
  { id: 376, src: '/saurine-376-fossil-shell-lunchbox-curator.jpg', name: "Mr Saurine Fossil-shell curator", alt: "Mr Saurine as a fossil-shell curator examining a seashell in a tiny case", caption: "The whistle is decorative. The authority is not." },
  { id: 377, src: '/saurine-377-wind-direction-debate-moderator.jpg', name: "Mr Saurine Wind debate moderator", alt: "Mr Saurine as a wind-direction debate moderator comparing two small weather vanes", caption: "The situation is under review by one man." },
  { id: 378, src: '/saurine-378-geode-opening-ceremony-host.jpg', name: "Mr Saurine Geode ceremony host", alt: "Mr Saurine as a geode-opening ceremony host holding a sparkling geode", caption: "There are forms for this. Of course there are." },
  { id: 379, src: '/saurine-379-backyard-planetarium-ticket-taker.jpg', name: "Mr Saurine Planetarium ticket taker", alt: "Mr Saurine as a backyard-planetarium ticket taker with a tiny telescope and ticket roll", caption: "He has named the folder. Twice." },
  { id: 380, src: '/saurine-380-sunflower-shadow-chronologist.jpg', name: "Mr Saurine Sunflower shadow tracker", alt: "Mr Saurine as a sunflower-shadow chronologist timing a giant sunflower", caption: "Recess is pending final approval." },
  { id: 381, src: '/saurine-381-school-play-prop-accountant.jpg', name: "Mr Saurine Prop accountant", alt: "Mr Saurine as a school-play prop accountant balancing a comically long prop list", caption: "This meeting could have been a sticky note." },
  { id: 382, src: '/saurine-382-curtain-call-timekeeper.jpg', name: "Mr Saurine Curtain-call timekeeper", alt: "Mr Saurine as a curtain-call timekeeper with a stopwatch and tiny theatre curtain", caption: "Officially in charge of one very small thing." },
  { id: 383, src: '/saurine-383-costume-pocket-inventory-clerk.jpg', name: "Mr Saurine Costume inventory clerk", alt: "Mr Saurine as a costume-pocket inventory clerk examining a row of tiny hats", caption: "The clipboard has requested its own office." },
  { id: 384, src: '/saurine-384-puppet-applause-meter-operator.jpg', name: "Mr Saurine Puppet applause operator", alt: "Mr Saurine as a puppet-applause meter operator holding a tiny applause gauge", caption: "A bold plan with no budget and three pencils." },
  { id: 385, src: '/saurine-385-school-radio-jingle-composer.jpg', name: "Mr Saurine Jingle composer", alt: "Mr Saurine as a school-radio jingle composer with a small keyboard and music notes", caption: "He has called a committee. It is just him." },
  { id: 386, src: '/saurine-386-microphone-echo-translator.jpg', name: "Mr Saurine Microphone echo translator", alt: "Mr Saurine as a microphone-echo translator wearing headphones beside a tiny microphone", caption: "The paperwork is winning, but only narrowly." },
  { id: 387, src: '/saurine-387-documentary-narrator.jpg', name: "Mr Saurine Documentary narrator", alt: "Mr Saurine as a documentary narrator speaking into a microphone with a dramatic look", caption: "Please allow 3–5 school days for a ruling." },
  { id: 388, src: '/saurine-388-school-news-graphic-designer.jpg', name: "Mr Saurine News graphic designer", alt: "Mr Saurine as a school-news graphic designer arranging blank colorful cards", caption: "He insists this is on the timetable." },
  { id: 389, src: '/saurine-389-magic-show-volunteer-coordinator.jpg', name: "Mr Saurine Magic-show coordinator", alt: "Mr Saurine as a magic-show volunteer coordinator presenting an empty top hat", caption: "One tiny task. A surprisingly large badge." },
  { id: 390, src: '/saurine-390-puppet-costume-tailor.jpg', name: "Mr Saurine Puppet tailor", alt: "Mr Saurine as a puppet-costume tailor measuring a friendly sock puppet", caption: "The glasses say expert; the prop says otherwise." },
  { id: 391, src: '/saurine-391-silent-film-title-card-painter.jpg', name: "Mr Saurine Title-card painter", alt: "Mr Saurine as a silent-film title-card painter with a brush and blank card", caption: "A serious briefing about a deeply unserious matter." },
  { id: 392, src: '/saurine-392-school-bell-remix-producer.jpg', name: "Mr Saurine Bell remix producer", alt: "Mr Saurine as a school-bell remix producer mixing a tiny turntable and desk bell", caption: "The minutes will be circulated to the entire corridor." },
  { id: 393, src: '/saurine-393-assembly-lighting-technician.jpg', name: "Mr Saurine Assembly lighting tech", alt: "Mr Saurine as an assembly-lighting technician checking a tiny spotlight", caption: "He has prepared a chart. There will be a chart." },
  { id: 394, src: '/saurine-394-stage-left-mapmaker.jpg', name: "Mr Saurine Stage-left mapmaker", alt: "Mr Saurine as a stage-left mapmaker holding a tiny theatre floor plan", caption: "Nobody asked for an audit. The audit is here." },
  { id: 395, src: '/saurine-395-drama-club-sound-effects-foley.jpg', name: "Mr Saurine Sound-effects artist", alt: "Mr Saurine as a drama-club sound-effects artist holding a coconut shell and tiny bell", caption: "A new department has been created for this." },
  { id: 396, src: '/saurine-396-paper-crown-costume-director.jpg', name: "Mr Saurine Paper-crown director", alt: "Mr Saurine as a paper-crown costume director with a stack of handmade crowns", caption: "The whistle is decorative. The authority is not." },
  { id: 397, src: '/saurine-397-school-portrait-expression-coach.jpg', name: "Mr Saurine Expression coach", alt: "Mr Saurine as a school-portrait expression coach demonstrating a very official smile", caption: "The situation is under review by one man." },
  { id: 398, src: '/saurine-398-recess-playback-commentator.jpg', name: "Mr Saurine Playback commentator", alt: "Mr Saurine as a recess-playback commentator with a tiny instant camera", caption: "There are forms for this. Of course there are." },
  { id: 399, src: '/saurine-399-school-musical-ticket-tearer.jpg', name: "Mr Saurine Ticket taker", alt: "Mr Saurine as a school-musical ticket taker holding a roll of tiny blank tickets", caption: "He has named the folder. Twice." },
  { id: 400, src: '/saurine-400-end-credits-lettering-artist.jpg', name: "Mr Saurine End-credits artist", alt: "Mr Saurine as an end-credits lettering artist painting a blank board", caption: "Recess is pending final approval." },
  { id: 401, src: '/saurine-401-marble-championship-umpire.jpg', name: "Mr Saurine Marble umpire", alt: "Mr Saurine as a marble-championship umpire inspecting a tiny marble track", caption: "This meeting could have been a sticky note." },
  { id: 402, src: '/saurine-402-paper-airplane-long-jump-judge.jpg', name: "Mr Saurine Paper-plane judge", alt: "Mr Saurine as a paper-airplane long-jump judge measuring a flight", caption: "Officially in charge of one very small thing." },
  { id: 403, src: '/saurine-403-table-football-transfer-referee.jpg', name: "Mr Saurine Table-football referee", alt: "Mr Saurine as a table-football transfer referee with a tiny whistle and player", caption: "The clipboard has requested its own office." },
  { id: 404, src: '/saurine-404-jigsaw-speed-skating-coach.jpg', name: "Mr Saurine Jigsaw skating coach", alt: "Mr Saurine as a jigsaw speed-skating coach holding a puzzle piece and stopwatch", caption: "A bold plan with no budget and three pencils." },
  { id: 405, src: '/saurine-405-spelling-bee-ring-announcer.jpg', name: "Mr Saurine Spelling-bee announcer", alt: "Mr Saurine as a spelling-bee ring announcer holding a tiny microphone and blank scorecard", caption: "He has called a committee. It is just him." },
  { id: 406, src: '/saurine-406-recess-tug-of-war-strategist.jpg', name: "Mr Saurine Tug-of-war strategist", alt: "Mr Saurine as a recess tug-of-war strategist with a small rope and clipboard", caption: "The paperwork is winning, but only narrowly." },
  { id: 407, src: '/saurine-407-miniature-croquet-course-planner.jpg', name: "Mr Saurine Croquet planner", alt: "Mr Saurine as a miniature-croquet course planner holding a tiny mallet", caption: "Please allow 3–5 school days for a ruling." },
  { id: 408, src: '/saurine-408-boardgame-rule-appeals-court.jpg', name: "Mr Saurine Rule appeals judge", alt: "Mr Saurine as a board-game rule appeals judge weighing a pair of dice", caption: "He insists this is on the timetable." },
  { id: 409, src: '/saurine-409-school-yard-hopscotch-statistician.jpg', name: "Mr Saurine Hopscotch statistician", alt: "Mr Saurine as a hopscotch statistician studying a colorful chalk grid", caption: "One tiny task. A surprisingly large badge." },
  { id: 410, src: '/saurine-410-beanbag-trajectory-coach.jpg', name: "Mr Saurine Beanbag trajectory coach", alt: "Mr Saurine as a beanbag trajectory coach holding a beanbag and protractor", caption: "The glasses say expert; the prop says otherwise." },
  { id: 411, src: '/saurine-411-classroom-chair-racing-steward.jpg', name: "Mr Saurine Chair-racing steward", alt: "Mr Saurine as a classroom-chair racing steward beside a tiny safe toy chair", caption: "A serious briefing about a deeply unserious matter." },
  { id: 412, src: '/saurine-412-quiz-buzzer-tuning-specialist.jpg', name: "Mr Saurine Quiz-buzzer tuner", alt: "Mr Saurine as a quiz-buzzer tuning specialist examining a colorful buzzer", caption: "The minutes will be circulated to the entire corridor." },
  { id: 413, src: '/saurine-413-paper-clip-shotput-official.jpg', name: "Mr Saurine Paperclip shot-put official", alt: "Mr Saurine as a paperclip shot-put official measuring a tiny paperclip launch", caption: "He has prepared a chart. There will be a chart." },
  { id: 414, src: '/saurine-414-desk-tennis-commentator.jpg', name: "Mr Saurine Desk-tennis commentator", alt: "Mr Saurine as a desk-tennis commentator beside a tiny ping-pong paddle", caption: "Nobody asked for an audit. The audit is here." },
  { id: 415, src: '/saurine-415-school-cross-country-snack-captain.jpg', name: "Mr Saurine Snack captain", alt: "Mr Saurine as a school cross-country snack captain holding a tiny water bottle", caption: "A new department has been created for this." },
  { id: 416, src: '/saurine-416-timetable-tetris-champion.jpg', name: "Mr Saurine Timetable Tetris champion", alt: "Mr Saurine as a timetable Tetris champion arranging colorful schedule blocks", caption: "The whistle is decorative. The authority is not." },
  { id: 417, src: '/saurine-417-classroom-bingo-caller.jpg', name: "Mr Saurine Bingo caller", alt: "Mr Saurine as a classroom-bingo caller holding a tiny numbered ball", caption: "The situation is under review by one man." },
  { id: 418, src: '/saurine-418-recess-weather-timeout-referee.jpg', name: "Mr Saurine Weather timeout referee", alt: "Mr Saurine as a recess-weather timeout referee with an umbrella and whistle", caption: "There are forms for this. Of course there are." },
  { id: 419, src: '/saurine-419-rubber-band-elasticity-judge.jpg', name: "Mr Saurine Elasticity judge", alt: "Mr Saurine as a rubber-band elasticity judge measuring a harmless tiny rubber band", caption: "He has named the folder. Twice." },
  { id: 420, src: '/saurine-420-gold-star-ceremony-director.jpg', name: "Mr Saurine Gold-star director", alt: "Mr Saurine as a gold-star ceremony director presenting an oversized paper star", caption: "Recess is pending final approval." },
  { id: 421, src: '/saurine-421-lost-and-found-airport-controller.jpg', name: "Mr Saurine Airport controller", alt: "Mr Saurine as a lost-and-found airport controller beside a miniature suitcase", caption: "This meeting could have been a sticky note." },
  { id: 422, src: '/saurine-422-school-bus-window-seat-diplomat.jpg', name: "Mr Saurine Window-seat diplomat", alt: "Mr Saurine as a school-bus window-seat diplomat holding a tiny seat map", caption: "Officially in charge of one very small thing." },
  { id: 423, src: '/saurine-423-corridor-expedition-cartographer.jpg', name: "Mr Saurine Corridor cartographer", alt: "Mr Saurine as a corridor-expedition cartographer drawing a map of a school hallway", caption: "The clipboard has requested its own office." },
  { id: 424, src: '/saurine-424-library-return-slot-ship-captain.jpg', name: "Mr Saurine Return-slot captain", alt: "Mr Saurine as a library return-slot ship captain steering a tiny cardboard ship", caption: "A bold plan with no budget and three pencils." },
  { id: 425, src: '/saurine-425-museum-audio-tour-navigator.jpg', name: "Mr Saurine Audio-tour navigator", alt: "Mr Saurine as a museum audio-tour navigator wearing headphones and holding a small map", caption: "He has called a committee. It is just him." },
  { id: 426, src: '/saurine-426-classroom-time-zone-consultant.jpg', name: "Mr Saurine Time-zone consultant", alt: "Mr Saurine as a classroom time-zone consultant comparing tiny clocks", caption: "The paperwork is winning, but only narrowly." },
  { id: 427, src: '/saurine-427-imaginary-train-platform-announcer.jpg', name: "Mr Saurine Platform announcer", alt: "Mr Saurine as an imaginary-train platform announcer beside a small station sign", caption: "Please allow 3–5 school days for a ruling." },
  { id: 428, src: '/saurine-428-field-trip-backpack-packmaster.jpg', name: "Mr Saurine Backpack packmaster", alt: "Mr Saurine as a field-trip backpack packmaster with an oversized checklist", caption: "He insists this is on the timetable." },
  { id: 429, src: '/saurine-429-pencil-case-expedition-guide.jpg', name: "Mr Saurine Pencil-case guide", alt: "Mr Saurine as a pencil-case expedition guide peering into a colorful pencil pouch", caption: "One tiny task. A surprisingly large badge." },
  { id: 430, src: '/saurine-430-desk-island-ferry-operator.jpg', name: "Mr Saurine Desk-island ferry operator", alt: "Mr Saurine as a desk-island ferry operator beside a tiny paper boat", caption: "The glasses say expert; the prop says otherwise." },
  { id: 431, src: '/saurine-431-classroom-window-ship-spotter.jpg', name: "Mr Saurine Ship spotter", alt: "Mr Saurine as a classroom-window ship spotter with binoculars and a paper horizon", caption: "A serious briefing about a deeply unserious matter." },
  { id: 432, src: '/saurine-432-school-map-folding-champion.jpg', name: "Mr Saurine Map-folding champion", alt: "Mr Saurine as a school-map folding champion wrestling gently with an oversized map", caption: "The minutes will be circulated to the entire corridor." },
  { id: 433, src: '/saurine-433-staffroom-souvenir-shop-owner.jpg', name: "Mr Saurine Souvenir shop owner", alt: "Mr Saurine as a staffroom souvenir-shop owner displaying tiny school souvenirs", caption: "He has prepared a chart. There will be a chart." },
  { id: 434, src: '/saurine-434-hallway-roundabout-traffic-poet.jpg', name: "Mr Saurine Roundabout traffic poet", alt: "Mr Saurine as a hallway-roundabout traffic poet with a small model traffic circle", caption: "Nobody asked for an audit. The audit is here." },
  { id: 435, src: '/saurine-435-bus-stop-cloud-concierge.jpg', name: "Mr Saurine Cloud concierge", alt: "Mr Saurine as a bus-stop cloud concierge holding a tiny umbrella and cloud chart", caption: "A new department has been created for this." },
  { id: 436, src: '/saurine-436-geography-globe-spin-referee.jpg', name: "Mr Saurine Globe-spin referee", alt: "Mr Saurine as a geography-globe spin referee with a tiny whistle and globe", caption: "The whistle is decorative. The authority is not." },
  { id: 437, src: '/saurine-437-lost-mitten-expedition-leader.jpg', name: "Mr Saurine Mitten expedition leader", alt: "Mr Saurine as a lost-mitten expedition leader holding one mitten like a flag", caption: "The situation is under review by one man." },
  { id: 438, src: '/saurine-438-school-gate-arrival-orchestrator.jpg', name: "Mr Saurine Arrival orchestrator", alt: "Mr Saurine as a school-gate arrival orchestrator conducting a morning queue", caption: "There are forms for this. Of course there are." },
  { id: 439, src: '/saurine-439-lunchbox-travel-document-inspector.jpg', name: "Mr Saurine Lunchbox inspector", alt: "Mr Saurine as a lunchbox travel-document inspector checking a tiny lunchbox passport", caption: "He has named the folder. Twice." },
  { id: 440, src: '/saurine-440-final-bell-platform-manager.jpg', name: "Mr Saurine Bell platform manager", alt: "Mr Saurine as a final-bell platform manager beside a station clock", caption: "Recess is pending final approval." },
  { id: 441, src: '/saurine-441-class-pet-press-secretary.jpg', name: "Mr Saurine Class-pet press secretary", alt: "Mr Saurine as a class-pet press secretary holding a tiny microphone beside a friendly plush guinea pig", caption: "This meeting could have been a sticky note." },
  { id: 442, src: '/saurine-442-worm-farm-retirement-planner.jpg', name: "Mr Saurine Worm-farm planner", alt: "Mr Saurine as a worm-farm retirement planner beside a small garden tray", caption: "Officially in charge of one very small thing." },
  { id: 443, src: '/saurine-443-school-garden-seedling-bodyguard.jpg', name: "Mr Saurine Seedling bodyguard", alt: "Mr Saurine as a school-garden seedling bodyguard with a tiny plant shield", caption: "The clipboard has requested its own office." },
  { id: 444, src: '/saurine-444-butterfly-wing-weather-reader.jpg', name: "Mr Saurine Butterfly weather reader", alt: "Mr Saurine as a butterfly-wing weather reader with a chart and friendly paper butterflies", caption: "A bold plan with no budget and three pencils." },
  { id: 445, src: '/saurine-445-pigeon-courtyard-diplomat.jpg', name: "Mr Saurine Pigeon diplomat", alt: "Mr Saurine as a pigeon-courtyard diplomat offering a tiny peace flag to a toy pigeon", caption: "He has called a committee. It is just him." },
  { id: 446, src: '/saurine-446-classroom-cactus-counsellor.jpg', name: "Mr Saurine Cactus counsellor", alt: "Mr Saurine as a classroom-cactus counsellor listening carefully to a tiny potted cactus", caption: "The paperwork is winning, but only narrowly." },
  { id: 447, src: '/saurine-447-goldfish-homework-interpreter.jpg', name: "Mr Saurine Goldfish interpreter", alt: "Mr Saurine as a goldfish-homework interpreter beside a small fishbowl and notepad", caption: "Please allow 3–5 school days for a ruling." },
  { id: 448, src: '/saurine-448-garden-gnome-neighbourhood-watch.jpg', name: "Mr Saurine Gnome neighbourhood watch", alt: "Mr Saurine as a garden-gnome neighbourhood watch captain beside a tiny gnome", caption: "He insists this is on the timetable." },
  { id: 449, src: '/saurine-449-bee-hotel-booking-agent.jpg', name: "Mr Saurine Bee hotel booking agent", alt: "Mr Saurine as a bee-hotel booking agent holding a reservation chart beside a colorful bee hotel", caption: "One tiny task. A surprisingly large badge." },
  { id: 450, src: '/saurine-450-schoolyard-squirrel-committee-clerk.jpg', name: "Mr Saurine Squirrel committee clerk", alt: "Mr Saurine as a schoolyard-squirrel committee clerk beside a friendly plush squirrel", caption: "The glasses say expert; the prop says otherwise." },
  { id: 451, src: '/saurine-451-sunflower-height-complaints-officer.jpg', name: "Mr Saurine Sunflower complaints officer", alt: "Mr Saurine as a sunflower-height complaints officer measuring an enormous sunflower", caption: "A serious briefing about a deeply unserious matter." },
  { id: 452, src: '/saurine-452-fern-leaf-hair-stylist.jpg', name: "Mr Saurine Fern stylist", alt: "Mr Saurine as a fern-leaf stylist presenting a tiny leafy arrangement", caption: "The minutes will be circulated to the entire corridor." },
  { id: 453, src: '/saurine-453-pond-duck-attendance-taker.jpg', name: "Mr Saurine Duck attendance taker", alt: "Mr Saurine as a pond-duck attendance taker with a clipboard and friendly yellow ducks", caption: "He has prepared a chart. There will be a chart." },
  { id: 454, src: '/saurine-454-garden-snail-postal-worker.jpg', name: "Mr Saurine Snail postal worker", alt: "Mr Saurine as a garden-snail postal worker holding a tiny letter and mailbox", caption: "Nobody asked for an audit. The audit is here." },
  { id: 455, src: '/saurine-455-bird-nest-architecture-reviewer.jpg', name: "Mr Saurine Nest architecture reviewer", alt: "Mr Saurine as a bird-nest architecture reviewer examining a tiny woven nest", caption: "A new department has been created for this." },
  { id: 456, src: '/saurine-456-schoolyard-ant-canteen-manager.jpg', name: "Mr Saurine Ant canteen manager", alt: "Mr Saurine as a schoolyard-ant canteen manager beside a tiny picnic crumb", caption: "The whistle is decorative. The authority is not." },
  { id: 457, src: '/saurine-457-class-pet-pillow-fluffer.jpg', name: "Mr Saurine Pet pillow fluffer", alt: "Mr Saurine as a class-pet pillow fluffer arranging a soft cushion for a plush hamster", caption: "The situation is under review by one man." },
  { id: 458, src: '/saurine-458-plant-pot-diplomatic-attache.jpg', name: "Mr Saurine Plant-pot attache", alt: "Mr Saurine as a plant-pot diplomatic attaché presenting a tiny potted plant", caption: "There are forms for this. Of course there are." },
  { id: 459, src: '/saurine-459-ladybird-spots-counter.jpg', name: "Mr Saurine Ladybird spots counter", alt: "Mr Saurine as a ladybird-spots counter examining a friendly toy ladybird", caption: "He has named the folder. Twice." },
  { id: 460, src: '/saurine-460-garden-hose-knot-negotiator.jpg', name: "Mr Saurine Hose-knot negotiator", alt: "Mr Saurine as a garden-hose knot negotiator patiently untangling a coiled hose", caption: "Recess is pending final approval." },
  { id: 461, src: '/saurine-461-clipboard-clipboard-registry-director.jpg', name: "Mr Saurine Clipboard registry director", alt: "Mr Saurine as a clipboard registry director cataloging several tiny clipboards", caption: "This meeting could have been a sticky note." },
  { id: 462, src: '/saurine-462-meeting-minutes-haiku-transcriber.jpg', name: "Mr Saurine Minutes haiku transcriber", alt: "Mr Saurine as a meeting-minutes haiku transcriber writing beside an empty chair", caption: "Officially in charge of one very small thing." },
  { id: 463, src: '/saurine-463-emergency-scone-procurement-officer.jpg', name: "Mr Saurine Scone procurement officer", alt: "Mr Saurine as an emergency-scone procurement officer holding a tiny scone requisition", caption: "The clipboard has requested its own office." },
  { id: 464, src: '/saurine-464-corridor-echo-complaints-ombudsman.jpg', name: "Mr Saurine Echo ombudsman", alt: "Mr Saurine as a corridor-echo complaints ombudsman testing a small sound meter", caption: "A bold plan with no budget and three pencils." },
  { id: 465, src: '/saurine-465-staffroom-mug-name-investigator.jpg', name: "Mr Saurine Mug-name investigator", alt: "Mr Saurine as a staffroom-mug name investigator inspecting a shelf of blank mugs", caption: "He has called a committee. It is just him." },
  { id: 466, src: '/saurine-466-school-clock-five-minute-review-panel.jpg', name: "Mr Saurine Five-minute review panel", alt: "Mr Saurine as a school-clock review-panel chair comparing two small clocks", caption: "The paperwork is winning, but only narrowly." },
  { id: 467, src: '/saurine-467-paperwork-paperweight-inventor.jpg', name: "Mr Saurine Paperweight inventor", alt: "Mr Saurine as a paperwork paperweight inventor presenting an oddly shaped paperweight", caption: "Please allow 3–5 school days for a ruling." },
  { id: 468, src: '/saurine-468-question-mark-permit-issuer.jpg', name: "Mr Saurine Question-mark permit issuer", alt: "Mr Saurine as a question-mark permit issuer stamping a stack of blank forms", caption: "He insists this is on the timetable." },
  { id: 469, src: '/saurine-469-emergency-confetti-containment-chief.jpg', name: "Mr Saurine Confetti containment chief", alt: "Mr Saurine as an emergency-confetti containment chief with a tiny dustpan", caption: "One tiny task. A surprisingly large badge." },
  { id: 470, src: '/saurine-470-room-temperature-opinion-consultant.jpg', name: "Mr Saurine Room-temperature consultant", alt: "Mr Saurine as a room-temperature opinion consultant consulting a tiny thermometer", caption: "The glasses say expert; the prop says otherwise." },
  { id: 471, src: '/saurine-471-spare-chair-deployment-planner.jpg', name: "Mr Saurine Spare-chair planner", alt: "Mr Saurine as a spare-chair deployment planner mapping miniature classroom chairs", caption: "A serious briefing about a deeply unserious matter." },
  { id: 472, src: '/saurine-472-staffroom-biscuit-queue-philosopher.jpg', name: "Mr Saurine Biscuit-queue philosopher", alt: "Mr Saurine as a staffroom biscuit-queue philosopher holding one biscuit and a notebook", caption: "The minutes will be circulated to the entire corridor." },
  { id: 473, src: '/saurine-473-announcement-pronunciation-adjudicator.jpg', name: "Mr Saurine Pronunciation adjudicator", alt: "Mr Saurine as an announcement-pronunciation adjudicator holding a tiny microphone", caption: "He has prepared a chart. There will be a chart." },
  { id: 474, src: '/saurine-474-emergency-paperclip-forecasting-bureau.jpg', name: "Mr Saurine Paperclip forecast bureau", alt: "Mr Saurine as an emergency-paperclip forecasting official pointing at a chart of paperclips", caption: "Nobody asked for an audit. The audit is here." },
  { id: 475, src: '/saurine-475-school-supply-supply-chain-auditor.jpg', name: "Mr Saurine Supply-chain auditor", alt: "Mr Saurine as a school-supply supply-chain auditor surrounded by tiny boxes of pencils", caption: "A new department has been created for this." },
  { id: 476, src: '/saurine-476-very-small-problem-escalation-manager.jpg', name: "Mr Saurine Escalation manager", alt: "Mr Saurine as a very-small-problem escalation manager reviewing a huge tiny-problem chart", caption: "The whistle is decorative. The authority is not." },
  { id: 477, src: '/saurine-477-backup-plan-for-backup-plan-coordinator.jpg', name: "Mr Saurine Backup-plan coordinator", alt: "Mr Saurine as a backup-plan coordinator holding a backup clipboard behind another clipboard", caption: "The situation is under review by one man." },
  { id: 478, src: '/saurine-478-official-official-stamp-approver.jpg', name: "Mr Saurine Stamp approver", alt: "Mr Saurine as an official stamp approver carefully reviewing a blank stamp", caption: "There are forms for this. Of course there are." },
  { id: 479, src: '/saurine-479-staffroom-teaspoon-allocation-board-chair.jpg', name: "Mr Saurine Teaspoon board chair", alt: "Mr Saurine as a staffroom-teaspoon allocation board chair counting tiny spoons", caption: "He has named the folder. Twice." },
  { id: 480, src: '/saurine-480-end-of-day-lost-property-mayor.jpg', name: "Mr Saurine Lost-property mayor", alt: "Mr Saurine as an end-of-day lost-property mayor wearing a small ceremonial sash", caption: "Recess is pending final approval." },
  { id: 481, src: '/saurine-481-birthday-candle-fire-marshal.jpg', name: "Mr Saurine Candle fire marshal", alt: "Mr Saurine as a birthday-candle fire marshal checking a tiny unlit candle", caption: "This meeting could have been a sticky note." },
  { id: 482, src: '/saurine-482-paper-chain-length-surveyor.jpg', name: "Mr Saurine Paper-chain surveyor", alt: "Mr Saurine as a paper-chain length surveyor measuring an enormous colorful paper chain", caption: "Officially in charge of one very small thing." },
  { id: 483, src: '/saurine-483-school-fete-prize-wrapping-advisor.jpg', name: "Mr Saurine Prize-wrapping advisor", alt: "Mr Saurine as a school-fete prize-wrapping advisor inspecting a tiny wrapped box", caption: "The clipboard has requested its own office." },
  { id: 484, src: '/saurine-484-seasonal-decoration-box-archaeologist.jpg', name: "Mr Saurine Decoration-box archaeologist", alt: "Mr Saurine as a seasonal-decoration box archaeologist excavating colorful decorations", caption: "A bold plan with no budget and three pencils." },
  { id: 485, src: '/saurine-485-thank-you-card-signature-authenticator.jpg', name: "Mr Saurine Signature authenticator", alt: "Mr Saurine as a thank-you-card signature authenticator examining a blank card", caption: "He has called a committee. It is just him." },
  { id: 486, src: '/saurine-486-trophy-cabinet-dust-weathercaster.jpg', name: "Mr Saurine Trophy dust weathercaster", alt: "Mr Saurine as a trophy-cabinet dust weathercaster with a tiny duster and forecast chart", caption: "The paperwork is winning, but only narrowly." },
  { id: 487, src: '/saurine-487-assembly-balloon-height-licensing-officer.jpg', name: "Mr Saurine Balloon height officer", alt: "Mr Saurine as an assembly-balloon height licensing officer measuring a floating balloon", caption: "Please allow 3–5 school days for a ruling." },
  { id: 488, src: '/saurine-488-school-fair-ringmaster-of-queues.jpg', name: "Mr Saurine Queue ringmaster", alt: "Mr Saurine as a school-fair queue ringmaster directing a winding line with a tiny baton", caption: "He insists this is on the timetable." },
  { id: 489, src: '/saurine-489-last-slice-cake-allocation-mediator.jpg', name: "Mr Saurine Cake-slice mediator", alt: "Mr Saurine as a last-slice cake allocation mediator presenting one tiny slice", caption: "One tiny task. A surprisingly large badge." },
  { id: 490, src: '/saurine-490-mystery-wrapped-present-investigator.jpg', name: "Mr Saurine Present investigator", alt: "Mr Saurine as a mystery-wrapped present investigator using a magnifier on a small gift", caption: "The glasses say expert; the prop says otherwise." },
  { id: 491, src: '/saurine-491-school-photo-background-curator.jpg', name: "Mr Saurine Photo background curator", alt: "Mr Saurine as a school-photo background curator comparing colorful blank backdrops", caption: "A serious briefing about a deeply unserious matter." },
  { id: 492, src: '/saurine-492-graduation-hat-angle-consultant.jpg', name: "Mr Saurine Hat-angle consultant", alt: "Mr Saurine as a graduation-hat angle consultant adjusting a tiny paper cap", caption: "The minutes will be circulated to the entire corridor." },
  { id: 493, src: '/saurine-493-confetti-recycling-supervisor.jpg', name: "Mr Saurine Confetti recycling supervisor", alt: "Mr Saurine as a confetti recycling supervisor sorting a few colorful paper squares", caption: "He has prepared a chart. There will be a chart." },
  { id: 494, src: '/saurine-494-school-fete-ticket-stub-collector.jpg', name: "Mr Saurine Ticket-stub collector", alt: "Mr Saurine as a school-fete ticket-stub collector organizing tiny blank tickets", caption: "Nobody asked for an audit. The audit is here." },
  { id: 495, src: '/saurine-495-seasonal-sweater-pattern-arbitrator.jpg', name: "Mr Saurine Sweater-pattern arbitrator", alt: "Mr Saurine as a seasonal-sweater pattern arbitrator comparing silly knit patterns", caption: "A new department has been created for this." },
  { id: 496, src: '/saurine-496-paper-lantern-stability-engineer.jpg', name: "Mr Saurine Lantern engineer", alt: "Mr Saurine as a paper-lantern stability engineer inspecting a small colorful lantern", caption: "The whistle is decorative. The authority is not." },
  { id: 497, src: '/saurine-497-end-of-term-cake-inscription-editor.jpg', name: "Mr Saurine Cake inscription editor", alt: "Mr Saurine as an end-of-term cake inscription editor holding an icing pen by a blank cake", caption: "The situation is under review by one man." },
  { id: 498, src: '/saurine-498-school-fair-duck-pond-accountant.jpg', name: "Mr Saurine Duck-pond accountant", alt: "Mr Saurine as a school-fair duck-pond accountant counting friendly toy ducks", caption: "There are forms for this. Of course there are." },
  { id: 499, src: '/saurine-499-ceremonial-scissors-opening-director.jpg', name: "Mr Saurine Scissors opening director", alt: "Mr Saurine as a ceremonial-scissors opening director holding oversized blunt craft scissors", caption: "He has named the folder. Twice." },
  { id: 500, src: '/saurine-500-final-sighting-stamp-collector.jpg', name: "Mr Saurine Final sighting collector", alt: "Mr Saurine as a final-sighting stamp collector presenting a tiny blank album", caption: "Recess is pending final approval." },
] satisfies ReadonlyArray<NumberedPortrait>;
const allArchivePortraits = [
  ...archivePortraits,
  ...extendedArchivePortraits,
  ...newArchivePortraits.map((portrait) => ({
    ...portrait,
    alt: portrait.alt.startsWith('Mr Saurine')
      ? portrait.alt
      : `Mr Saurine as ${portrait.alt}`,
    caption: portrait.caption.trim(),
  })),
  ...newestArchivePortraits,
  ...finalArchivePortraits,
];
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
  const [archiveQuery, setArchiveQuery] = useState('');
  const activePortrait = allPortraits[activeIndex];
  const visibleArchivePortraits = allArchivePortraits.filter((portrait) =>
    `${portrait.name} ${portrait.caption}`
      .toLowerCase()
      .includes(archiveQuery.trim().toLowerCase()),
  );

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
        <a className="brand" href="#home" aria-label="The Saurine Chronicle home">
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
            <strong>THE SAURINE</strong>
            <em>CHRONICLE · UNOFFICIAL</em>
          </span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a className="nav-link active" href="#home">
            Front page
          </a>
          <a className="nav-link" href="#moments">
            Sightings
          </a>
          <a className="nav-link" href="#archive">
            Archive
          </a>
          <a className="nav-link nav-button" href="#wall">
            Pick a face <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <h1>
            Mr Saurine.
            <span>Everywhere.</span>
          </h1>
          <p className="hero-lede">
            Same teacher. Different hats. An unofficial field guide to the
            many faces of Mr Saurine.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={deployAnotherSaurine}>
              Send another Saurine <span aria-hidden="true">↗</span>
            </button>
            <a className="text-link" href="#moments">
              Read the sightings <span aria-hidden="true">↓</span>
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
          <p className="section-number">01 / Recent sightings</p>
          <h2>A few notable sightings</h2>
          <p>
            Filed by absolutely nobody. Remembered by everyone in the room.
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
            <p className="section-number">02 / Choose a portrait</p>
            <h2>Pick your Saurine.</h2>
          </div>
          <p>One click puts your favourite on the front page.</p>
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
            <p className="section-number">03 / The complete record</p>
            <h2>Five hundred sightings.</h2>
          </div>
          <p>Five hundred portraits. One very recognisable pair of glasses.</p>
        </div>

        <div className="archive-tools">
          <label className="archive-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={archiveQuery}
              onChange={(event) => setArchiveQuery(event.target.value)}
              placeholder="Search the archive"
              aria-label="Search the Saurine portrait archive"
            />
            {archiveQuery && (
              <button type="button" onClick={() => setArchiveQuery('')} aria-label="Clear search">
                ×
              </button>
            )}
          </label>
          <p className="archive-count" aria-live="polite">
            Showing {visibleArchivePortraits.length} of {allArchivePortraits.length} portraits
          </p>
        </div>

        <div className="archive-grid" role="group" aria-label="Five hundred Mr Saurine portraits">
          {visibleArchivePortraits.map((portrait) => {
            const index = allArchivePortraits.indexOf(portrait);
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
                <span className="archive-number">#{String(index + 1).padStart(3, '0')}</span>
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
        {visibleArchivePortraits.length === 0 && (
          <p className="archive-empty">No Saurines filed under that clue. Try another search.</p>
        )}
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
          <h2>That&apos;s the latest from the Saurine desk.</h2>
          <button className="button button-light" type="button" onClick={deployAnotherSaurine}>
            Add one more face <span aria-hidden="true">+</span>
          </button>
        </div>
        <span className="closing-doodle closing-star" aria-hidden="true">✦</span>
        <span className="closing-doodle closing-heart" aria-hidden="true">♡</span>
      </section>

      <footer className="footer">
        <span>THE SAURINE CHRONICLE</span>
        <span>Unofficial. Unreasonably well-documented.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
