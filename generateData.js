// Database as a file of my cards

const axios = require('axios');
const fs = require('fs')
const cards = require('./card-data/index')

const lookupPrice = async (mon) => {
  let query;
  if (isNaN(parseInt(mon.number))) {
    query = `${mon.lookupName} ${mon.number}`;
  } else {
    // Makes for inconsistent results. Perhaps get all 3 and take the lowest
    // const bufferedNumber = ((number) => {
    //   switch (number.length) {
    //     case 3:
    //       return number;
    //     case 2:
    //       return "0" + number;
    //     case 1:
    //       return "00" + number;
    //     defualt:
    //     console.log(`Got a weird number length of ${number.length} for ${mon}`)
    //   }
    // })(mon.number);
    query = `${mon.lookupName} ${mon.number}/${mon.set.totalCards}`;
  }

  const resp = await axios.get('https://mavin.io/search', {
    params: {
      format: 'json',
      bt: 'sold',
      spq: 0,
      q: query,
    }
  })
  return { price: parseFloat(resp.data.median), query }
}

const main = async () => {
  const data = []
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    const cardData = await axios.get(`https://api.pokemontcg.io/v1/cards/${c.set.code}-${c.number}`);
    const { price, query } = await lookupPrice(c);
    data.push({
      id: cardData.data.card.id,
      name: cardData.data.card.name,
      image: cardData.data.card.imageUrlHiRes,
      rarity: cardData.data.card.rarity,
      number: cardData.data.card.number,
      series: c.set.series,
      set: c.set.name,
      price,
      query,
    });
  }
  const fileData = JSON.stringify(data);

  fs.writeFile('./src/data/data.json', fileData, (err) => {
      if (err) {
          throw err;
      }
  });
}

main();
