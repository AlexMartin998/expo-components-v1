import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemedViewProps extends ViewProps {
  className?: string;
  useMargin?: boolean;
  useSafeArea?: boolean;

  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  useMargin = false,
  useSafeArea = true,
  bgColor,
  children,
  ...props
}: ThemedViewProps) => {
  // bg color ----
  const themeBackground = useThemeColor({}, 'background');
  const backgroundColor = bgColor ?? themeBackground;

  // safe area ----
  const safeArea = useSafeAreaInsets();

  return (
    <View
      // className="bg-light-background dark:bg-dark-background"
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: useSafeArea ? safeArea.top : 0,
          marginHorizontal: useMargin ? 10 : 0,
        },
      ]}
      className={className}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedView;
