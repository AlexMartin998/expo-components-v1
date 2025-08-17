import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';

import { useAnimation } from '@/hooks/useAnimation';
import { useThemeColor } from '@/hooks/useThemeColor';

interface FadeInImageProps {
  photoId: number;
}

const FadeInImage = ({ photoId }: FadeInImageProps) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const primaryColor = useThemeColor({}, 'primary');

  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <>
      {loadingImage && (
        <View
          style={{
            width: '100%',
            height: 260,
            backgroundColor: '#f1f1f1',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size="small" color={primaryColor} />
        </View>
      )}

      <Animated.Image
        source={{
          uri: `https://picsum.photos/id/${photoId}/800/600`,
        }}
        onLoadStart={() => setLoadingImage(true)}
        onLoadEnd={() => {
          fadeIn();
          setLoadingImage(false);
        }}
        style={{ width: '100%', height: 260, opacity: animatedOpacity }}
      />
    </>
  );
};

export default FadeInImage;
