import React from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

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

            <Image source={waterningImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
                sempre que precisar.
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
            >
                <Text
                    style={styles.buttonText}
                >
                    >
                </Text>
            </TouchableOpacity>
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
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
        width: 56
    },
    image: {
        width: 292,
        height: 284
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});