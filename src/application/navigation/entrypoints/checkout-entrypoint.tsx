import { CheckoutScreen } from "../../../modules/checkout/screens/checkout-screen";
import { PaymentMethodsScreen } from "../../../modules/checkout/screens/payment-methods-screen";
import { ExternalCartPreview } from "../../../modules/cart/components/cart-preview";

const CheckoutScreenBrigde = ({ navigation }) => {
  // const externalTagsBuilder = useCallback((data: string[]) => {
  //     return <ExternalTags data={data}/>
  // }, []);

  console.log("[CheckoutScreenBrigde] => Rerendered")

  return (
    <CheckoutScreen
      navigation={navigation}
      externalCartPreviewBuilder={ExternalCartPreview}
    />
  );
};

export const checkoutEntrypoints = [
  {
    name: "checkout",
    component: CheckoutScreenBrigde,
  },
  {
    name: "payment-methods",
    component: PaymentMethodsScreen,
  },
];
