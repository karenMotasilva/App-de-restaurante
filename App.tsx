
import { View, Text, Image, TextInput, Button, Pressable, Alert, StyleSheet, ScrollView, StyleProp, TextStyle, ViewStyle, } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "./componets/Header";
import { CategorialItem } from "./componets/categoriaItem";
import { RecipeCard } from "./componets/recipeCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header nomeUsuario="karen" />
        <View style={{ flexDirection: 'row', gap: '2%', padding: '3%', marginTop: '4%' }}>
          <CategorialItem nameCategory="Saladas" />
          <CategorialItem nameCategory="Massas" />
          <CategorialItem nameCategory="Carnes" />
          <CategorialItem nameCategory="Bebidas" />
          <CategorialItem nameCategory="Doces" />

        </View>
        <View style={{ flexDirection: 'row', gap: "15%", marginBottom: '3%' }}>
          <View>
            <Text>
              Receitas em destaque</Text>
          </View>
          <View>
            <Text style={{ color: '#76C457', fontSize: 12 }}>Ver todas </Text>
          </View>
        </View>
        <RecipeCard nameFood="Macarrão á Carbonara"
                    categoryFood="Massas"
                    dificultFood="Médio"
                    onPress={() =>{}}>
        </RecipeCard>

        <View>
          <Text style={{ color: "#76C457",textAlign:'center' }}>
            Sair da conta
          </Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EAF5F0'
  }
})