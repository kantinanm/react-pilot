import { FC } from 'react';
import { Text,TextInput, View } from 'react-native';
import {BigText} from '../shared/BigText';
import {MyButton} from '../shared/MyButton';

interface Props{
    label: string;
}
export const Login: FC<Props>=(props)=>{
    return <>
    <View className='flex flex-col h-screen p-4 bg-slate-400'>
        <View className='w-full mt-20 items-center'>
            <BigText text={props.label}/>
        </View>
        <View>
            <Text className="text-lg text-indigo-950">Email</Text>
            <TextInput className="border p-2 text-lg rounded-xl border-orange-600 py-1"></TextInput>
        </View>
        <View>
            <Text className="text-lg text-indigo-950">Password</Text>
            <TextInput className="border p-2 text-lg rounded-xl border-orange-600 py-1" secureTextEntry={true}></TextInput>
        </View>
        <View className='flex flex-row gap-2 pt-3'>
            <View className="flex-1">
                <MyButton label='Login' whenPress={()=>{}}/> 
            </View>
            <View className="flex-1">
                <MyButton label='Reset' whenPress={()=>{}}/> 
            </View>
        </View>
    </View>
    </>
}