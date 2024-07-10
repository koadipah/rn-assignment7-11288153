import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../components/header';


const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style= {styles.buffer}>Loading...</Text>
      </View>
    );
  }

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
            <Image source={require('../assets/images/Plus.png')} style={styles.plusIcon} />
        </TouchableOpacity>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>reversible angora cardigan</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
    </View>
);



  return (
    <View style={styles.container}>
        <Header />
        <View style = {styles.headerContainer}>
            <Text style = {styles.text}>OUR STORY</Text>
            <View style ={styles.iconContainer}>
                <Image source={require('../assets/images/Listview.png')} style={styles.icon} />
                <Image source={require('../assets/images/Filter.png')} style={styles.icon} />
            </View>
        </View>
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buffer: {
    textAlign: 'center'
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        position: 'relative',
  },
  productImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
  },
  productDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  productCategory: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  plusIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 1,
    right: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    letterSpacing: 7,
    textAlign: 'center',
    marginBottom: 10,
  },
  headerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
