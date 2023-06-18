export const updateObjectInArray = <T extends Record<string, any>>(
  items: Array<T>,
  itemId: T[keyof T],
  objPropName: keyof T,
  newObjProps: Partial<T>
): Array<T> => {
  return items.map((u) =>
    u[objPropName] === itemId ? { ...u, ...newObjProps } : u
  );
};
