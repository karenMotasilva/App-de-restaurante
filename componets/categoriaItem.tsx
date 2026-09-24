import { View, Text, StyleSheet } from 'react-native'

export function CategorialItem({ nameCategory }: { nameCategory: String }) {
    return (
        <View>
            <View style={styles.imageCategory}>   </View>
            <Text style={styles.textCategory}>
                {nameCategory}
            </Text >
        </View>
    )
}

const styles = StyleSheet.create({
    imageCategory: {
        width: 75,
        height:75,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#18a77B',
        backgroundColor: 'white'

    },
    textCategory: {
        textAlign: 'center',
        fontSize: 12
    }
})