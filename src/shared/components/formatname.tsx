export const formatName = (name: string): string => {
  return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};
