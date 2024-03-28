import { View, Text, Button } from "react-native";
import { useMemo, useCallback } from "react";
import { productsMock } from "../../../../mock";
import { ExternalCartPreviewProps } from "../../../core/external-types/cart/props-types";

type Props = {
  externalCartPreviewBuilder: (
    props: ExternalCartPreviewProps
  ) => React.ReactNode;
  navigation: any;
};

export const CheckoutScreen = ({
  externalCartPreviewBuilder,
  navigation,
}: Props) => {
  console.log("[CheckoutScreen] => Rerendered")

  const navigatToCart = useCallback(() => {
    navigation.navigate("cart");
  }, [navigation]);

  const navigateToPaymentMethods = useCallback(() => {
    navigation.navigate("payment-methods");
  }, [navigation]);

  const CartPreviewBuilder = useMemo(
    () => externalCartPreviewBuilder,
    [externalCartPreviewBuilder]
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Checkout</Text>
      <CartPreviewBuilder products={productsMock} />
      <Button title="go to cart" onPress={navigatToCart} />
      <Button
        title="go to payment methods"
        onPress={navigateToPaymentMethods}
      />
    </View>
  );
};
