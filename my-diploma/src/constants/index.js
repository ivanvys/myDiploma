import hpIcon from "../static/pokeStats/HP.png";
import attackIcon from "../static/pokeStats/ATTACK.png";
import defenseIcon from "../static/pokeStats/DEFENSE.png";
import specialAttackIcon from "../static/pokeStats/SPECIAL_ATTACK.png";
import specialDefenseIcon from "../static/pokeStats/SPECIAL_DEFENSE.png";
import speedIcon from "../static/pokeStats/SPEED.png";

export const LOCAL_STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
};

export const checkingItemsInTheCart = (products, cart) => {
  const cartObject = cart.itemsList.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
  return products.map((element) => {
    return {
      ...element,
      isItInTheCart: Boolean(cartObject[element.id]),
    };
  });
};

export const changeQuantity = (cart, quantityPokemon) => {
  return cart.itemsList.map((element) => {
    if (quantityPokemon.updatedItem.id === element.id) {
      return { ...element, quantity: quantityPokemon.updatedItem.quantity };
    } else {
      return { ...element };
    }
  });
};

export const pokemonStatsWithIcons = (data) => {
  const statsItem = {
    hp: hpIcon,
    attack: attackIcon,
    defense: defenseIcon,
    "special-attack": specialAttackIcon,
    "special-defense": specialDefenseIcon,
    speed: speedIcon,
  };
  return data?.stats?.map((element) => {
    return { ...element, icon: statsItem[element.title] };
  });
};

export const inCartOrNot = (cart, detailPokemonInfo) => {
  const ids = cart.itemsList.map((item) => item.id);
  return ids.includes(detailPokemonInfo?.id);
};
