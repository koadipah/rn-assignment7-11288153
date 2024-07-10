import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterC from '../components/footerC';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
        setCartItems(cart);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItems();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      let cart = JSON.parse(await AsyncStorage.getItem('cart')) || [];
      cart = cart.filter(item => item.id !== productId);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      setCartItems(cart);
      Alert.alert('Success', 'Product removed from cart');
    } catch (error) {
      console.error(error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemTitle}>{item.title}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={{ alignItems: 'flex-end' }}>
          <Image source={require('../assets/images/Close.png')} style={styles.removeImage} />
        </TouchableOpacity>
        <Text style={styles.productDescription}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/images/Logo.png')} style={styles.icon2} />
        <Image source={require('../assets/images/Search(4).png')} style={styles.icon} />
      </View>
      <Text style={styles.text}>Checkout</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.diamond} />
        <View style={styles.line} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.text2}>EST. TOTAL</Text>
        <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
      </View>
      <FooterC navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    padding: 20
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
  },
  icon2: {
    width: 100,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    letterSpacing: 7,
    textAlign: 'center',
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    flex: 1,
  },
  diamond: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 10,
  },
  cartList: {
    paddingVertical: 20,
    marginTop: 10
  },
  cartItemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 180,
    height: 150,
    resizeMode: 'contain',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    color: '#f00',
    marginVertical: 5,
  },
  removeImage: {
    width: 20,
    height: 20,
    top: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20, 
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 5,
  }
});

export default CartScreen;
