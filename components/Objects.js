import { useEffect, useState } from "react";

const Objects = () => {
  const aatroxStats = {
    id: "aatrox",
    key: "266",
    name: "Aatrox",
    title: "the Darkin Blade",
    tags: ["Fighter", "Tank"],
    stats: {
      hp: 580,
      hpperlevel: 90,
      mp: 0,
      mpperlevel: 0,
      movespeed: 345,
      armor: 38,
      armorperlevel: 3.25,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 3,
      hpregenperlevel: 1,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60,
      attackdamageperlevel: 5,
      attackspeedperlevel: 2.5,
      attackspeed: 0.651,
    },
    icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Aatrox.png",
    sprite: {
      url: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/sprite/champion0.png",
      x: 0,
      y: 0,
    },
    description:
      "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
  };

  const flattenChampionStats = (champ) => {
    return {
      id: champ.id,
      key: champ.key,
      name: champ.name,
      title: champ.title,
      // Spreading an array gives us:
      // 0: "Fighter"
      // 1: "Tank"
      // ...champ.tags,

      // Spreading an objet gives us the objects entry (key value pair)
      ...champ.stats,
    };
  };

  const aatrox = flattenChampionStats(aatroxStats);
  // console.log(aatrox);

  const landBeforeTime = {
    comet: "☄️",
    star: "✨",
    trex: "🦖",
    longNeck: "🦕",
  };

  const imdbTop5 = {
    one: "The Shawshank Redemption",
    two: "The Godfather",
    three: "The Dark Knight",
    four: "The Lord Of The Rings: The Return of the King",
    five: "Schindler's List",
  };

  for (const [key, val] of Object.entries(landBeforeTime)) {
    console.log(`Key: ${key}`);
    console.log(`Value: ${val}`);
  }

  for (const val of Object.values(imdbTop5)) {
    console.log(`Value ONLY: ${val}`);
  }

  return <></>;
};

export default Objects;
