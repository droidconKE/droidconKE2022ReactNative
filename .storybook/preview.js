import { Provider } from "react-redux";
import { store } from "../src/state/store";
import { NavigationContainer } from "@react-navigation/native";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    </Provider>
  ),
];
