// Single source of truth for business details and homepage content.
// Every fact below was read off thespaandstudioatmds.com on 2026-09-05.
// Nothing here is invented; open questions live in CONTENT-NEEDED.md.

export const site = {
  name: 'The Spa & Studio at MDS',
  shortName: 'MDS',
  // Their own homepage headline.
  tagline: 'A luxury day spa & hair studio',
  // Their homepage: "Formerly known as Makeup Design Studio and Day Spa".
  formerly: 'Formerly Makeup Design Studio and Day Spa',
  url: 'https://thespaandstudioatmds.com',
  phone: '(724) 708-5337',
  phoneHref: 'tel:+17247085337',
  email: 'makeupdesignstudiopgh@gmail.com',
  address: {
    street: '3935 Old William Penn Highway',
    city: 'Murrysville',
    state: 'PA',
    zip: '15668',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=3935+Old+William+Penn+Highway+Murrysville+PA+15668',
  // Their existing booking and gift-card stack is Phorest. The rebuild links
  // straight out to it rather than trying to replace it.
  bookingUrl: 'https://phorest.com/book/salons/thespaandstudioatmds',
  giftCardUrl: 'https://gift-cards.phorest.com/salons/thespaandstudioatmds',
  instagram: 'https://www.instagram.com/thespaandstudioatmds/',
};

// From the schema block on their current site. Sunday and Monday are 00:00-00:00,
// i.e. closed.
export const hours = [
  { day: 'Sunday', note: 'Closed' },
  { day: 'Monday', note: 'Closed' },
  { day: 'Tuesday', open: '9:00 AM', close: '8:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '8:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '8:00 PM' },
  { day: 'Friday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Saturday', open: '9:00 AM', close: '4:00 PM' },
];

export const hoursSchema = [
  { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '20:00' },
  { days: ['Friday'], opens: '09:00', closes: '17:00' },
  { days: ['Saturday'], opens: '09:00', closes: '16:00' },
];

// Lyndsie Hinch's own bio on their team page:
// "proud owner ... She most recently received the Style Week Pittsburgh Makeup
// Artist of the Year Award 2022!! She has been in the Beauty Industry for over
// 15 years and is a licensed cosmetologist, spray tan technician and skin care
// guru ... WeddingWire Couple's choice awards 7 years in a row".
export const owner = {
  name: 'Lyndsie Hinch',
  role: 'Owner and professional makeup artist',
  award: 'Style Week Pittsburgh Makeup Artist of the Year, 2022',
  years: 'Over 15 years in the beauty industry',
  licences: 'Licensed cosmetologist, spray tan technician and skin care specialist',
};

export const proof = [
  { figure: 'Makeup Artist of the Year', label: 'Style Week Pittsburgh, 2022' },
  { figure: '7 years running', label: "WeddingWire Couples' Choice awards" },
  { figure: '15+ years', label: 'Owner Lyndsie Hinch in the industry' },
  { figure: '3 treatment rooms', label: 'In a building we own and renovated' },
];

// The three spaces, exactly as their services page groups them.
export const spaces = [
  {
    name: 'The Spa',
    where: 'Upstairs',
    blurb:
      'Three treatment rooms, kept quiet and warm. Skin, massage, brows and hair removal.',
    image: '/images/spa.jpg',
    alt: 'The waiting lounge, with its electric fireplace and stone accent wall',
    services: [
      'Signature, ultimate and express facials',
      'HydraFacial, including acne, brightening and anti-aging',
      'Face Reality acne programme and chemical peels',
      'Swedish, deep tissue, hot stone and lymphatic massage',
      'Lash lifts, brow lamination, tinting and shaping',
      'Waxing and sugaring',
      'Makeup application and private makeup lessons',
    ],
  },
  {
    name: 'The Nail Lounge',
    where: 'Main floor',
    blurb: 'Manicures, pedicures and the hair chair, in the calmer half of the building.',
    image: '/images/hair.jpg',
    alt: 'A styling station: tan leather chair, arched mirror, black walls and pale wood floor',
    services: [
      'Gel, builder gel, Gel X and dip manicures',
      'Spa, Himalayan sea salt, seasonal and men’s pedicures',
      "Women's, men's and teen haircuts",
      'Colour, highlights and roots',
      'Brazilian blowout and the MDS signature blowout',
      'Tape-in extensions',
    ],
  },
  {
    name: 'The Studio',
    where: 'Lower level',
    blurb:
      'Darker, bolder, and the room you will not want to leave. Lashes and tanning.',
    image: '/images/studio.jpg',
    alt: 'The studio on the lower level, the darker of the two floors',
    services: [
      'Classic, hybrid and volume lash extensions',
      'Lash fills',
      'Organic, express, silk and mini spray tans',
    ],
  },
];

// Prices read off their bridal page.
export const bridal = [
  { item: 'Bridal preview', price: '110' },
  { item: 'Bridal makeup', price: '185' },
  { item: 'Bridal hair', price: '160' },
  { item: 'Wedding party makeup', price: '130' },
  { item: 'Wedding party hair', price: '130' },
  { item: 'Flower girl hair', price: '60 and up' },
];
