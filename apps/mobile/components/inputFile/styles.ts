import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  uploadContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: "15%",
    marginBottom: "15%",
  },
  uploadButton: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "gray",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    height: 140,
  },
  uploadText: {
    marginTop: 10,
    color: "gray",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  successText: {
    color: "green",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  downloadContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  downloadText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  convertButton: {
    backgroundColor: "#333",
    borderRadius: 8,
    width: 200,
    height: 50,
    padding: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
