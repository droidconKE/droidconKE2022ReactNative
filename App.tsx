import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';
import MainStackNavigator from './navigation/MainStackNavigator';

export default function App() {

  // Load cached resources before the app starts.
  const isLoadingComplete = useCachedResources();
  
  // Show nothing ( but the splashscreen ) till cached resources load.
  if(!isLoadingComplete) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
}
