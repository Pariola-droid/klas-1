// @generated: @expo/next-adapter@2.1.75
import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import Landing from "../components/Landing";
import Features from "../components/Features";
import CoreFeatures from "../components/CoreFeatures";
import About from "../components/About";
import Download from "../components/Download";
import Footer from "../components/Footer";


function App() {

  return (
      <View style={styles.container}>
        <Head>
          <title>Klas - Create, Share & Earn</title>
          <meta name="Klas" content="Remote teaching platform for creating engaging online classes anywhere, anytime. Share and monetize your knowledge." />
          <link rel="icon" href="/klas.svg" />
        </Head>

        <div className="flex flex-col h-auto w-screen justify-start">

          <Landing />

          <Features />

          <CoreFeatures />

          <About />

          <Download />
          
          <Footer />

        </div>

      </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'whitesmoke',
  },
});
