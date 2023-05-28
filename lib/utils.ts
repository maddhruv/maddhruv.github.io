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

type ImageLocation = "homepage" | "post" | "related";
export const getImageUrl = (image: string, location: ImageLocation): string => {
  if (location === "homepage") {
    return `${image}?h=210&w=400&auto=format`;
  }
  if (location === "post") {
    return `${image}?h=580&w=1000&auto=format`;
  }
  if (location === "related") {
    return `${image}?h=75&w=131&auto=format`;
  }
  return image;
};
