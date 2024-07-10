import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Footer = ({ product }) => {
  const addToCart = async () => {
    try {
      const cart = await AsyncStorage.getItem('cart');
      const cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      alert('Product added to cart!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.rowContainer} onPress={() => addToCart(product)}>
          <Image source={require('../assets/images/plusf.png')} style={styles.image} />
          <Text style={styles.text}>ADD TO BASKET</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/images-1.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 70,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: 8, // Adjust as needed for spacing between image and text
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default Footer;
