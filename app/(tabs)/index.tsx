import "@/global.css";
import {Text, View, Image, TouchableOpacity, ScrollView, FlatList,} from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";
import { styled } from "react-native-css";
import {HOME_BALANCE, HOME_SUBSCRIPTIONS, UPCOMING_SUBSCRIPTIONS, HOME_USER,} from "@/constants/data";
import images from "@/constants/images";
import { icons } from "@/constants/icons";

import {useSafeAreaInsets} from "react-native-safe-area-context";
import {components} from "@/constants/theme";
import {formatCurrency} from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcomingSubsicriptionCard from "@/components/UpcomingSubsicriptionCard";

import { Link } from "expo-router";
import { useState } from "react";

const SafeAreaView = styled(RNsafeAreaView);

export default function Home() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = components.tabBar.height + components.tabBar.bottomInset + insets.bottom;

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          padding: 20,
          paddingBottom: tabBarHeight + 20 
        }}
      >
        {/* Header */}
        <View className="home-header">
          <View className="home-user">
            <Image source={images.avatar} className="home-avatar" />
            <Text className="home-user-name">{HOME_USER.name}</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.plus} className="home-add-icon" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View className="home-balance-card">
          <Text className="home-balance-label">Balance</Text>
          <View className="home-balance-row">
            <Text className="home-balance-amount">${formatCurrency(HOME_BALANCE.amount)}</Text>
            <Text className="home-balance-date">{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
          </View>
        </View>

        <ListHeading title="Upcoming" href="/subscriptions?filter=upcoming" />

        {/* All Subscriptions */}
        <Link href="/subscriptions" asChild>
          <TouchableOpacity activeOpacity={0.7} className="list-head">
            <Text className="list-title">All Subscriptions</Text>
            <View className="list-action">
              <Text className="list-action-text">View all</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <View className="gap-4">
          {HOME_SUBSCRIPTIONS.map((item) => (
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
  );
}