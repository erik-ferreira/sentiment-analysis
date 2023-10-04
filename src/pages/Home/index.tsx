import { useState } from "react"
import { FontAwesome, Feather } from "@expo/vector-icons"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./styles"
import { Sentiment } from "../../components/Sentiment"

export function Home() {
  const [score, setScore] = useState(null)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagem</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua mensagem"
          placeholderTextColor="#a3a3a3"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {score && <Sentiment />}
    </View>
  )
}
