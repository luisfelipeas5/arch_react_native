import { Text, TouchableOpacity, View } from "react-native";
import { useCallback, useState } from "react";
import { ExternalCartPreviewProps } from "../../../core/external-types/cart/props-types";

export const ExternalCartPreview = ({ products }: ExternalCartPreviewProps) => {
  const [count, setCount] = useState(0);

  console.log("[ExternalCartPreview] => Rerendered")

  const onPress = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <View>
      {products.map((t) => (
        <TouchableOpacity key={t.id} onPress={onPress}>
          <Text >{t.name}</Text>
        </TouchableOpacity>
      ))}
      <Text>{count}</Text>
    </View>
  );
};
