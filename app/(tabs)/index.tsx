import "@/global.css"
import {Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNsafeAreaView} from "react-native-safe-area-context";
import {styled} from "react-native-css";

const SafeAreaView = styled(RNsafeAreaView);
export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-7xl font-bold">
              HOME
            </Text>
            <Link href="/onboarding" className="mt-4 font-sans-bold  rounded bg-primary text-white p-4">Go to Onboarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded  font-sans-bold bg-primary text-white p-4">Go to Sign in</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded font-sans-bold  bg-primary text-white p-4">Go to Sign up</Link>


        </SafeAreaView>
    );
}