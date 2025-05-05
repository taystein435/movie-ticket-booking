import {
  View,
  Text,
  Animated,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from "expo-image";

const {width, height} = Dimensions.get('window');

const onBoardings = [
  {
    btn: 'Skip',
    title: 'Order for food',
    description:
      'Place your food orders from amazing chefs in your neighbourhood',
    img: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {    btn: 'Skip',
    title: 'Scheduled Ordering',
    description:
      'Schedule your food orders and carry on  with your day. We’ll deliver at the time its needed ',
    img: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    btn: 'Skip',
    title: 'Swift Delivery',
    description: 'Receive your food order in less than 1 hour! ',
    img: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    btn: 'Get started',
    title: 'Order Tracking',
    description:
      'Real-time tracking will keep you posted about your order process.',
    img:"https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const OnBoarding = () => {
  const [completed, setCompleted] = React.useState(false);
  const router = useRouter();
  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    const listenerId = scrollX.addListener(({value}) => {
      if (Math.floor(value / width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener(listenerId);
  }, []);

  // Create Content Child component

  function TopContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}>
        {onBoardings.map((item, index) => (
          <View key={`img-${index}`} style={styles.imageAndTextContainer}>
            <View
              style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={item.img}
                resizeMode="contain"
                style={{
                  width: width * 0.3,
                  height: height * 0.3,
                }}
              />
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: '25%',
                left: 40,
                right: 40,
              }}>
              <Text
                style={{
                  fontWeight: 700,
                  color: 'black',
                  fontSize: 19,
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>

              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                  marginTop: 8,
                  color: 'black',
                }}>
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: '15%',
                bottom: '7%',
                width: width * 0.7,
                height: height * 0.065,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
              onPress={() => router.navigate('/login')}>
              <Text
                style={{fontSize: 25, fontFamily: 'Poppins', color: 'white',fontWeight:'700'}}
              >
                {item.btn}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  //Create Dots  Child component
  function Dots() {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [8, 17, 8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[styles.dot, {width: dotSize, height: dotSize, opacity: opacity}]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>{TopContent()}</View>
      <View style={styles.dotsRootContainer}>{Dots()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAndTextContainer: {
    width: width,
  },
  dotsRootContainer: {
    position: 'absolute',
    //   bottom: height > 700 ? '20%' : '16%',
    bottom: '8%',
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: height * 0.08,
    height: height * 0.08,
  },
  dot: {
    borderRadius: 12,
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginHorizontal: 6,
  },
});

export default OnBoarding;
