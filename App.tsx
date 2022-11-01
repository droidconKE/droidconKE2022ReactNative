import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/state/store";
import { NavigationContainer } from "@react-navigation/native";
import useCachedResources from "./src/hooks/useCachedResources";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  // Load cached resources before the app starts.
  const isLoadingComplete = useCachedResources();

  // Show nothing ( but the splashscreen ) till cached resources load.
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
