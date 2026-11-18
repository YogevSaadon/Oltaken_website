import driftickIcon from '../assets/products/driftick/driftick-icon.svg';
// Previews: the Play Store phone screenshots (DT kit, play-store/3-phone-screenshots),
// resized to 720x1280 WebP for the web.
import driftickDay from '../assets/products/driftick/previews/phone-1-day.webp';
import driftickColors from '../assets/products/driftick/previews/phone-2-colors.webp';
import driftickWidget from '../assets/products/driftick/previews/phone-3-widget.webp';
import driftickBlocks from '../assets/products/driftick/previews/phone-4-blocks.webp';
import driftickTwoColors from '../assets/products/driftick/previews/phone-5-two-colors.webp';

const products = [
  {
    id: 'driftick',
    name: 'DrifTick',
    category: 'app',
    shortDescription: 'Visualize your day passing in real time. Built for focus.',
    // OWNER TEXT: "A simple, powerful way to stay aware of where your hours go" is generic.
    // Replace it when you have a line that says something only DrifTick does.
    fullDescription:
      'DrifTick lets you visually see the time of day as it passes. A simple, powerful way to stay aware of where your hours go. Set your work start time, wind-down hour, or when your day begins, and watch the clock fill as time moves forward. Perfect for anyone who struggles with time blindness or procrastination. Includes a home screen widget for a quick glance and a fullscreen mode to turn your phone or tablet into a clean desk clock. No accounts, no cloud, everything stays on your device.',
    icon: driftickIcon,
    storeUrl: '#',
    tags: ['Android', 'Free', 'Local Data', 'Widget'],
    // OWNER: paste the Google Group link for testers here. https only; it shows a "Join the test" button
    // until storeUrl is a real Play Store link, which then replaces it.
    testerUrl: '',
    status: 'testing', // 'testing' while in the closed test, 'live' once it's on Google Play
    featured: true,
    // Alt text follows each screenshot's caption.
    previews: [
      { src: driftickDay, alt: 'See your day fill up. See what is gone and what is left.' },
      { src: driftickColors, alt: 'Work, rest and sleep: each part of your day gets its own color.' },
      { src: driftickWidget, alt: 'On your home screen: a widget that fills as your day goes.' },
      { src: driftickBlocks, alt: 'Your day, your blocks: name them, then watch them pass.' },
      { src: driftickTwoColors, alt: 'Orange or blue: two looks, switch any time.' },
    ],
  },
  // Add more products here:
  // {
  //   id: 'your-game',
  //   name: 'Your Game',
  //   category: 'game',
  //   shortDescription: '...',
  //   fullDescription: '...',
  //   icon: importedIcon,
  //   storeUrl: 'https://play.google.com/store/apps/details?id=...',
  //   tags: ['Android', 'Free', 'Ads'],
  //   testerUrl: '',
  //   status: 'live',
  //   featured: true,
  //   previews: [{ src: importedScreenshot, alt: 'What the screenshot shows' }],
  // },
];

export default products;
