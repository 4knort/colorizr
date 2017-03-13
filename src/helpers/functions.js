import warna from 'warna';

export const getGradient = (color) => {
  const lighterColor = warna.lighten(color, 0.5).hex;
  const gradient = new warna.Gradient(color, lighterColor);
  const colors = gradient.getSlices(10, 'hex');

  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({
      color: colors[i],
      isClicked: false,
    });
  }

  return arr;
};

export const getMixedGradient = (color1, color2) => {
  const lighterColor = warna.lighten(color2, 0.01).hex;
  const gradient = new warna.Gradient(color1, lighterColor);
  const colors = gradient.getSlices(10, 'hex');

  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({
      color: colors[i],
      isClicked: false,
    });
  }

  return arr;
};

export const getArrayEmptyColors = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push('#f5f5f5');
  }

  return arr;
};

export const deleteColor = (array, color) => {
  const arr = array.filter(item => {
    return item !== color;
  });

  arr.push('#f5f5f5');

  return arr;
};

export const clickColorItem = (array, color) => {
  const arr = array.map(item => {
    if (item.color === color) {
      item.isClicked = true;

      return item;
    }
    return item;
  });

  return arr;
};

export const deleteGroupColor = (array, color) => {
  const arr = array.map(item => {
    if (item.color === color) {
      item.isClicked = false;

      return item;
    }
    return item;
  });

  return arr;
};

export const addColor = (array, luminosity, mixed, color) => {
  const emptyColor = '#f5f5f5';

  let arr = array.filter(item => {
    return item !== emptyColor;
  });

  if (arr.length >= 10) {
    deleteGroupColor(luminosity, arr[0]);
    deleteGroupColor(mixed, arr[0]);
    arr = arr.slice(1);
    arr.push(color);
  } else {
    arr.push(color);
  }

  for (let i = arr.length; i < 10; i++) {
    arr.push(emptyColor);
  }

  return arr;
};

export const selectAll = (array, luminosity, mixed, chosenGroup) => {
  const arr = array.map( (item, index) => {
    deleteGroupColor(luminosity, chosenGroup[index]);
    deleteGroupColor(mixed, chosenGroup[index]);

    return item.color;
  });

  return arr;
};

// export const removeClicks = (array) => {
//   const arr = array.map(item => {
//     if (item.isClicked === true) {
//       item.isClicked = false;

//       return item;
//     }
//     return item;
//   }) 
// };

// export const removeAllColors = (chosenArray, removeArray) => {
//   const arr = removeArray.map(item => {
//     if (item.isClicked === true) {
//       return item;
//     }
//     return '';
//   });
//   const selectArr = [];

//   for (let i = 0; i < chosenArray.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(chosenArray[i] === arr[j].color) {
//         continue;
//       }
//         selectArr.push(chosenArray[i]);

//     }
//   }
//   console.log(selectArr);
//   for (let i = selectArr.length; i < 10; i++) {
//     selectArr.push('$f5f5f5')
//   }
// };


// const removeArray = [
//   {
//     color: '#f0f0f0',
//     isClicked: true,
//   },
//   {
//     color: '#fafafa',
//     isClicked: true,
//   }
// ]

// const chosenArray = [
//      '#ffffff',
//      '#f0f0f0',
//      '#fafafa',
//     '#f4f4f4'
// ]

// const test = removeAllColors(chosenArray,removeArray)

// console.log(test)