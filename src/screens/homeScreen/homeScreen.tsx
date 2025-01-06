import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View>
            <Text>homeScreen</Text>
            <Button  onPress={() => navigation.navigate('Search')}>
                Go to Details
            </Button>
        </View>
    )
}
