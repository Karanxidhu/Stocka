import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import ScrollCard from '../components/ScrollCard';

export default function AllStocks() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-[#151818] min-h-screen pb-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-[#151818] ">
        <View className="relative">
          <TouchableOpacity
            className="absolute top-9 left-5 bg-[#24252A] p-1 rounded-lg"
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon.ArrowLeft strokeWidth={3} color={'white'} />
          </TouchableOpacity>
          <View className="justify-center pt-4">
            <View className="flex-row justify-center pt-3 space-x-3 items-center">
              <View>
                <Text className="text-white text-3xl font-semibold ">
                  Stocks
                </Text>
                <Text className=" text-gray-600 text-center text-xs font-semibold">
                  Available
                </Text>
              </View>
            </View>
          </View>
          <View className="mx-5 mt-5 flex-col space-y-2 ">
            <View>
              <Text className="text-xl text-white">Crypto</Text>
              <ScrollCard data={['BTC/USD']} />
            </View>
            <View>
              <Text className="text-xl text-white">US</Text>
              <ScrollCard data={['AAPL', 'QQQ', 'IXIC', 'VFIAX']} />
            </View>
            <View>
              <Text className="text-xl text-white">Canada</Text>
              <ScrollCard data={['TRP', 'SVI', 'MEDV']} />
            </View>
            <View>
              <Text className="text-xl text-white">India</Text>
              <ScrollCard data={['INFY']} />
            </View>
            <View>
              <Text className="text-xl text-white">Netherlands</Text>
              <ScrollCard data={['ADYEN']} />
            </View>
            <View>
              <Text className="text-xl text-white">Belgium</Text>
              <ScrollCard data={['BOTHE']} />
            </View>
            <View>
              <Text className="text-xl text-white">Portugal</Text>
              <ScrollCard data={['SLBEN']} />
            </View>
            <View>
              <Text className="text-xl text-white">France</Text>
              <ScrollCard data={['ALMIL']} />
            </View>
            <View>
              <Text className="text-xl text-white">Ireland</Text>
              <ScrollCard data={['DQ7A']} />
            </View>
            <View>
              <Text className="text-xl text-white">United Kingdom</Text>
              <ScrollCard data={['BT.A']} />
            </View>
            <View>
              <Text className="text-xl text-white">Germany</Text>
              <ScrollCard data={['MQ1','VOW3','4BD','MAOA','ADS']} />
            </View>
            <View>
              <Text className="text-xl text-white">China</Text>
              <ScrollCard data={['511880','002594']} />
            </View>
            <View>
              <Text className="text-xl text-white">Saudi Arabia</Text>
              <ScrollCard data={['4261']} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
