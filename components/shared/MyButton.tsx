import { FC } from 'react';
import { Pressable,Text } from 'react-native';
interface Props{
    label: string;
    whenPress:() => void;
}

export const MyButton: FC<Props>=(props)=>{
    return <>
        <Pressable className='border bg-blue-400 p-2 rounded-md active:bg-blue-500'
            onPress={props.whenPress}
        >
        <Text className='text-white text-center'>{props.label}</Text>
        </Pressable>
    </>
}