import { FC } from 'react';
import { Text,View,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface Props{
    label: string;
}
export const Main: FC<Props>=(props)=>{
    return <>
        <View className='bg-slate-500 w-screen h-screen relative'>
            <View>

            </View>
            <View  className="bottom-10 absolute bg-neutral-400 w-screen">
                <View className='flex flex-row gap-1 pt-3'>
                    <View className='w-1/4 mt-4'>
                        <Pressable className='active:bg-blue-200 items-center'>
                            <Ionicons name="home" size={24} color="black" />
                            <Text>MENU 1</Text>
                        </Pressable>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <Pressable className='active:bg-blue-200 items-center'>
                            <Ionicons name="home" size={24} color="black" />
                            <Text>MENU 2</Text>
                        </Pressable>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <Pressable className='active:bg-blue-200 items-center'>
                            <Ionicons name="home" size={24} color="black" />
                            <Text>MENU 3</Text>
                        </Pressable>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <Pressable className='active:bg-blue-200 items-center'>
                            <Ionicons name="home" size={24} color="black" />
                            <Text>MENU 4</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    </>
}