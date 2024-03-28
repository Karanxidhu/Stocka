import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const data = {
  labels: ['MON', 'TUE', 'WED'], // optional
  data: [Math.random(), Math.random(), Math.random()],
};



export default function HomeScreen() {

  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState({currTime: new  Date().toLocaleString()})
  const [stockData, setStockData] = useState({})
  useEffect(()=>{
    async function fetchData (){

      const json = await fetch('http://10.0.2.2:5000/api/stocks/home_stocks')
      const data = await json.json();
      setStockData(data.home_data)
      setIsLoading(false)
    }
    fetchData();
  },[]);

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(200, 150, 100, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    barRadius: 2,
  };

  const data_array = []
  const home_box = Object.keys(stockData).forEach((key)=>{
    data_array.push({key:stockData[key]})
    // console.log(stockData[key])
  })
  // console.log(data_array)
  const navigation = useNavigation();
  return(
    <SafeAreaView className="flex-1 bg-[#151818]">
    <StatusBar className="dark-content" />
      <ScrollView verticle>
      <View className="pt-3 px-4 ">
        <View className="flex-row items-center justify-between">
          <View className=" space-x-1 space-y-1">
            <Text className="text-white text-2xl font-extrabold ">
              Hi, John!
            </Text>
            <Text className=" text-gray-500 text-lg font-extrabold">
            {time.currTime}
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("Notify")
          }}>
          <Icon.Bell className="h-4 w-4" color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="bg-[#24252A] m-5 rounded-2xl p-4 space-y-3">
        <Text className="text-white text-sm">My balance</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-white text-2xl">$16,825.13</Text>
          <View className=" flex-row px-2 space-x-4">
            <Icon.BarChart className="h-4 w-4 " color={'white'} />
            <Icon.PieChart className="h-4 w-4" color={'white'} />
          </View>
        </View>
        <View className="flex-row items-center">
          <Icon.Triangle height={10} color={'green'} fill={'green'} />
          <Text className="text-gray-500 text-xs">+20.25 (20%)</Text>
        </View>
        <ProgressChart
          data={data}
          width={320}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={true}
        />
      </View>
      <View className=" flex-row justify-between items-center">
      <Text className="px-5 text-xl text-white ">WatchList</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate("All")}}        className="flex-row items-center mx-5 p-1 px-2 bg-[#24252A] rounded-lg">
      <Text className="text-xl text-white" >All</Text>
      <Icon.ChevronRight height={30} width={30} color={'white'}/>
      </TouchableOpacity>
      </View>
      <View className="bg-[#24252A] m-5 rounded-2xl p-4 space-y-3">
        {!isLoading && data_array.map((key,item)=>{
          return(
            <TouchableOpacity key={item} onPress={()=>{navigation.navigate("Stock", {stock_name:key.key.meta.symbol
            })}}>
            <View className=" border-b-2 border-[#151818] border-dashed pb-3 mx-2 flex-row items-center space-x-5">
              <View className="p-3 bg-gray-700 rounded-full">
              <Icon.Feather height={36} width={36} color={'white'} />
              </View>
              <View className="flex-1 flex-row items-center justify-between">
                <View>
                <Text className="text-white text-lg font-bold">{key.key.meta.symbol}</Text>
                <Text className="text-xs text-gray-500">{key.key.meta.symbol}</Text>
                </View>
                <View className="">
                  <Text className="text-white font-bold text-lg">${parseFloat(key.key.values[0].close).toFixed(2)}</Text>
                  <View className={`rounded mt-1 ${(key.key.values[0].close-key.key.values[20].close)<0?" bg-[#d95b5041]":"bg-[#1bd8604e]"}  items-center justify-center `}>
                    <Text className={(key.key.values[0].close-key.key.values[20].close)<0?" text-[#D95C50]":"text-[#1BD85F]"}>{parseFloat(key.key.values[0].close-key.key.values[20].close).toFixed(2)}</Text>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </ScrollView>
  </SafeAreaView>
  )
  ;
}
