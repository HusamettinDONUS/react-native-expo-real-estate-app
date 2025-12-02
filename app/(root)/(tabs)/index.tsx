import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-blue-500 text-4xl font-rubik-regular  ">
        Welcome to Restate
      </Text>
      <Link href="/explore">expolre</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">property 1</Link>
      <Link href="/sign-in">sign in</Link>
    </View>
  );
}
