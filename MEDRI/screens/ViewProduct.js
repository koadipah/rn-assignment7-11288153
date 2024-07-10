import React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../components/footer';
import Header from '../components/header';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

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

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.iconContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Image source={require('../assets/images/Export.png')} style={styles.icon} />
      </View>
      <Text style={styles.productDescription}>Recycle Boucle Knit Cardigan Pink</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FlatList
        data={[product]} 
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        style={styles.flatList}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.bold}>Materials</Text>
        <Text>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <View style={styles.contain}>
          <View style={styles.row}>
            <Image source={require('../assets/images/Do Not Bleach.png')} style={styles.image}/>
            <Text style={styles.text}>Do not use bleach</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../assets/images/Do Not Tumble Dry.png')} style={styles.image}/>
            <Text style={styles.text}>Do not tumble dry</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../assets/images/Do Not Wash.png')} style={styles.image}/>
             <Text style={styles.text}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../assets/images/Iron Low Temperature.png')} style={styles.image}/>
            <Text style={styles.text}>Iron at a maximum of 110°C/230°F</Text>
          </View>
        </View>
        <View>
          <View style={styles.row2}>
            <View style={styles.row}>
              <Image source={require('../assets/images/Shipping.png')} style={styles.image}/>
              <View>
              <Text style={styles.text}>Free Flat Rate Shipping</Text>
              <Text style={styles.text}>Estimated to be delivered on</Text>
              <Text style={styles.text}>09/11/2021 - 12/11/2021.</Text>
              </View>
            </View>
            <Image source={require('../assets/images/Up.png')} style={styles.image}/>
          </View>
        </View>
      </View>
      <Footer product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  productContainer: {
    marginBottom: 7,
  },
  productImage: {
    marginTop: 7,
    width: 350,
    height: 350,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    marginLeft: 19,
  },
  row2: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 4,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  productDescription: {
    fontSize: 18,
    color: 'gray',
    marginTop: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  listContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 16,
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 20,
    fontStyle: 'italic',
  },
  contain: {
    marginBottom: 16,
  },
  flatList: {
    flexGrow: 0,
  },
});

export default ProductDetailScreen;
