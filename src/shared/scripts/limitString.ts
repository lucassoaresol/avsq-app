export const limitString = (name: string) => {
  if (name.length > 30) {
    const newName = name.split(".");
    return newName[0].slice(0, 20) + "." + newName[1];
  }

  return name;
};
