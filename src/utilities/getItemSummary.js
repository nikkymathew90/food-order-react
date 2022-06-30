export const getItemCartSummary = (items) => {
  const itemMap = new Map();

  items.forEach((item) => {
    if (!itemMap.has(item.name)) {
      itemMap.set(item.name, item);
    } else {
      let itm = itemMap.get(item.name);
      let amount = itm.amount + 1;
      itemMap.set(item.name, { ...itm, amount });
    }
  });

  return itemMap;
};
