import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FooterC = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.rowContainer} onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../assets/images/bag.png')} style={styles.image} />
          <Text style={styles.text}>CHECKOUT</Text>
        </TouchableOpacity>
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
    height: 60,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: 8, 
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

export default FooterC;
