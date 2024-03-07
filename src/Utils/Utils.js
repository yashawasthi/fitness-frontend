function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const redHex = red.toString(16).padStart(2, "0");
    const greenHex = green.toString(16).padStart(2, "0");
    const blueHex = blue.toString(16).padStart(2, "0");

    const colorHex = `#${redHex}${greenHex}${blueHex}`;

    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

    if (luminance > 0.5) {
      const darkerColorHex = `#${Math.floor(red * 0.8)
        .toString(16)
        .padStart(2, "0")}${Math.floor(green * 0.8)
        .toString(16)
        .padStart(2, "0")}${Math.floor(blue * 0.8)
        .toString(16)
        .padStart(2, "0")}`;
      return darkerColorHex;
    } else {
      return colorHex;
    }
  }

function OrderDatesInAscending(data)
{
  return data.sort((a, b) => 
  {
    const dateA=new Date(a.date);
    const dateB=new Date(b.date);

    const c= dateA-dateB;
    return c;
  });
}
function OrderDatesInDescending(data)
{
  return data.sort((a, b) => 
  {
    const dateA=new Date(a.date);
    const dateB=new Date(b.date);

    const c= dateB-dateA;
    return c;
  });
}

function OrderWeightsInAscending(data)
{
  return data.sort((a, b) => 
  {
    const weightA=a.weight
    const weightB=b.weight
    const c= weightA-weightB;
    return c;
  });
}

function OrderWeightsInDescending(data)
{
  return data.sort((a, b) => 
  {
    const weightA=a.weight
    const weightB=b.weight
    const c= weightB-weightA;
    return c;
  });
}

  export {getRandomColor,OrderDatesInAscending,OrderDatesInDescending,OrderWeightsInAscending,OrderWeightsInDescending};

