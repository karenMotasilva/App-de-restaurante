
import { View, Text, Image, TextInput, Button, Pressable, Alert, StyleSheet, ScrollView, StyleProp, TextStyle, ViewStyle, FlatList, ListRenderItem } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "./componets/Header";
import { CategorialItem } from "./componets/categoriaItem";
import { RecipeCard, DificultFood } from "./componets/recipeCard";

//tipos de dados
interface Category {
  id: string
  nameCategory: string
}
interface Recipe {
  id: string
  nameFood: string
  categoryFood: string
  dificultFood: DificultFood
}

//Dados categoria

const arrayCategories: Category[] = [
  {
    id: '1',
    nameCategory: "Saladas"
  },
  {
    id: '2',
    nameCategory: "Massas"
  },
  {
    id: '3',
    nameCategory: "Doces"
  },
  {
    id: '4',
    nameCategory: "Carnes"
  },
  {
    id: '5',
    nameCategory: "Bebidas"
  },
  {
    id: '6',
    nameCategory: "Lanches"
  },
  {
    id: '7',
    nameCategory: "Brasileira"
  },
  {
    id: '8',
    nameCategory: "Japonesa"
  },
]
//Dados receita

const recipes: Recipe[] = [
  {
    id: '1',
    nameFood: 'churrasco',
    categoryFood: 'Carnes',
    dificultFood: 'Fácil'
  },

  {
    id: '2',
    nameFood: 'Macarrão á carbonara',
    categoryFood: 'Massas',
    dificultFood: 'Médio'
  },
  {
    id: '3'
    , nameFood: 'Cheesecake',
    categoryFood: 'Doces',
    dificultFood: 'Difícil'
  },
  {
    id: '4',
    nameFood: 'Hot Holl',
    categoryFood: 'Japonesa',
    dificultFood: 'Médio'
  },
  {
    id: '5',
    nameFood: 'Strogonoff de frango',
    categoryFood: 'Brasileira',
    dificultFood: 'Fácil'
  },
  {
    id: '6',
    nameFood: 'Cachorro quente',
    categoryFood: 'Lanches',
    dificultFood: 'Fácil'
  },
  {
    id: '7',
    nameFood: 'Banoffe',
    categoryFood: 'Doces',
    dificultFood: 'Difícil'
  },
];


export default function App() {
  //renderiza cada categoria
  const renderCategory: ListRenderItem<Category> = ({ item }) => {
    return (
      <CategorialItem nameCategory={item.nameCategory} />
    );
  }
  //Renderiza cada receita
  const renderRecipe: ListRenderItem<Recipe> = ({ item }) => {
    return (
      <RecipeCard
        nameFood={item.nameFood}
        categoryFood={item.categoryFood}
        dificultFood={item.dificultFood}
        onPress={() => {
          Alert.alert(
            'Receitas selecionadas', `${item.nameFood}  - ${item.dificultFood}`,
            [{
              text: "Cancelar",
              style: "cancel",
            },
            {
              text: "Abrir",
              onPress: () => {
                Alert.alert("Abrindo receita",
                  `Carregar detalhes da receita ${item.id}`,
                );
              },
            },
            ]
          )
        }} />
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={recipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          style={styles.recipeList}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View>
              <Header nomeUsuario="karen" />
              <FlatList
                data={arrayCategories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
              />
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  Receitas em destaque
                </Text>
                <Text style={styles.sectionTitle}>
                  Ver todas
                </Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View >
              <Text style={styles.logout}>
                Sair da conta
              </Text>
            </View>
          } />

        {/* <Header nomeUsuario="karen" /> */}
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={{ flexDirection: 'row', gap: '2%', padding: '3%', marginTop: '4%' }}>
            <CategorialItem nameCategory="Saladas" />
            <CategorialItem nameCategory="Massas" />
            <CategorialItem nameCategory="Carnes" />
            <CategorialItem nameCategory="Bebidas" />
            <CategorialItem nameCategory="Doces" />
            <CategorialItem nameCategory="Japonesa" />
            <CategorialItem nameCategory="Brasileira" />

          </View>
        </ScrollView> */}


        {/* <View style={{ flexDirection: 'row', gap: "15%", marginBottom: '3%' }}>
          <View>
            <Text>
              Receitas em destaque</Text>
          </View>
          <View>
            <Text style={{ color: '#76C457', fontSize: 12 }}>Ver todas </Text>
          </View>
        </View>

        <ScrollView>
          <RecipeCard nameFood="Macarrão á Carbonara"
            categoryFood="Massas"
            dificultFood="Médio"
            onPress={() => { Alert.alert("Muita massa") }}>
          </RecipeCard>
          <RecipeCard nameFood="Cheescake"
            categoryFood="Doces"
            dificultFood="Difícil"
            onPress={() => { Alert.alert("Muito doce") }}>
          </RecipeCard>
          <RecipeCard nameFood="Sanduiche"
            categoryFood="Lanches"
            dificultFood="Fácil"
            onPress={() => { Alert.alert("lanchinho") }}>
          </RecipeCard>
          <RecipeCard nameFood="Hot Holl"
            categoryFood="Japonesa"
            dificultFood="Difícil"
            onPress={() => { Alert.alert("lanchinho") }}>
          </RecipeCard>
        </ScrollView>


        <View>
          <Text style={{ color: "#76C457", textAlign: 'center' }}>
            Sair da conta
          </Text>
        </View> */}

      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5F0'
  },
  recipeList: {
    flex: 1,
    width: '100%'
  },
  listContent: {
    paddingHorizontal: '5%',
    paddingBottom: 20
  },
  categoriesList: {
    gap: 12,
    paddingVertical: 20

  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 16
  },
  seeAll: {
    color: '#76C457',
    fontSize: 12
  },
  logout: {
    color: '#76C457',
    textAlign: 'center'
  }
})