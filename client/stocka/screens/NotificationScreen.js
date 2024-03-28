import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

export default function NotificationScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#151818] min-h-screen pb-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-[#151818]">

            <Text className="text-gray-500 text-md text-center pt-24">No Notifications</Text>
            <TouchableOpacity
            className="absolute top-9 left-5 bg-[#24252A] p-1 rounded-lg"
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon.ArrowLeft strokeWidth={3} color={'white'} />
          </TouchableOpacity>
        </ScrollView>
        </SafeAreaView>
  )
}