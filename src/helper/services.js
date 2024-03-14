import AsyncStorage from '@react-native-async-storage/async-storage';

// this is the common function to store data in AsyncStorage
export const storeStorageDate = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {}
};

export const removeStorageData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};

export const removeMultiple = async key => {
  try {
    await AsyncStorage.multiRemove(key);
  } catch (error) {}
};

// this is the common function to get data from AsyncStorage
export const getStorageData = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== undefined) {
      return JSON.parse(data);
    }
  } catch (error) {}
};
