import { Image } from 'expo-image';
import {Button, Platform, StyleSheet, TextInput, View} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import {TrueSheet} from "@lodev09/react-native-true-sheet";
import {useRef} from "react";

export default function HomeScreen() {
    const sheet = useRef<TrueSheet>(null)

    // Present the sheet ✅
    const present = async () => {
        await sheet.current?.present()
        console.log('horray! sheet has been presented 💩')
    }

    // Dismiss the sheet ✅
    const dismiss = async () => {
        await sheet.current?.dismiss()
        console.log('Bye bye 👋')
    }


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
        <Button onPress={present} title="Present sheet" />

        <TrueSheet ref={sheet} detents={['auto']}>
            <Button onPress={dismiss} title="dismiss" />

            <View style={{ padding: 16 }}>
                <TextInput
                    placeholder="Type something..."
                    style={{ borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8 }}
                />
            </View>
        </TrueSheet>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
