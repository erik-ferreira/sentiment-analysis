import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#27272a",
  },

  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#f4f4f5",
    marginBottom: 24,
    marginTop: 48,
  },

  form: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#999",
    padding: 16,
  },

  input: {
    width: "100%",
    height: 150,
    fontSize: 16,
    color: "#f4f4f5",
    textAlignVertical: "top",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    backgroundColor: "#ea580c",

    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
})
