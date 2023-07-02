import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
    const navigation = useNavigation();
    const moveAnimation = new Animated.Value(0);
    useEffect(() => {
        Animated.loop(
            Animated.timing(moveAnimation, {
                toValue: -30,
                duration: 2000,
                useNativeDriver: true,
            })
        ).start();
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Text>Hello Name</Text>,
            headerStyle: {
                backgroundColor: "#F5F5F5",
                shadowColor: "transparent",
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3,
            },
            headerRight: () => (
                <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <Ionicons onPress={() => navigation.navigate("Places")} name="ios-location-outline" size={24} color="black" />

                    <Pressable onPress={() => navigation.navigate("Places")}>
                        <Animated.Text style={[styles.text, { transform: [{ translateX: moveAnimation }] }]}>
                            <Text>Bangalore</Text>
                        </Animated.Text>
                    </Pressable>
                </Pressable>
            )
        })
    }, [])
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    }
})