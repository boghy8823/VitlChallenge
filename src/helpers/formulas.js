export const getTotalNutrients = (basketItems, nutrient) => {
  return basketItems
    .flat()
    .filter((item) => {
      if (item.id === nutrient.id) {
        return item.amount;
      }
    })
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr);
};
