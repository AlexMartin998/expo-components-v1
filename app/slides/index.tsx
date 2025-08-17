import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  View,
} from 'react-native';

import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  // controll slide -------
  const flatListRef = useRef<FlatList<Slide>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (scrollEnabled) return;

    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex === items.length - 1) {
      setScrollEnabled(true);
    }
  };
  const goToNextSlide = (index: number) => {
    if (index < 0 || index >= items.length) return;

    flatListRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        // ----
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // ---
        scrollEnabled={scrollEnabled}
        onScroll={onScroll}
      />

      {currentIndex < items.length - 1 ? (
        <ThemesButton
          classNameBtn="absolute bottom-10 right-5"
          onPress={() => {
            goToNextSlide(currentIndex + 1);
          }}
        >
          Next
        </ThemesButton>
      ) : (
        <ThemesButton
          classNameBtn="absolute bottom-10 right-5 "
          onPress={() => {
            router.dismiss();
          }}
        >
          Finish
        </ThemesButton>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

// ---------------------
interface SlideItemProps {
  item: Slide;
}

const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
  const { width, height } = useWindowDimensions();

  return (
    // view xq esta dentro del Flatlist y ReactNative debe tomer las dimensiones de la pantalla real, no del item
    <View style={{ width, height }}>
      <ThemedView className="flex-1 justify-center items-center p-10">
        <Image
          source={item.img}
          style={{
            width: width * 0.7,
            height: width * 0.7,
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />

        <ThemedText type="h1" className="text-center">
          {item.title}
        </ThemedText>

        <ThemedText className="px-10 mt-6 opacity-70">{item.desc}</ThemedText>
      </ThemedView>
    </View>
  );
};
