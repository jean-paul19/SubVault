import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import dayjs from "dayjs";

interface UpcomingSubsicriptionCardProps {
    item: Subscription;
    expanded?: boolean;
    onPress?: () => void;
}

const UpcomingSubsicriptionCard = ({ item, expanded, onPress }: UpcomingSubsicriptionCardProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`sub-card ${expanded ? 'sub-card-expanded' : ''}`}
            style={{
                backgroundColor: item.color,
                borderTopRightRadius: 40,
                borderBottomLeftRadius: 40,
            }}
        >
            <View className="sub-head">
                <View className="sub-main">
                    <Image source={item.icon} className="sub-icon" />
                    <View className="sub-copy">
                        <Text className="sub-title">{item.name}</Text>
                        <Text className="sub-meta">{dayjs(item.renewalDate).format('MMMM D, HH:mm')}</Text>
                    </View>
                </View>
                <View className="sub-price-box">
                    <Text className="sub-price">${item.price.toFixed(2)}</Text>
                    <Text className="sub-billing">per month</Text>
                </View>
            </View>

            {expanded && (
                <View className="sub-body">
                    <View className="sub-details">
                        <View className="sub-row">
                            <Text className="sub-label">Payment Method</Text>
                            <Text className="sub-value">{item.paymentMethod}</Text>
                        </View>
                        <View className="sub-row">
                            <Text className="sub-label">Category</Text>
                            <Text className="sub-value">{item.category}</Text>
                        </View>
                        <View className="sub-row">
                            <Text className="sub-label">Started</Text>
                            <Text className="sub-value">{dayjs(item.startDate).format('MMM D, YYYY')}</Text>
                        </View>
                        <View className="sub-row">
                            <Text className="sub-label">Renewal Date</Text>
                            <Text className="sub-value">{dayjs(item.renewalDate).format('MMM D, YYYY')}</Text>
                        </View>
                        <View className="sub-row">
                            <Text className="sub-label">Status</Text>
                            <Text className="sub-value capitalize">{item.status}</Text>
                        </View>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
}
export default UpcomingSubsicriptionCard
