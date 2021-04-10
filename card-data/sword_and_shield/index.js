const promo = require('./promo');
const base = require('./base');
const rebelClash = require('./rebelClash');
const darknessAblaze = require('./darknessAblaze');
const championsPath = require('./championsPath');
const vivdVoltage = require('./vividVoltage');
const shiningFates = require('./shiningFates');
const shinyVault = require('./shinyVault');
const battleStyles = require('./battleStyles');

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
  SHINING_FATES: {
    code: 'swsh45',
    totalCards: 72,
    name: "Shining Fates",
    series: "Sword & Shield",
  },
  SHINY_VAULT: {
    code: 'swsh45sv',
    totalCards: 122,
    name: "Shiny Vault",
    series: "Sword & Shield",
  },
  BATTLE_STYLES: {
    code: 'swsh5',
    totalCards: 163,
    name: "Battle Styles",
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
  ...shinyVault.map(card => ({ ...card, set: SETS.SHINY_VAULT, })),
  ...shiningFates.map(card => ({ ...card, set: SETS.SHINING_FATES, })),
  ...battleStyles.map(card => ({ ...card, set: SETS.BATTLE_STYLES, })),
];

module.exports = cards;
