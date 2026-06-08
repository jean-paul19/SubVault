import {Text, View, Image, TouchableOpacity, ScrollView, FlatList,} from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";
import { styled } from "react-native-css";
import {HOME_SUBSCRIPTIONS, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {components} from "@/constants/theme";
import UpcomingSubsicriptionCard from "@/components/UpcomingSubsicriptionCard";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const SafeAreaView = styled(RNsafeAreaView);
const Subscriptions = () => {
    const { filter } = useLocalSearchParams();
    const insets = useSafeAreaInsets();
    const tabBarHeight = components.tabBar.height + components.tabBar.bottomInset + insets.bottom;

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    const isUpcoming = filter === 'upcoming';
    const data = isUpcoming 
        ? UPCOMING_SUBSCRIPTIONS.map(up => ({
            ...up,
            billing: 'Monthly', // Defaulting for display
            color: '#8fd1bd', // Default color
            renewalDate: new Date(Date.now() + up.daysLeft * 24 * 60 * 60 * 1000).toISOString(),
            status: 'active',
            category: 'Upcoming'
        } as Subscription))
        : HOME_SUBSCRIPTIONS;

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 20,
                    paddingBottom: tabBarHeight + 20
                }}
            >
                <View className="list-head">
                    <Text className="list-title">{isUpcoming ? 'Upcoming Subscriptions' : 'All Subscriptions'}</Text>
                </View>

                <View className="gap-4">
                    {data.map((item) => (
                        <UpcomingSubsicriptionCard
                            key={item.id}
                            item={item}
                            expanded={expandedId === item.id}
                            onPress={() => toggleExpand(item.id)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Subscriptions
