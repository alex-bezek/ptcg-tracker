const promo = require('./promo');
const roaringSkies = require('./roaringSkies');
const ancientOrigins = require('./ancientOrigins');
const breakthrough = require('./breakthrough');
const fatesCollide = require('./fatesCollide');
const evolutions = require('./evolutions');

const SETS = {
  PROMO: {
    code: 'xyp',
    totalCards: 183,
    name: "XY Black Star Promos",
    series: "XY",
  },
  ROARING_SKIES: {
    code: 'xy6',
    totalCards: 108,
    name: "Roaring Skies",
    series: "XY",
  },
  ANCIENT_ORIGINS: {
    code: 'xy7',
    totalCards: 98,
    name: "Ancient Origins",
    series: "XY",
  },
  BREAKTHROUGH: {
    code: 'xy8',
    totalCards: 162,
    name: "BREAKthrough",
    series: "XY",
  },
  FATES_COLLIDE: {
    code: 'xy10',
    totalCards: 124,
    name: "Fates Collide",
    series: "XY",
  },
  EVOLUTIONS: {
    code: 'xy12',
    totalCards: 108,
    name: "Evolutions",
    series: "XY",
  },

}
const cards = [
  ...promo.map(card => ({ ...card, set: SETS.PROMO, })),
  ...roaringSkies.map(card => ({ ...card, set: SETS.ROARING_SKIES, })),
  ...ancientOrigins.map(card => ({ ...card, set: SETS.ANCIENT_ORIGINS, })),
  ...breakthrough.map(card => ({ ...card, set: SETS.BREAKTHROUGH, })),
  ...fatesCollide.map(card => ({ ...card, set: SETS.FATES_COLLIDE, })),
  ...evolutions.map(card => ({ ...card, set: SETS.EVOLUTIONS, })),
];

module.exports = cards;
