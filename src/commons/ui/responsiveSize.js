import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
//* react-native responsive-fontsize

//* react-native size metters
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const mvScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
