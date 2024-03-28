import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ScrollCard({data}) {
    const navigation = useNavigation();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-3 space-x-3">
        {data.map((item)=>{
            return(
                <TouchableOpacity className="px-3 py-1 bg-[#24252A] rounded-md"
                key={item}
                onPress={()=>{navigation.navigate("Stock", {stock_name:item
                })}}
                >
                    <Text className="text-md text-gray-300">
                        {item}
                    </Text>
                </TouchableOpacity>
            )
        })}
    </ScrollView>
  )
}