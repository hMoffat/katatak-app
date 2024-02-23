import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Text, Card } from "@rneui/themed";
import { ActiveKataContext } from "app/context/ActiveKata";
import { router } from "expo-router";

type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
};

export default function KataCard({ kataData }: { kataData: kataObj[] }) {
  const { activeKata, setActiveKata } = useContext(ActiveKataContext);
  const onPressFunction = (id: number) => {
    setActiveKata(id);
  };

  return (
    <ScrollView>
      {kataData.map((kata: kataObj) => {
        return (
          <Card key={kata.kata_id}>
            <View style={styles.user}>
              <Text style={styles.name}>{kata.kata_name}</Text>
              <Text style={styles.name}>{kata.description}</Text>
              <Text style={styles.name}>{kata.difficulty}</Text>
              <Pressable
                onPress={() => {
                  router.push("/CurrentKata");
                  onPressFunction(kata.kata_id);
                }}
              >
                <Text>Solve this!</Text>
              </Pressable>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 5,
  },
  user: {
    marginBottom: 6,
  },
  name: {
    fontSize: 10,
    marginTop: 5,
  },
});
