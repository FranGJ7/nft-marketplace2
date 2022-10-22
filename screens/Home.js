import { useState } from "react"
import { Text, View, SafeAreaView, FlatList} from "react-native"

import {COLORS, NFTData} from "../constants"
import { NFTCard, HomeHead, FocusedStatusBar } from "../components"

export const Home = () =>{
    return(
       <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar styles={COLORS.primary}/>

            <View styles={{flex:1}}>
                <View styles={{zIndex:0}}>
                   <FlatList data={NFTData}
                   renderItem={({item})=><NFTCard data={item}/>} 
                   keyExtractor={(item)=>item.id}
                   showsVerticalScrollIndicator={false}
                   ListHeaderComponent={<HomeHead/>}
                   />
               </View>
               <View style={{
                position: "absolute",
                top:0,
                bottom: 0,
                right:0,
                left:0,
                zIndex:-1}}>
                    <View style={{height: 300, backgroundColor: COLORS.primary }}/>
                    <View style={{flex:1, backgroundColor: COLORS.white }}/>
               </View>
            </View>
       </SafeAreaView>
    )
} 