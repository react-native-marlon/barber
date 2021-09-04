import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { Text } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native"
 
export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            let token = ""
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(3000);
            if(token) {

            } else {
                navigation.navigate('SignIn');
            }
            // const token = await AsyncStorage.getItem('token');
        }
        checkToken();

    }, [])

    return (
        <Container>
            <Text className="xtext">Xgastos</Text>
            <LoadingIcon size="large" color="#fff"/>
        </Container>

    )
}
