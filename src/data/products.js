import driftickIcon from '../assets/products/driftick/driftick-icon.webp';
import driftickApp1 from '../assets/products/driftick/previews/phone_app_1.webp';
import driftickApp2 from '../assets/products/driftick/previews/phone_app_2.webp';
import driftickWidget1 from '../assets/products/driftick/previews/phone_widget_1.webp';
import driftickWidget2 from '../assets/products/driftick/previews/phone_widget_2.webp';

const products = [
  {
    id: 'driftick',
    name: 'DriftTick',
    category: 'app',
    shortDescription: 'Visualize your day passing in real time. Built for focus, great for ADHD.',
    fullDescription:
      'DriftTick lets you visually see the time of day as it passes. A simple, powerful way to stay aware of where your hours go. Set your work start time, wind-down hour, or when your day begins, and watch the clock fill as time moves forward. Perfect for anyone who struggles with time blindness or procrastination, especially if you have ADHD. Includes a home screen widget for a quick glance and a fullscreen mode to turn your phone or tablet into a clean desk clock. No accounts, no cloud, everything stays on your device.',
    icon: driftickIcon,
    storeUrl: '#',
    tags: ['Android', 'Free', 'Local Data', 'Widget'],
    status: 'live',
    featured: true,
    previews: [driftickApp1, driftickApp2, driftickWidget1, driftickWidget2],
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
  //   status: 'live',
  //   featured: true,
  // },
];

export default products;
