import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { UPCOMING_SUBSCRIPTIONS } from '@/constants/data'

import { Link } from "expo-router";

const ListHeading = ({ title, href = "/subscriptions" }: ListHeadingProps) => {
    return (
        <View>
            <Link href={href as any} asChild>
                <TouchableOpacity activeOpacity={0.7} className="list-head">
                    <Text className="list-title">{title}</Text>
                    <View className="list-action">
                        <Text className="list-action-text">View all</Text>
                    </View>
                </TouchableOpacity>
            </Link>

            <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingRight: 20 }}
                renderItem={({ item }) => (
                    <View className="upcoming-card">
                        <View className="upcoming-row">
                            <Image source={item.icon} className="upcoming-icon" />
                            <View>
                                <Text className="upcoming-price">${item.price.toFixed(2)}</Text>
                                <Text className="upcoming-meta">{item.daysLeft} days left</Text>
                            </View>
                        </View>
                        <Text className="upcoming-name">{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}
export default ListHeading
