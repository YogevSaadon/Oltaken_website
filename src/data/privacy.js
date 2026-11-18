import { COMPANY_NAME, CONTACT_EMAIL } from './site.js';

// Each policy is shown at #/privacy/<id> and, at build time, also written out as a plain
// HTML page at privacy-<id>.html (see plugins/static-privacy-pages.js). Edit it only here.
const privacyPolicies = {
  driftick: {
    appName: 'DrifTick',
    lastUpdated: 'November 2026',
    sections: [
      {
        title: 'Who we are',
        body: `DrifTick is developed and published by ${COMPANY_NAME}. ${COMPANY_NAME} is responsible for the app and for this policy. You can reach us at ${CONTACT_EMAIL}.`,
      },
      {
        title: 'What data does DrifTick collect?',
        body: 'DrifTick does not collect, store, or transmit personal data to us or to third parties. DrifTick does not use advertising SDKs, analytics services, or third-party backend services at this time.',
      },
      {
        title: 'Where is my data stored?',
        body: 'All app settings and data are stored locally on your device. Nothing is sent to our servers. The optional home screen widget reads only from local on-device storage.',
      },
      {
        title: 'Your choices',
        body: 'You can delete all app data at any time by clearing app storage in your device settings or by uninstalling DrifTick.',
      },
      {
        title: 'Changes',
        body: 'If this Privacy Policy changes, the updated version will be posted here with a revised "Last Updated" date.',
      },
    ],
  },
  // Add more product policies here:
  // 'your-game': {
  //   appName: 'Your Game',
  //   lastUpdated: 'November 2026',
  //   sections: [ ... ],
  // },
};

export default privacyPolicies;
