import { FC, useState } from 'react';
import { Text,View,Pressable } from 'react-native';
import {MyIconButton} from '../shared/MyIconButton';
import {Home} from './partial/Home';
import {Menu} from './partial/Menu';
import {Menu2} from './partial/Menu2';
import {Message} from './partial/Message';
import {Setting} from './partial/Setting';

interface Props{
    label: string;
}
export const Main2: FC<Props>=(props)=>{
    const[screenId,setScreenId] = useState(1);
    const displayScreen =()=>{
        switch(screenId){
            case 0: return <Home/>
            case 1: return <Menu2/>
            case 2: return <Message/>
            case 3: return <Setting/>
            default: return <Text>No component found !!!</Text>
        }
    }

    
    return <>
        <View className='bg-slate-500 w-screen h-screen relative'>
            <View>{displayScreen()}</View>
            <View  className="bottom-5 absolute bg-neutral-400 w-screen">
                <View className='flex flex-row gap-1 pt-3 mb-1'>
                    <View className='w-1/4 mt-4'>
                        <MyIconButton label="HOME" iconColor="blue" iconName="home" whenPress={()=>{setScreenId(0)}}/>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <MyIconButton label="MENU" iconColor="blue" iconName="menu" whenPress={()=>{setScreenId(1)}}/>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <MyIconButton label="Message" iconColor="blue" iconName="chatbubble" whenPress={()=>{setScreenId(2)}}/>
                    </View>
                    <View className='w-1/4 mt-4'>
                        <MyIconButton label="Message" iconColor="blue" iconName="settings" whenPress={()=>{setScreenId(3)}}/>
                    </View>
                </View>
            </View>
        </View>
    </>
}