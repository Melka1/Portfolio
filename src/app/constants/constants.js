export const projects = [
  {
    title: 'Ethio Calendar',
    description:
      'An Ethiopian and Gregorian calendar app with 100+ downloads on Google Play, built on my ethio_greg_dual_calendar package. It shows both dates in every cell, marks all of Ethiopia’s public holidays, computes movable feasts like Fasika, and runs in English, Amharic, Afaan Oromoo and Tigrinya. Version 2 adds personal events that repeat by either calendar, reminders, and seasonal festival themes, with all data kept on the device.',
    image: '/images/ethio-calendar-feature.jpg',
    tags: ['Android', 'Flutter', 'Bloc'],
    visit: 'https://play.google.com/store/apps/details?id=com.melkatole1.dual_calendar',
    id: 10,
  },
  {
    title: 'GoJegna Workout Tracker',
    description:
      'A workout tracker for building and customizing training programs, logging strength, bodyweight, and cardio sessions, and reviewing progress with exercise charts, a workout calendar, and weekly summaries. It suggests next weights and reps, includes rest timers and exercise demo videos, and supports account-based cloud sync and sharing programs or workout sets. Jegna, its AI trainer, uses the Gemini API to build programs and coach from your training history, through a Cloud Functions proxy that keeps the API key off the device and enforces per-user quotas.',
    image: '/images/gojegna-card.jpg',
    tags: ['Android', 'Flutter', 'Gemini API', 'Firebase', 'Cloud Functions', 'Bloc'],
    visit: 'https://play.google.com/store/apps/details?id=com.melkatole1.getjacked',
    id: 9,
  },
  {
    title: 'Lideta Church App',
    description:
      'A church companion app with a Bible reader and search, daily verses with reading streaks, Bible study groups and courses, quizzes, worship songs, and audio and video resources. Members can also keep up with church news and events, receive notifications, and connect through chat and counseling features.',
    image: '/images/lideta-church-card.jpg',
    tags: ['Android', 'Flutter', 'Firebase', 'Cloud Messaging', 'Bloc'],
    visit: 'https://play.google.com/store/apps/details?id=com.lidetachurch.app',
    id: 8,
  },
  {
    title: 'Digital Wedding Invitation',
    description:
      'A client wedding site built around a digital RSVP card. Guests open an animated envelope, browse the story and gallery, then RSVP to receive a QR invitation. Behind it sit a live wall of guest messages and a scanner that validates each QR at the door to confirm the guest is cleared for the reception.',
    image: '/images/wedding.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase', 'Telegram Bot API'],
    // The guest message wall and QR check-in tool are deliberately not
    // linked — they hold real guest data and gate a real venue.
    visit: 'https://aben-and-tsega.qwiklo.com/',
    id: 7,
  },
  {
    title: 'PNDProperties',
    description:
      'This is a real estate website, created using Next.js and Tailwind CSS. It features a modern and responsive design, with a clean and intuitive user interface. The website is built using the latest web technologies and is optimized for performance and accessibility.',
    image: '/images/pndproperties.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    // Private client repo — omitting `source` renders View on its own
    // rather than linking to a GitHub 404.
    visit: 'https://pndproperties.com/',
    id: 6,
  },
  {
    title: 'Questionnaire App',
    description:
      'This project is made for fun and also to test my general knowledge of science through my website by using a free api for questions. Take the test and examine yours too!',
    image: '/images/quizzical.PNG',
    tags: ['React', 'API'],
    source: 'https://github.com/Melka1/Questionaire',
    visit: 'https://questionaire-eta.vercel.app/',
    id: 3,
  },
  {
    title: 'Netflix Clone',
    description:
      'Using React, Node.js, Express & MongoDB I learned how to build a Full Stack MERN Application - from start to finish. The App is called Netflix Clone and I tried to make it look like the original Netflix and also resemble the user experience.',
    image: '/images/netflix.jpg',
    tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/Melka1/netflix-clone',
    visit: 'https://netflix-clone-melka1.vercel.app/',
    id: 0,
  },
  {
    title: 'Airbnb Clone',
    description:
      "While building it I learned creating a database models and use authenticating users and getting and posting data from database using react's firebase module, that helps users make reservations and keep track of trip history, and also for the owner post properties.",
    image: '/images/airbnb.jpg',
    tags: ['React', 'Firebase', 'Next JS', 'TypeScript'],
    source: 'https://github.com/Melka1/airbnb-clone',
    visit: 'https://airbnb-clone-rust-xi.vercel.app/',
    id: 1,
  },
  {
    title: 'Spotify Clone',
    description:
      'This project made solely created by JS and jQuery, creating reusable components without the need of frameworks and modules. I build this to understand the core concept that happens behind the scene of major frameworks, it might not resemble the exact structure but could be extrapolated towards it.',
    image: '/images/spotify.jpg',
    tags: ['HTML', 'SASS', 'Javascript', 'jQuery'],
    source: 'https://github.com/Melka1/spotify-s-double',
    visit: 'https://melka1.github.io/spotify-s-double/',
    id: 2,
  },
  {
    title: 'GPT3 Landing page',
    description:
      'This is an ongoing project of creating fully developed gpt3 and Open AI access site. At this point, its only a landing page',
    image: '/images/gpt3.png',
    tags: ['React', 'CSS'],
    source: 'https://github.com/Melka1/react-gpt3',
    visit: 'https://react-gpt3-silk.vercel.app/',
    id: 4,
  },
  {
    title: 'Restaurant Landing Page',
    description:
      'Amazing design and client ready webpage for restaurants. Exploring my ability to convert a figma design in to full fledged webpage.',
    image: '/images/restaurant.jpg',
    tags: ['React', 'CSS'],
    source: 'https://github.com/Melka1/restaurant-landing-page',
    visit: 'https://restaurant-landing-page-indol.vercel.app/',
    id: 5,
  },
];

// Stats are a snapshot from pub.dev — refresh them when publishing a
// new version rather than fetching at runtime.
export const packages = [
  {
    name: 'ethio_greg_dual_calendar',
    version: '0.1.1',
    description:
      'A Flutter package for rendering dates and calendar interfaces in both the Ethiopian (Amete Mihret) and Gregorian systems. It handles accurate bidirectional conversion between the two, ships customizable month grid widgets, and localizes into English, Amharic and Afaan Oromoo — with the calendar and language both switchable at runtime.',
    install: 'flutter pub add ethio_greg_dual_calendar',
    platforms: ['Android', 'iOS', 'Web', 'macOS', 'Windows', 'Linux'],
    stats: [
      { label: 'Downloads / wk', value: '93' },
      { label: 'Pub points', value: '160' },
      { label: 'License', value: 'MIT' },
    ],
    visit: 'https://pub.dev/packages/ethio_greg_dual_calendar',
    source: 'https://github.com/melka1/ethio_calendar',
    id: 0,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey' },
  { year: 2018, text: 'Worked as a freelance developer' },
  { year: 2019, text: 'Founded JavaScript Mastery' },
  { year: 2020, text: 'Shared my projects with the world' },
  { year: 2021, text: 'Started my own platform' },
];
