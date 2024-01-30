import { FC } from 'react';
import { Text,TextInput, View } from 'react-native';
import { Controller,Control} from 'react-hook-form';
interface Props{
    control: Control<any>;
    label:string;
    name:string;
    secureTextEntry?:boolean;
}
export const MyInput: FC<Props>=(props)=>{
    return <>
    <View>
            <Text className="text-lg text-indigo-950">{props.label}</Text>
            <Controller
                control={props.control}
                name={props.name}
                render={({field})=>
                    (
                    <TextInput className="border p-2 text-lg rounded-xl border-orange-600 py-1"
                    value={field.value}
                    onChangeText={field.onChange}
                    secureTextEntry={props.secureTextEntry}
                    ></TextInput>
                    )
                }
            />
    </View>
    </>
}