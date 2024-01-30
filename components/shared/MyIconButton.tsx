import { FC } from 'react';
import { Text,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface Props{
    label: string;
    iconName: any;
    iconColor: string;
    iconSize?: number;
    whenPress?:() => void;
}
export const MyIconButton: FC<Props>=(props)=>{
    return <>
     <Pressable className='active:bg-blue-200 items-center'
     onPress={props.whenPress}>
        <Ionicons name={props.iconName} size={props.iconSize??24} color={props.iconColor} />
        <Text>{props.label}</Text>
    </Pressable>
    </>
}