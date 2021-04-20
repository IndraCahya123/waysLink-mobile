import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, StyleSheet, Image, View, Text, ImageBackground } from 'react-native';

import BurgerIcon from './icon/square.png';
import bgImage from './icon/Bg.png';
import Phone from './icon/Phone.png';
import PC from './icon/PC.png';

const HomeScreenStack = createStackNavigator();

export default function HomeScreen({navigation}) {
    return (
        <>
            <HomeScreenStack.Navigator>
                <HomeScreenStack.Screen name="HomeScreen" component={homeComponent} options={{
                    title: "WaysLink",
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        return (
                            <>
                                <Pressable onPress={() => navigation.openDrawer()}>
                                    <Image
                                        style={{ width: 20, height: 20, marginTop: 3, marginLeft: 20 }}
                                        source={BurgerIcon}
                                    />
                                </Pressable>
                            </>
                        );
                    }
                }} />
            </HomeScreenStack.Navigator>
        </>
    );
}

const homeComponent = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <ImageBackground source={bgImage} style={styles.imageBg} >
                <View style={{position: 'relative', flexDirection: "row", height: 300, width: "100%"}}>
                    <Image style={{width: 100, height: 150, position: 'absolute', zIndex: 10, top: "35%", left: 30}} source={Phone} />
                    <Image style={{width: 250, height: 200, position: 'absolute', top: "20%", left: 60}} source={PC} />
                </View>
                <View style={{padding: 10}}>
                    <Text style={{ color: "#fff", fontFamily: "Roboto", fontSize: 32, fontWeight: 'bold' }}>The Only Link</Text>
                    <Text style={{ color: "#fff", fontFamily: "Roboto", fontSize: 32, fontWeight: 'bold' }}>You'll Ever Need</Text>
                    <Text style={{ width: 150, borderTopColor: "#000", borderWidth: 4, borderStyle: 'solid', borderBottomColor: "transparent", borderRightColor: "transparent", borderLeftColor: "transparent" }} ></Text>
                    <Text style={{color: "#fff", fontSize: 16}}>Add a link for your Social Bio and optimize your social media traffic.</Text>
                    <Text style={{color: "#fff", marginTop: 10, fontSize: 16}}>Safe, Fast and Easy to use</Text>
                </View>
                <Pressable onPress={() => navigation.navigate("Login")} style={{ position: 'absolute', bottom: 20, display: 'flex', width: "100%", alignItems: "center" }}>
                    <Text style={{backgroundColor: "#000", width: 170, fontSize: 18, color: "#fff", paddingVertical: 10, textAlign: 'center', borderRadius: 5}}>Get Started &nbsp; >></Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF9F00",
        height: "100%"
    },
    imageBg: {
        resizeMode: "cover",
        height: "100%"
    },
})