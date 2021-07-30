import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import { StyleSheet, Text, View } from 'react-native';
import Wait from "../components/Wait";


function waitlist() {

  return (
      <View style={styles.container}>
          <Head>
              <title>Finanzi - Join Waitlist</title>
              <meta name="Finanzi" content="Finanzi is a wealth management app for indians." />
              <link rel="icon" href="/finanzi.png" />
          </Head>

          <div className="flex flex-col h-auto w-screen justify-center md:px-10">

              <Wait />

          </div>

      </View>
  );
}

export default waitlist;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
