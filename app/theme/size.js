import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
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

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
const deviceWidth = width;
const deviceHeight = height;

export const Size = {
  scale,
  verticalScale,
  moderateScale,
  deviceWidth,
  deviceHeight,
};
