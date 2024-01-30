import { FC } from 'react';
import { Text,SafeAreaView,View,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {MyItem} from '../../shared/MyItem';

export const Menu2: FC=(props)=>{
    return <>
     <SafeAreaView>
        <View className='h-full bg-white w-screen'>
            <View className='flex flex-row flex-wrap p-2'>
                
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="User" iconColor="rgb(0,76,153)" iconName="person-circle" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="Todo" iconColor="rgb(0,76,153)" iconName="list-outline" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="Photo" iconColor="rgb(0,76,153)" iconName="film-outline" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="Album" iconColor="rgb(0,76,153)" iconName="copy-outline" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="Comment" iconColor="rgb(0,76,153)" iconName="chatbubbles-outline" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
                    <View className='w-1/3 p-1'>
                        <View className='items-center border-gray-600 border '>
                            <MyItem label="Post" iconColor="rgb(0,76,153)" iconName="newspaper-outline" whenPress={()=>{}} iconSize={64}/>
                        </View>
                    </View>
            </View> 
        </View>   
        <Text>Menu</Text>
     </SafeAreaView>
       
    </>
}