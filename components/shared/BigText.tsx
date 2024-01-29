import { FC } from 'react';
import { Text } from 'react-native';
interface Props{
    text: string;
}

export const BigText: FC<Props>=(props)=>{
    return <>
    <Text className='text-indigo-800 text-3xl'>{props.text}</Text>
    </>
}