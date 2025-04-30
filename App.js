import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import ProductCard from './components/ProductCard';
import Image1 from './assets/Sabonete Facial.webp'
import Image2 from './assets/Curvex.webp'
import Image3 from './assets/Batom Matte.jpeg'
import Image4 from './assets/Paleta.jpeg'
import Image5 from './assets/Rimel.webp'
import Image6 from './assets/Delineador.webp'
import Image7 from './assets/Gloss Labial.jpg'


export default function App() {
  const products = [
    {
    name:'Sabonete Facial',
    price:'R$20,00',
    avatar:Image1,
    },

    {
    name:'Paleta de Sombra Colorida',
    price:'R$40,00',
    avatar:Image4,
    },

    {
    name:'Rímel',
    price:'R$15,00',
    avatar:Image5,
    },

    {
    name:'Delineador',
    price:'R$15,00',
    avatar: Image6,
    },

    {
    name:'Gloss Labial',
    price:'R$10,00',
    avatar: Image7,
    },

    {
    name:'Batom Matte',
    price:'R$40,00',
    avatar: Image3,
    },

    {
    name:'Curvex',
    price:'R$25,00',
    avatar: Image2,
    },
  ];
    return(
      <SafeAreaView style={styles.app}>
        <ScrollView>
          <Text style={styles.text}>Lista de Produtos</Text>
          {products.map((products, index)=>(
            <ProductCard 
            key={index}
            name={products.name}
            price={products.price}
            avatar={products.avatar}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: "#b3b7ee",
  },
  
  text: {
    paddingTop: 35,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    margin: 16,
  }
})
