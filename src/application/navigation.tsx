import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./navigation/stack";
import { checkoutEntrypoints } from "./navigation/entrypoints/checkout-entrypoint";
import { cartEntrypoints } from "./navigation/entrypoints/cart-entrypoint";

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {cartEntrypoints.map(entrypPointMapper)}
      {checkoutEntrypoints.map(entrypPointMapper)}
    </Stack.Navigator>
  );
};

const entrypPointMapper = ({name, component}) => {
  return <Stack.Screen key={name} name={name} component={component} />;
};
