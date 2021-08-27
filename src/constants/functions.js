import { Image } from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

const cacheImages = (images) =>
  Object.values(images).map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });

const loadAssetsAsync = async () => {
  const fontAssets = cacheFonts(preloadFonts);
  const imageAssets = cacheImages(preloadImages);
  return Promise.all([...fontAssets, ...imageAssets]);
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync,
};
