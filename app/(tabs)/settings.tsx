import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import {styled} from "react-native-css";

const SafeAreaView = styled(RNsafeAreaView);
const Settings = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Settings</Text>
        </SafeAreaView>
    )
}
export default Settings
