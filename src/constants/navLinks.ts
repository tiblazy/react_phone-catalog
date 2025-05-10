export const getCategories = <T extends { category: string }>(
  categories: Array<T>,
): { name: string; route: string }[] => {
  return [...new Set(categories.map((category: T) => category.category))].map(
    category => {
      return { name: category, route: category };
    },
  );
};
