import React from "react";
import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/base";

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            component={NavigateCard}
            name="NavigateCard"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={RideOptionsCard}
            name="RideOptionsCard"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
