import { FC } from 'react';
import { Text,SafeAreaView,View,Button } from 'react-native';

export const Home: FC=(props)=>{
    return <>
    <SafeAreaView className='android:mt-5'>
        <View className='h-full py-6 px-6 bg-white'>
            <View className='bg-gray-50 shadow-lg border rounded-md'>
                <View className='mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
                    <Text className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Kantinam Makmee</Text>
                    <View className='pt-1'>
                        <Text className='font-bold text-orange-700'> Start editing to see some magic happen.</Text>
                    </View>
                    <View className='flex-row flex pt-4'>
                        <View className='flex-1 bg-green-300 rounded-lg'>
                            <Button onPress={()=>{}} title="Open"></Button>
                        </View>
                        <View className='flex-1'>

                        </View>
                    </View>
                </View>
            </View>
            <Text>Home</Text>
        </View>
        
    </SafeAreaView>
        
    </>
}