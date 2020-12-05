const xy = require('./xy/index');
const sunAndMoon = require('./sun_and_moon/index');
const swordAndShield = require('./sword_and_shield/index');

const cards = [
  ...xy,
  ...sunAndMoon,
  ...swordAndShield,
];

module.exports = cards;
