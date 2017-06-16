import warna from 'warna';

const EMPTY_COLOR = '#f5f5f5';
const MAX_COLORS = 10;

const createArrayOfColors = (colors) => {
  const arr = [];

  for (let i = 0; i < MAX_COLORS; i++) {
    arr.push({
      color: colors[i],
      isClicked: false,
    });
  }

  return arr;
};

export const getGradient = (color) => {
  const lighterColor = warna.lighten(color, 0.5).hex;
  const gradient = new warna.Gradient(color, lighterColor);
  const colors = gradient.getSlices(MAX_COLORS, 'hex');

  const arr = createArrayOfColors(colors);

  return arr;
};

export const getMixedGradient = (color1, color2) => {
  // to make last color of mixed group
  // different from first color of luminosity group
  const lighterColor = warna.lighten(color2, 0.01).hex;

  const gradient = new warna.Gradient(color1, lighterColor);
  const colors = gradient.getSlices(MAX_COLORS, 'hex');

  const arr = createArrayOfColors(colors);

  return arr;
};

export const getArrayEmptyColors = () => {
  const arr = [];

  for (let i = 0; i < MAX_COLORS; i++) {
    arr.push(EMPTY_COLOR);
  }

  return arr;
};

export const deleteColor = (array, color) => {
  const arr = array.filter(item => {
    return item !== color;
  });

  arr.push(EMPTY_COLOR);

  return arr;
};

export const clickColorItem = (array, color) => {
  const arr = array.map(item => {
    if (item.color === color) {
      item.isClicked = true;
    }

    return item;
  });

  return arr;
};

export const deleteGroupColor = (array, color) => {
  const arr = array.map(item => {
    if (item.color === color) {
      item.isClicked = false;
    }

    return item;
  });

  return arr;
};

export const addColor = (colors, color) => {
  const obj = {
    ...colors
  }

  for (let key in obj) {
    obj[key] = clickColorItem(obj[key], color)
  }

  obj.chosenColorsGroup = addChosenColor(obj, color);

  return obj;
};

const addChosenColor = (colors, color) => {

  let arr = colors.chosenColorsGroup.filter(item => {
    return item !== EMPTY_COLOR;
  });

  if (arr.length >= MAX_COLORS) {
    for (let key in colors) {
      deleteGroupColor(colors[key],  arr[0])
    }

    arr = arr.slice(1);
    arr.push(color);
  } else {
    arr.push(color);
    
    for (let i = arr.length; i < MAX_COLORS; i++) {
      arr.push(EMPTY_COLOR);
    }
  }


  return arr;
}

export const selectAll = (array, colors) => {
  const arr = array.map((item, index) => {

    for (let key in colors) {
      deleteGroupColor(colors[key], colors.chosenColorsGroup[index])
    }

    return item.color;
  });

  return arr;
};

export const modify = (color, modifier, percent) => {
  let modifiedColor = '';
  const modifiedPercent = percent / 100;
  switch (modifier) {
    case 'darken': {
      modifiedColor = warna.darken(color, modifiedPercent).hex;
      break;
    }
    case 'lighten': {
      modifiedColor = warna.lighten(color, modifiedPercent).hex;
      break;
    }
  }

  return modifiedColor;
};

export const createExport = (array) => {
  const arr = [];

  array.filter((item, index) => {
    if (item !== EMPTY_COLOR) {
      const color = warna.parse(item);
      const obj = {
        color: color.hex,
        rgb: color.rgb,
        variable: `color-${index}`,
        id: index,
      };

      arr.push(obj);
    }
  });

  return arr;
};

export const changeVarName = (array, exportItem) => {
  const arr = array.map(item => {
    if (item.id === exportItem.id) {
      item.variable = exportItem.value;
    }

    return item;
  });

  return arr;
};

export const showClickedItems = (clickedColors, arrayOfColors) => {
  const arr = clickedColors.map((item, index) => {
    if (item.color === arrayOfColors[index].color) {
      item.isClicked = true;
      return item;
    }
    return arrayOfColors[index];
  });

  return arr;
};

export const deleteColors = (obj, color) => {

  const colors = {
    ...obj
  }

  for (let key in colors) {
    colors[key].map(item => {
      if (item.color === color) {
        item.isClicked = false;
      }

      return item;
    });
  }

  colors.chosenColorsGroup = deleteColor(colors.chosenColorsGroup, color);

  return colors;

};

export const getRandomColor = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return randomColor;
};
