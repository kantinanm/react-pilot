import { FC,useState } from 'react';
import { Text,TextInput, View } from 'react-native';
import {BigText} from '../shared/BigText';
import {MyButton} from '../shared/MyButton';
import {MyInput} from '../shared/MyInput';
import {z} from 'zod';
import {SubmitHandler,SubmitErrorHandler,useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'; //parser ให้สำหรับกระบวนการ validate

//สำหรับการตรวจสอบ validator
const LoginSchema = z.object({
    email:z.string().email(), // declare การ validate
    password:z.string().min(3),
})

type LoginModel = z.infer<typeof LoginSchema>;// declare โครงสร้างของ json obj
/**
 *  value={email}
 * onChangeText={(s)=>setEmail(s)}
 * 
 * {...register('email')} ,// จุดสามจุด หรือ space function เป็น js สำหรับการ merge หรือผนวกเข้าไปใน element
 * 
 * handleSubmit มันเป็น function , ถ้าสำเร็จให้ทำอะไร , ถ้าไม่สำเร็จให้ทำอะไร
 * 
 * <MyButton label='Reset' whenPress={()=>{}}/> ,declare สำหรับเตรียมรอ implement function ปุ่ม
 * 
 */

// Proproties
interface Props{
    label: string;
}
export const Login2: FC<Props>=(props)=>{
    //อะไรก็ตามที่อยู่ใน FC ทำงานเมื่อ มีการเปลี่ยนแปลง หรือ render ใหม่ , ทุกครั้ง
    
    //ใช้งาน useState 
    //const[email,setEmail] = useState("a@a.com");

    //เป็นการ map การ Validate
    const {control,register,handleSubmit}=useForm<LoginModel>({
        resolver:zodResolver(LoginSchema)
    });

    const validateSuccess : SubmitHandler<LoginModel> =(data) =>{
        console.log(data);
        //Alert.alert("Title",data.email);
        
    }

    const validateFail :SubmitErrorHandler<LoginModel> =(error) =>{
        console.log(error);
        //Alert.alert("Success",data.email);
    }


    return <>
    <View className='flex flex-col h-screen p-4 bg-slate-400'>
        <View className='w-full mt-20 items-center'>
            <BigText text={props.label}/>
        </View>
        <View>
            <MyInput name="email" label="Email (Component)" control={control}></MyInput>
        </View>
        <View>
            <MyInput name="password" label="Password (Component)" control={control} secureTextEntry={true}></MyInput>
        </View>
        <View className='flex flex-row gap-2 pt-3'>
            <View className="flex-1">
                <MyButton label='Login' whenPress={handleSubmit(validateSuccess,validateFail)}/> 
            </View>
            <View className="flex-1">
                <MyButton label='Reset' whenPress={()=>{}}/> 
            </View>
        </View>
    </View>
    </>
}