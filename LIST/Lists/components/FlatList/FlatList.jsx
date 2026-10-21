import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import playersList from "../../data/PlayerData.json";

export default function FlatList() {
  return (
    <>
      <SafeAreaView>
        <View>
          {playersList?.map((players) => {
            return (
              <View>
                <Text></Text>
                <Text></Text>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
}

