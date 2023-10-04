import { View, Text } from "react-native"

import { sentiments } from "../../utils/sentiments"

import { styles } from "./styles"

export type SCORE_TAG = "P+" | "P" | "NEU" | "N" | "N+" | "NONE"

interface SentimentProps {
  score: SCORE_TAG
}

export function Sentiment({ score }: SentimentProps) {
  const { emoji, name } = sentiments[score]

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>

      <Text style={styles.sentiment}>{name}</Text>
    </View>
  )
}
