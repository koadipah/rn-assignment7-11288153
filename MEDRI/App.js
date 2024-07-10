import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ViewProduct';
import Footer from './components/footer';
import FooterC from './components/footerC';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Footer" component={Footer} options={{headerShown: false}}/>
                <Stack.Screen name="FooterC" component={FooterC} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
