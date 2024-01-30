import { FC } from 'react';
import { Text,SafeAreaView,View,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Menu: FC=(props)=>{
    return <>
     <SafeAreaView>
        <View className='h-full bg-white w-screen'>
            <View className='flex flex-row flex-wrap p-2'>
                
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="person-circle" size={64} color="rgb(0,76,153)" />
                                <Text>User</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="list-outline" size={64} color="rgb(0,76,153)" />
                                <Text>Todo</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="film-outline" size={64} color="rgb(0,76,153)" />
                                <Text>Photo</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="copy-outline" size={64} color="rgb(0,76,153)" />
                                <Text>Album</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="chatbubbles-outline" size={64} color="rgb(0,76,153)" />
                                <Text>Comment</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <Pressable className='active:bg-blue-200 items-center'>
                                <Ionicons name="newspaper-outline" size={64} color="rgb(0,76,153)" />
                                <Text>Post</Text>
                            </Pressable>
                        </View>
                    </View>
            </View> 
        </View>   
        <Text>Menu</Text>
     </SafeAreaView>
       
    </>
}