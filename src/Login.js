import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import BackIcon from './icon/undo.png';

const LoginScreenStack = createStackNavigator();

export default function Login({navigation}) {
    return (
        <>
            <LoginScreenStack.Navigator>
                <LoginScreenStack.Screen name="LoginScreen" component={LoginComponent} options={{
                    title: "Login",
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        return (
                            <>
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Image
                                        style={{ width: 20, height: 20, marginTop: 3, marginLeft: 20 }}
                                        source={BackIcon}
                                    />
                                </Pressable>
                            </>
                        );
                    }
                }} />
            </LoginScreenStack.Navigator>
        </>
    );
}

const LoginComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Login</Text>
            <TextInput
                style={styles.inputText}
                placeholder="Email"
            />
            <TextInput
                style={[styles.inputText, {marginTop: 15}]}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 30, marginBottom: 5 }}>
                <Text style={styles.loginBtn}>Login</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
                <Text>Don't have account ? <Text style={{fontWeight: 'bold'}}>Join Us</Text></Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: 'center'
    },
    inputText: {
        width: 250,
        padding: 5,
        backgroundColor: "rgba(188, 188, 188, 0.25)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#BCBCBC",
        borderStyle: 'solid'
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 40,
        letterSpacing: 2,
        fontWeight: '900',
        marginBottom: 40
    },
    loginBtn: {
        backgroundColor: "#FF9F00",
        width: 250,
        fontSize: 18,
        color: "#fff",
        paddingVertical: 10,
        textAlign: 'center',
        borderRadius: 5
    }
});