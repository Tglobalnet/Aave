import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./screens/Stack";
import { AppProvider } from './utility/global';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (

      <AppProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#478f8b' style='dark'/>
        <StackNavigation/>
      </NavigationContainer>
      </AppProvider>
  );
}