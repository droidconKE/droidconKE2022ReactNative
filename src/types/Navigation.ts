import { screen_names } from "./../constants/ScreenNames";

//Enable type checking for route parameters
export type RootStackParamList = {
	[screen_names.SINGLESPEAKER]: { title: string };
	[screen_names.HOME]: undefined;
	[screen_names.LOGIN]: undefined;
	[screen_names.HOMETABS]: undefined;
	[screen_names.SPEAKERS]: undefined;
};
