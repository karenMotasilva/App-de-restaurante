
import { View, Text, Image, TextInput, Button, Pressable, Alert, StyleSheet, ScrollView, StyleProp, TextStyle, ViewStyle, } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "./componets/Header";
import { CategorialItem } from "./componets/categoriaItem";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <Header nomeUsuario="karen" />
        <View style={{ flexDirection: 'row', gap: '2%', padding: '3%', marginTop: '4%'}}>
          <CategorialItem nameCategory="Saladas" />
          <CategorialItem nameCategory="Massas" />
          <CategorialItem nameCategory="Carnes" />
          <CategorialItem nameCategory="Bebidas" />
          <CategorialItem nameCategory="Doces" />

        </View>


      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})