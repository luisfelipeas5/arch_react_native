import { View, Text, Button } from "react-native";
import { useCallback} from "react";
import { Tags } from "../components/tags";

export const CartScreen = ({ navigation }) => {
  const navigatToCheckout = useCallback(() => {
    navigation.navigate("checkout");
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Cart</Text>
      <Tags />

      <Button title="go to checkout" onPress={navigatToCheckout} />
    </View>
  );
};
