import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Calender from '../components/Calender';

const MovieScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedDate, setSelectedDate] = useState();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: route.params.title,
            headerStyle: {
                backgroundColor: "#F5F5F5",
                shadowColor: "transparent",
                shadowOpacity: 0.3,
                shadowOffset: { width: -1, height: 1 },
                shadowRadius: 3,
            },
        })
    }, [])
    return (
        <View>
            <ScrollView>
                <Calender selected={selectedDate} onSelectDate={setSelectedDate} />
            </ScrollView>
        </View>
    )
}

export default MovieScreen

const styles = StyleSheet.create({})