import { Text } from 'react-native';

export const Tags = () => {


    return ["Tag A", "Tag B"].map((t) => <Text key={t}>{t}</Text> )
}