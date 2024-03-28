import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-native-feather';
import LinearGradient from 'react-native-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-snap-carousel';
import NewsCard from '../components/NewsCard';
import newsSample from '../constants/data'

export default function StockScreen({ route }) {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const { stock_name } = route.params
  const [data, setData] = useState({})
  const [news , setNews] = useState({})
  const [time, setTime] = useState({currTime: new  Date().toLocaleString()})
  const postData = {
    stock: stock_name,
    time: '1month'
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const json = await fetch('http://10.0.2.2:5000/api/stocks/get_stock/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      const data1 = await json.json();
      console.log("triggered stocks")
      setData(data1)
      const json2 = await fetch(`https://newsapi.org/v2/everything?q=${stock_name}&apiKey=b632a301e6764941b057d0724633b3ff&pageSize=10&page=1`)
      const newsData = await json2.json()
      setNews(newsData)
      console.log("triggered news")
      console.log(news)
      setIsLoading(false)
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView className="bg-[#151818] min-h-screen pb-5">
      <ScrollView showsVerticalScrollIndicator={false} className="bg-[#151818] ">
        <View className="relative">
          <TouchableOpacity className="absolute top-9 left-5 bg-[#24252A] p-1 rounded-lg"
            onPress={() => { navigation.goBack() }}
          >
            <Icon.ArrowLeft strokeWidth={3} color={'white'} />
          </TouchableOpacity>

          <View className="justify-center pt-4">
            <View className="flex-row justify-center pt-3 space-x-3 items-center">
              <View>
                <Icon.CreditCard height={46} width={46} color={'white'} />
              </View>
              <View>
                <Text className="text-white text-2xl font-semibold ">{stock_name}</Text>
                <Text className=" text-gray-600 text-xs font-semibold">
                {stock_name}
                </Text>
              </View>
            </View>
          </View>
          {!isLoading &&
            <View className="px-5 ">
              <Text className="text-3xl text-white fon pt-7 pb-1">${parseFloat(data.values[0].close).toFixed(2)}</Text>
              <View className="flex-row items-center pb-1">
                <Icon.Triangle
                  height={10}
                  color={'#1BD85F'}
                  rotation={180}
                  fill={'#1BD85F'}
                />
                <Text className="text-xs text-gray-200 font-semibold">
                  -0.16(-0.12%)
                </Text>
              </View>
              <Text className="text-xs text-gray-500 pb-1">
                Last updated {time.currTime}
              </Text>
            </View>
          }


          <View className="mx-5 mt-4 bg-[#24252A] flex-row items-center justify-between space-x-3 rounded-2xl ">
            <TouchableOpacity onPress={() => { setIsActive(1) }} className="flex-1">
              {isActive == 1 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}

            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsActive(2) }} className="flex-1">
              {isActive == 2 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsActive(3) }} className="flex-1">
              {isActive == 3 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsActive(4) }} className="flex-1">
              {isActive == 4 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsActive(5) }} className="flex-1">
              {isActive == 5 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setIsActive(6) }} className="flex-1">
              {isActive == 6 ? <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#373B44', '#4286f4']}
                className="rounded-2xl p-1">
                <Text className="text-white text-center text-md font-semibold">
                  1Y
                </Text>
              </LinearGradient> : <Text className="text-gray-500 text-center text-md font-semibold">
                1D
              </Text>}
            </TouchableOpacity>
          </View>

          <View className="mt-5 px-1">
            <View className="pt-5 ">
              {!isLoading &&
                <LineChart
                  data={{
                    labels: [
                      data.values[5].datetime.substring(5, 7),
                      data.values[4].datetime.substring(5, 7),
                      data.values[3].datetime.substring(5, 7),
                      data.values[2].datetime.substring(5, 7),
                      data.values[1].datetime.substring(5, 7),
                      data.values[0].datetime.substring(5, 7),
                    ],
                    datasets: [
                      {
                        data: [
                          data.values[5].close,
                          data.values[4].close,
                          data.values[3].close,
                          data.values[2].close,
                          data.values[1].close,
                          data.values[0].close,
                        ],
                      },
                    ],
                  }}
                  width={screenWidth} // from react-native
                  height={220}
                  withVerticalLines={false}
                  yAxisLabel="$"
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#151818',
                    backgroundGradientFrom: '#151818',
                    backgroundGradientTo: '#151818',
                    decimalPlaces: 1, // optional, defaults to 2dp
                    barPercentage: 0.5,

                    useShadowColorFromDataset: true,
                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    // labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '2',
                      strokeWidth: '0',
                      stroke: '#ffa726',
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 2,
                    borderRadius: 16,
                  }}
                />
              }
            </View>
          </View>

          {!isLoading &&

            <View className="mx-5 mt-5 ">
              <Text className="text-xl text-white ">Performance</Text>
              <View className="rounded-2xl p-4 mt-4 bg-[#24252A] space-y-4">
                <View className="flex-row items-center justify-between">
                  <Text className="text-md text-white font-semibold">1 Day</Text>
                  <View className="flex-row space-x-2 items-center">
                    <Icon.Triangle
                      height={12}
                      color={(data.values[0].open - data.values[0].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                      rotation={(data.values[0].open - data.values[0].close).toFixed(2) < 0 ? 180: 0}
                      fill={(data.values[0].open - data.values[0].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                    />
                    <Text className="text-white font-semibold">{Math.abs(data.values[0].open - data.values[0].close).toFixed(2)}%</Text>
                    <Progress.Bar progress={Math.abs((data.values[0].open - data.values[0].close).toFixed(2)/100)} width={80} color={(data.values[0].open - data.values[0].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'} height={20} borderRadius={0} borderWidth={0} />
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-md text-white font-semibold">1 Month</Text>
                  <View className="flex-row space-x-2 items-center">
                    <Icon.Triangle
                      height={12}
                      color={(data.values[0].close - data.values[1].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                      rotation={(data.values[0].close - data.values[1].close).toFixed(2) < 0 ? 180: 0}
                      fill={(data.values[0].close - data.values[1].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                    />
                    <Text className="text-white font-semibold">{Math.abs(data.values[0].close - data.values[1].close).toFixed(2)}%</Text>
                    <Progress.Bar progress={Math.abs((data.values[0].close - data.values[1].close).toFixed(2))/100} width={80} color={(data.values[0].close - data.values[1].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'} height={20} borderRadius={0} borderWidth={0} />
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-md text-white font-semibold">3 Month</Text>
                  <View className="flex-row space-x-2 items-center">
                    <Icon.Triangle
                      height={12}
                      color={(data.values[0].close - data.values[3].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                      rotation={(data.values[0].close - data.values[3].close).toFixed(2) < 0 ? 180: 0}
                      fill={(data.values[0].close - data.values[3].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                    />
                    <Text className="text-white font-semibold">{Math.abs(data.values[0].close - data.values[3].close).toFixed(2)}%</Text>
                    <Progress.Bar progress={Math.abs(data.values[0].close - data.values[3].close).toFixed(2)/100} width={80} color={(data.values[0].close - data.values[3].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'} height={20} borderRadius={0} borderWidth={0} />
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-md text-white font-semibold">6 Month</Text>
                  <View className="flex-row space-x-2 items-center">
                    <Icon.Triangle
                      height={12}
                      color={(data.values[0].close - data.values[6].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                      rotation={(data.values[0].close - data.values[6].close).toFixed(2) < 0 ? 180: 0}
                      fill={(data.values[0].close - data.values[6].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                    />
                    <Text className="text-white font-semibold">{Math.abs(data.values[0].close - data.values[6].close).toFixed(2)}%</Text>
                    <Progress.Bar progress={Math.abs(data.values[0].close - data.values[6].close).toFixed(2)/100} width={80} color={(data.values[0].close - data.values[6].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'} height={20} borderRadius={0} borderWidth={0} />
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <Text className="text-md text-white font-semibold">1 Year</Text>
                  <View className="flex-row space-x-2 items-center">
                    <Icon.Triangle
                      height={12}
                      color={(data.values[0].close - data.values[12].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                      rotation={(data.values[0].close - data.values[12].close).toFixed(2) < 0 ? 180: 0}
                      fill={(data.values[0].close - data.values[12].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'}
                    />
                    <Text className="text-white font-semibold">{Math.abs(data.values[0].close - data.values[12].close).toFixed(2)}%</Text>
                    <Progress.Bar progress={Math.abs(data.values[0].close - data.values[12].close).toFixed(2)/100} width={80} color={(data.values[0].close - data.values[12].close).toFixed(2) < 0 ?'#D95C50':'#1BD85F'} height={20} borderRadius={0} borderWidth={0} />
                  </View>
                </View>

              </View>
            </View>

          }

          {!isLoading &&
          <View className=" my-5">
          <Text className="mx-5 text-xl text-white" >Recent News</Text>
          <View className="mt-5">
            <Carousel
              containerCustomStyle={{ overflow: 'visible' }}
              data={news.articles}
              renderItem={({ item }) => <NewsCard news = {item}/>}
              firstItem={1}
              inactiveSlideOpacity={0.70}
              inactiveSlideScale={0.75}
              sliderWidth={400}
              itemWidth={260}
              slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
          </View>
        </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
