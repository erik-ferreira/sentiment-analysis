import { View, Text } from "react-native"

import { styles } from "./styles"

interface SentimentProps {}

export function Sentiment({ ...rest }: SentimentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😀</Text>
      <Text style={styles.sentiment}>Positivo</Text>
    </View>
  )
}
