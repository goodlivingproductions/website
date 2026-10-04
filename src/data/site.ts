export const site = {
  name: 'Good Living Productions',
  shortName: 'Good Living',
  url: 'https://goodliving.productions',
  description:
    'Good Living Productions is a music production company focused on music production, mixing, mastering, live sound, education, and artist development.',

  navigation: [
    {
      label: 'Listen',
      href: '/listen/',
    },
    {
      label: 'Education',
      href: '/education/',
    },
    {
      label: 'About',
      href: '/about/',
    },
    {
      label: 'Contact',
      href: '/contact/',
    },
  ],

  contact: {
    email: 'hello@goodliving.productions',
  },

  social: {
    instagram: '',
    youtube: '',
    spotify: '',
  },
} as const;
