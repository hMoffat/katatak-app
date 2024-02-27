import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "app/context/UserContext";
import { getSolutionsByUserId, getKata } from "app/api";

type solutionObj = {
  kata_id: number;
  kata_name: string;
  solution: string;
  solution_id: number;
  user_id: number;
  votes: number;
};

type kataObj = {
  kata_id: number;
  kata_name: string;
  description: string;
  difficulty: string;
  topics: string[];
};

export default function UserCard() {
  const currentUser = useContext(CurrentUserContext);
  const [isLoading, setLoading] = useState(true);
  const [numKatasCompleted, setNumKatasCompleted] = useState<number>(0);
  const [kataNamesCompleted, setKataNamesCompleted] = useState<string[]>([]);
  const [topicsDone, setTopicsDone] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const allSolutions = await getSolutionsByUserId(currentUser.user_id);

      const solvedKatasIds: number[] = [];
      allSolutions.map((solution: solutionObj) => {
        if (!solvedKatasIds.includes(solution.kata_id))
          solvedKatasIds.push(solution.kata_id);
      });
      setNumKatasCompleted(solvedKatasIds.length);

      const solvedKatasTopics: string[] = [];
      const namesOfCompletedKatas: string[] = [];
      await Promise.all(
        solvedKatasIds.map(async (id) => {
          const kata: kataObj = await getKata(id);
          kata.topics.map((topic: string) => {
            if (!solvedKatasTopics.includes(topic))
              solvedKatasTopics.push(topic);
          });
          if (!namesOfCompletedKatas.includes(kata.kata_name))
            namesOfCompletedKatas.push(kata.kata_name);
        })
      );
      setKataNamesCompleted(namesOfCompletedKatas);
      setTopicsDone(solvedKatasTopics);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: currentUser.avatar_img_url,
        }}
        alt={`${currentUser.username}'s avatar`}
        style={styles.img}
      />
      <Text style={[styles.usernameHeader]}>{currentUser.username}</Text>
      <Text style={styles.bio}>"{currentUser.bio}"</Text>
      <Text>Number Of Katas Completed: {numKatasCompleted}</Text>
      <Text>Katas Completed: {kataNamesCompleted.join(", ")}</Text>
      <Text>Topics Done: {topicsDone.join(", ")}</Text>
    </View>
  );
}

const marginTop = "10%";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flex: 3,
  },
  usernameHeader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  img: {
    padding: 50,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: marginTop,
  },
  bio: {
    margin: 20,
    fontFamily: "Arial",
    fontSize: 20,
  },
});
