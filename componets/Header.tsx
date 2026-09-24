import { Text, View, TextInput, Image, StyleSheet, ViewStyle } from 'react-native'

export function Header({ nomeUsuario }: { nomeUsuario: string }) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.styleContainerFlex}>
                    <View>
                        <Text style={styles.fontStyle}>
                            Olá, <Text> {nomeUsuario}</Text>
                        </Text>
                        <Text style={styles.subtitule}>O que vamos cozinhar?</Text>
                    </View>
                    <View>
                        <Image style={styles.imageStyle}
                            source={{ uri: "https://i.ytimg.com/vi/FuHRn5qsl6M/maxresdefault.jpg" }} />
                    </View>
                </View>
                <TextInput placeholderTextColor="rgba(0, 0, 0, 0.4)"
                    style={styles.searchBarStyle}
                    placeholder='Buscar receitas ou ingredientes' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18A77B',
        padding: '5%',
        borderRadius: 45
    },
    searchBarStyle: {
        backgroundColor: 'white',
        borderRadius: 26,
        borderWidth: 1.5,
        padding: '4%',
        margin: '1%',
        paddingLeft: '10%',
        borderColor: '#18A77B',
        fontSize: 10,

    },
    fontStyle: {
        color: 'white',
        opacity: 0.8

    },
    subtitule: {
        fontSize: 18,
        color: 'white'
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
    },
    styleContainerFlex: { 
        flexDirection: 'row',
        gap: 70,
        marginBottom: '5%',
        marginTop: '10%' }

})