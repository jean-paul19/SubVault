import { Tabs } from "expo-router";
import {tabs} from "@/constants/data";
import {View} from "react-native";
import clsx from "clsx";
import {Image} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {components, colors, spacing} from "@/constants/theme";

const tabBar= components.tabBar;

export default function TabLayout() {
    const insets= useSafeAreaInsets();
    const TabIcon =({focused,icon}:TabIconProps)=>{
        return(
            <View className="tabs-icon">
              <View className={clsx('tabs-pill',focused&&'tabs-active')}>
                  <Image source={icon} className="tabs-glyph"/>
              </View>
            </View>
        );
    };
return(
    <Tabs screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: insets.bottom + tabBar.bottomInset,
            left: tabBar.horizontalInset,
            right: tabBar.horizontalInset,
            height: tabBar.height,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: tabBar.radius,
            elevation: 0,
            overflow: 'hidden',
            borderTopWidth: 0,
            paddingBottom: 0,
            paddingTop: spacing[2],
        },
        tabBarItemStyle: {
            height: tabBar.height,
            justifyContent: 'center',
            alignItems: 'center',
        }
    }}>
        {tabs.map((tab)=>(
            <Tabs.Screen
                key={tab.name}
                name={tab.name}
                options={{
                    title:tab.title,
                    tabBarIcon:({focused})=>(
                       <TabIcon focused={focused} icon={tab.icon}/>
                    )
            }}/>
        ))}
    </Tabs>
   )
}
