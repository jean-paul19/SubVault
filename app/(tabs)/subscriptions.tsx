import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import {styled} from "react-native-css";

const SafeAreaView = styled(RNsafeAreaView);
const Subscriptions = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Subscriptions</Text>
        </SafeAreaView>
    )
}
export default Subscriptions
