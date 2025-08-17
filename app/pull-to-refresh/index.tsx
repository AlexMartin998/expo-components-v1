import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

const PullToRefreshScreen = () => {
  // local state to fake http req ----------
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, []);

  // ----
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[
            primaryColor
          ]}
        />
      }
    >
      <ThemedView useMargin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
