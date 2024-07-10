import React from 'react';
import { View, Image, StyleSheet,TouchableOpacity } from 'react-native';


const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/images/Menu(1).png')} style={styles.headerImage} />
      <Image source={require('../assets/images/Logo.png')} style={styles.headerImage2} />
      <View style={styles.header2}>
        <Image source={require('../assets/images/Search(4).png')} style={styles.headerImage} />
        <TouchableOpacity>
            <Image source={require('../assets/images/shopping bag.png')} style={styles.headerImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  header2: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerImage2: {
    width: 100,
    height: 40,
    alignItems: 'center',
    resizeMode: 'contain',
  },
});

export default Header;
