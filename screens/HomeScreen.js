import { SafeAreaView, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { SET_DESTINATION, SET_ORIGIN } from "../store/navSlice";
import NavFavorites from "../components/NavFavorites";

export default function () {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Mau kemana ?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(
              SET_ORIGIN({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(SET_DESTINATION(null));
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "id",
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
}
