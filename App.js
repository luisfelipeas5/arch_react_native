import { StyleSheet } from 'react-native';
import { Application } from './src/application/application';

export default function App() {
  return (
    <Application />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
