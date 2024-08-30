export const formatName = (name: any): string => {
  if (typeof name !== "string") {
    return ""; // or handle the error as needed
  }
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
