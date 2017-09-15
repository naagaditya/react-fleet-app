import { AsyncStorage } from 'react-native';

export const getItem = (key) => {
  try {
    const value = AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log(error);
  }
}

export const setItem = (key, value) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

export default {
  setItem,
  getItem
}