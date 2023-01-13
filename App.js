import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './src/Main';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Main />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
}
