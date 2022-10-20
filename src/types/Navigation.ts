import { BioDetails } from "./../screens/BioScreen";
import { screen_names } from "./../constants/ScreenNames";

//Enable type checking for route parameters
export type RootStackParamList = {
  [screen_names.BIO]: { bioData: BioDetails };
  [screen_names.HOME]: undefined;
  [screen_names.HOMETABS]: undefined;
  [screen_names.SPEAKERS]: undefined;
  [screen_names.ABOUT]: undefined;
  [screen_names.FEEDBACK]: undefined;
};
