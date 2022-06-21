export const headerTrackBy = (index: number, item: any) => {
  return item.value;
};

export const headerStyles = () => {
  return (length: number) => ({
    'grid-template-columns': `repeat(${length + 1}, 1fr)`,
  });
};
