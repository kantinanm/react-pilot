import { FC,useState } from 'react';
import { Text, View,SafeAreaView,Button } from 'react-native';
import {BigText} from '../shared/BigText';
import {MyButton} from '../shared/MyButton';


const HelloWorld:FC = () => {
  //let counter = 0;
  const [counter,setCounter]=useState(0);// สำหรับ track state, ทำเมื่อมีข้อมูลเปลี่ยนแปลง

  const showName =(num: number) =>{
    return "number = "+num;
  }

  const whenAdd =() =>{
    //counter =counter+1;
    setCounter(counter+1);
    console.log(counter);
  }

  return (
    <SafeAreaView>
      <View className="bg-indigo-100 h-screen pt-20 px-4">
        <BigText text='Welcome'/>
        <BigText text={showName(counter)}/>
        <Text className='text-red-500'>Hello World {showName(counter)}</Text>
        <Button onPress={whenAdd} title="Add"></Button>
        <View className='flex flex-row mt-2' >
          <View className='w-1/2'>
            <MyButton label='Add 2' whenPress={whenAdd}/> 
          </View>
          <View className='w-1/2 ml-2 shadow-md'>
            <MyButton label='Add 3' whenPress={whenAdd}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HelloWorld;

