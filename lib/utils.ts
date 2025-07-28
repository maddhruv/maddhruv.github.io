export const removeDuplicates = <T>(array, property): T => {
  return array.filter((item, index, self) => {
    const value =
      typeof property === "function" ? property(item) : item[property];
    return (
      index ===
      self.findIndex((obj) =>
        typeof property === "function"
          ? property(obj) === value
          : obj[property] === value
      )
    );
  });
};

export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat("en-US").format(number);
};

export const getPageNumber = (page: string): number => {
  return parseInt(page) || 1;
};
