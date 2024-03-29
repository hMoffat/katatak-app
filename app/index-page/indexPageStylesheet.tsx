import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homePageScrollContainer: {
    marginTop: "8%",
  },
  headerContainer: {
    display: "flex",
    marginTop: "0%",
    backgroundColor: "#F2F2D0",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Arial",
    fontSize: 25,
    fontWeight: "400",
  },
  katatakLogo: { height: 64, width: 360 },
  bar: {
    width: 342,
    height: 39,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 0,
  },
  filterContainer: {
    backgroundColor: "#F2F2D0",
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  filterLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dropdown: {
    display: "flex",
    width: "40%",
    marginLeft: 12,
    paddingBottom: 10,
    height: 50,
    borderBottomWidth: 0,
    fontFamily: "Pixellari",
    fontSize: 16,
  },
  katasContainer: {
    backgroundColor: "#F2F2D0",
  },
  hideCard: {
    elevation: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  card: {
    width: 321,
    height: 147,
    alignSelf: "center",
    justifyContent: "space-between",
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  kataHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
  },
  titleText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginLeft: 10,
  },
  difficultyText: {
    fontFamily: "dogica",
    fontSize: 8,
    marginRight: 10,
    marginTop: 6,
  },
  topicText: {
    fontFamily: "dogica",
    fontSize: 8,
    marginBottom: 15,
  },
  content: {
    marginLeft: 10,
  },
  footer: {
    alignItems: "center",
  },
  fightButton: {
    flex: 3,
    alignSelf: "center",
  },
  fightButtonText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
  pressedFightButtonText: {
    fontFamily: "Pixellari",
    fontSize: 16,
    marginBottom: 8,
    color: "gray",
  },
});
