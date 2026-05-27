import {View, Text} from 'react-native'
import React from 'react'
import {Link, useLocalSearchParams} from "expo-router";

const SubsicriptionDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>()
    return (
        <View>
            <Text>Subsicription Details</Text>
            <Link href="/">Go Back</Link>
        </View>
    )
}
    export default SubsicriptionDetails
