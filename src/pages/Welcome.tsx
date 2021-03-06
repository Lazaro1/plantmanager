import React from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

import waterningImg from '../assets/watering.png'
import colors from '../styles/colors';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image
                source={waterningImg}
                style={styles.image}
                resizeMode='contain'
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText} >
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </Text>
            </TouchableOpacity>

        </ SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 50,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 16,
        height: 56,
        width: 56,
    },
    image: {
        width: Dimensions.get('window').width * 0.7
        // height: 284
    },
    buttonIcon: {
        fontSize: 28,
        color: colors.white

    }
});