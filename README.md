# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

This is a testing project for using React Native to build a webView application which available in both Android and iOS Platform

## Step 1: Install Dependencies

To start, run the following command from the _root_ of your React Native project:


```bash
# using npm
npx react-native init webview 

# install inside the webview folder inited before
npm install react-native-webview
npm install react-native-linking  

## Step 2: Start your Application

Start the Metro bundler by running the following command:
```bash
### start
npx react-native start

### For Android

```bash
# using npm 
npx react-native run-android


### For iOS

```bash
# install in the ios folder first
pod install     

# using npm
npx react-native run-ios

# React-Native-WebView
