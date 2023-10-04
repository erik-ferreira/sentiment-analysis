import axios from "axios"
import { useState } from "react"
import { Feather } from "@expo/vector-icons"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"

import { SCORE_TAG, Sentiment } from "../../components/Sentiment"

import { styles } from "./styles"

export function Home() {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState<SCORE_TAG | null>(null)

  async function handleSendMessage() {
    try {
      setLoading(true)

      const formData = new FormData()
      formData.append("key", process.env.EXPO_PUBLIC_MEANING_CLOUD_KEY || "")
      formData.append("txt", message)
      formData.append("lang", "pt")

      const response = await axios.post(
        "https://api.meaningcloud.com/sentiment-2.1",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      setScore(response.data.score_tag)
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensagem</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua mensagem"
          placeholderTextColor="#a3a3a3"
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          disabled={loading}
          onPress={handleSendMessage}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Feather name="send" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      {score && <Sentiment score={score} />}
    </View>
  )
}
