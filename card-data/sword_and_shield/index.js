const promo = require('./promo');
const base = require('./base');
const rebelClash = require('./rebelClash');
const darknessAblaze = require('./darknessAblaze');
const championsPath = require('./championsPath');
const vivdVoltage = require('./vividVoltage');

const SETS = {
  PROMO: {
    code: 'swshp',
    totalCards: 74,
    name: "SWSH Black Star Promos",
    series: "Sword & Shield",
  },
  BASE: {
    code: 'swsh1',
    totalCards: 202,
    name: "Sword & Shield",
    series: "Sword & Shield",
  },
  REBEL_CLASH: {
    code: 'swsh2',
    totalCards: 192,
    name: "Rebel Clash",
    series: "Sword & Shield",
  },
  DARKNESS_ABLAZE: {
    code: 'swsh3',
    totalCards: 189,
    name: "Darkness Ablaze",
    series: "Sword & Shield",
  },
  CHAMPIONS_PATH: {
    code: 'swsh35',
    totalCards: 73,
    name: "Champion's Path",
    series: "Sword & Shield",
  },
  VIVID_VOLTAGE: {
    code: 'swsh4',
    totalCards: 185,
    name: "Vivid Voltage",
    series: "Sword & Shield",
  },
}
const cards = [
  ...promo.map(card => ({ ...card, set: SETS.PROMO, })),
  ...base.map(card => ({ ...card, set: SETS.BASE, })),
  ...rebelClash.map(card => ({ ...card, set: SETS.REBEL_CLASH, })),
  ...darknessAblaze.map(card => ({ ...card, set: SETS.DARKNESS_ABLAZE, })),
  ...championsPath.map(card => ({ ...card, set: SETS.CHAMPIONS_PATH, })),
  ...vivdVoltage.map(card => ({ ...card, set: SETS.VIVID_VOLTAGE, })),
];

module.exports = cards;
