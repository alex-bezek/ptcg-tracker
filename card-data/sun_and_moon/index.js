const guardiansRising = require('./guardiansRising');
const cosmicEclipse = require('./cosmicEclipse');

const SETS = {
  GUARDIANS_RISING: {
    code: 'sm2',
    totalCards: 145,
    name: "Guardians Rising",
    series: "Sun & Moon",
  },
  COSMIC_ECLIPSE: {
    code: 'sm12',
    totalCards: 236,
    name: "Cosmic Eclipse",
    series: "Sun & Moon",
  },
}
const cards = [
  ...guardiansRising.map(card => ({ ...card, set: SETS.GUARDIANS_RISING, })),
  ...cosmicEclipse.map(card => ({ ...card, set: SETS.COSMIC_ECLIPSE, })),
];

module.exports = cards;
