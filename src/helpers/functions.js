import warna from 'warna';

export const getGradient = (color) => {
  const lighterColor = warna.lighten(color, 0.5).hex;
  const gradient = new warna.Gradient(color, lighterColor);
  const colors = gradient.getSlices(10, 'hex');

  return colors;
};

export const getMixedGradient = (color1, color2) => {
  const gradient = new warna.Gradient(color1, color2);
  const colors = gradient.getSlices(10, 'hex');

  return colors;
};

export const getArrayEmptyColors = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push('#f5f5f5');
  }
  
  return arr;
};
