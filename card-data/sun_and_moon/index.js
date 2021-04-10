const guardiansRising = require('./guardiansRising');
const cosmicEclipse = require('./cosmicEclipse');
const hiddenFates = require('./hiddenFates');
const crimsonInvasion = require('./crimsonInvasion');
const promo = require('./promo');

const SETS = {
  GUARDIANS_RISING: {
    code: 'sm2',
    totalCards: 145,
    name: "Guardians Rising",
    series: "Sun & Moon",
  },
  CRIMSON_INVASION: {
    code: 'sm4',
    totalCards: 111,
    name: "Crimson Invasion",
    series: "Sun & Moon",
  },
  COSMIC_ECLIPSE: {
    code: 'sm12',
    totalCards: 236,
    name: "Cosmic Eclipse",
    series: "Sun & Moon",
  },
  HIDDEN_FATES: {
    code: 'sm115',
    totalCards: 68,
    name: "Hidden Fates",
    series: "Sun & Moon",
  },
  PROMO: {
    code: 'smp',
    totalCards: 74,
    name: "SM Black Star Promos",
    series: "Sun & Moon",
  },
}
const cards = [
  ...promo.map(card => ({ ...card, set: SETS.PROMO, })),
  ...guardiansRising.map(card => ({ ...card, set: SETS.GUARDIANS_RISING, })),
  ...cosmicEclipse.map(card => ({ ...card, set: SETS.COSMIC_ECLIPSE, })),
  ...hiddenFates.map(card => ({ ...card, set: SETS.HIDDEN_FATES, })),
  ...crimsonInvasion.map(card => ({ ...card, set: SETS.CRIMSON_INVASION, })),
];

module.exports = cards;
