import React from 'react';
import { Linking, StatusBar, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Cannot open the URL:", url);
      }
    } catch (error) {
      console.error("An error occurred while opening the URL:", error);
    }
  };

  const handleNavigationStateChange = (newState) => {
    const url = newState.url;
    if (url.includes('facebook.com') || url.includes('instagram.com') || url.includes('whatsapp.com') || url.startsWith('mailto:') || url.startsWith('tel:')){
      openLink(url);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: 'white' }} />
      <StatusBar hidden={true} />
      <WebView
        useWebKit={true}
        source={{ uri: 'https://peershine-jewelhk.xyz/' }} // Replace with the desired URL
        onNavigationStateChange={handleNavigationStateChange}
        startInLoadingState={true}
        contentInset={{top: 0}}
        contentInsetAdjustmentBehavior="always"
        automaticallyAdjustsScrollIndicatorInsets={true}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
};

export default App;