export const requiredField = (value: string) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

export const maxCheck = (length: number) => (value: string) => {
  if (value && value.length > length) {
    return `MaxLength is ${length} symbols`;
  }
  return undefined;
};
