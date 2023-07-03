import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const TheatreScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [rows, setRows] = useState([
        {
            row: "A",
            seats: [
                { seat: "1", bookingStatus: "false" },
                { seat: "2", bookingStatus: "false" },
                { seat: "3", bookingStatus: "false" },
                { seat: "4", bookingStatus: "false" },
                { seat: "5", bookingStatus: "false" },
                { seat: "6", bookingStatus: "false" },
                { seat: "7", bookingStatus: "false" },
            ],
        },
        {
            row: "B",
            seats: [
                { seat: "1", bookingStatus: "false" },
                { seat: "2", bookingStatus: "false" },
                { seat: "3", bookingStatus: "false" },
                { seat: "4", bookingStatus: "false" },
                { seat: "5", bookingStatus: "false" },
                { seat: "6", bookingStatus: "false" },
                { seat: "7", bookingStatus: "false" },
            ],
        },
        {
            row: "C",
            seats: [
                { seat: "1", bookingStatus: "false" },
                { seat: "2", bookingStatus: "false" },
                { seat: "3", bookingStatus: "false" },
                { seat: "4", bookingStatus: "false" },
                { seat: "5", bookingStatus: "false" },
                { seat: "6", bookingStatus: "false" },
                { seat: "7", bookingStatus: "false" },
            ],
        },
        {
            row: "D",
            seats: [
                { seat: "1", bookingStatus: "false" },
                { seat: "2", bookingStatus: "false" },
                { seat: "3", bookingStatus: "false" },
                { seat: "4", bookingStatus: "false" },
                { seat: "5", bookingStatus: "false" },
                { seat: "6", bookingStatus: "false" },
                { seat: "7", bookingStatus: "false" },
            ],
        },
    ]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                }}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                    <Text>{route.params.mall}</Text>
                </Pressable>
            ),
            headerTitle: "",
            headerStyle: {
                backgroundColor: "#F5F5F5",
                shadowColor: "transparent",
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3,
            },
        })
    }, []);
    const renderSeats = () => {
        return rows.map((row, rowIndex) => {
            return (
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                }} key={rowIndex}>
                    <View style={{
                        width: 30,
                        marginRight: 10,
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 15 }}>{row.row}</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            {row.seats.map((seat, seatIndex) => (
                                <Pressable style={[styles.seat]}>
                                    <Text>{seat.seat}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>
                </View>

            )
        })
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: "white",
        }}>
            <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15 }}>SCREEN THIS WAY</Text>
            <Text style={{ marginTop: 10, textAlign: "center", fontSize: 15, color: "gray", marginBottom: 20 }}>CLASSIC (240)</Text>

            {renderSeats()}
        </View>
    )
}

export default TheatreScreen

const styles = StyleSheet.create({
    seat: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#C0C0C0",
    }
})