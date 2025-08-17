import { memo, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import FadeInImage from '@/presentation/components/images/FadeInImage';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

const initialValues = [
  { id: '1', title: 'Item 1', photoId: 1 },
  { id: '2', title: 'Item 2', photoId: 2 },
  { id: '3', title: 'Item 3', photoId: 3 },
];

const InfiniteScrollScreen = () => {
  // load data -----------------
  const [numbers, setNumbers] = useState(initialValues);

  const loadMoreItems = () => {
    const nextItems = Array.from({ length: 10 }, (_, index) => ({
      id:
        (numbers.length + index + 1).toString() +
        Math.random().toString(36).substring(2, 9), // clave única para react
      title: `Item ${numbers.length + index + 1}`,
      photoId: Math.floor(Math.random() * 1000), // valor numérico para id de picsum
    }));

    setTimeout(() => {
      setNumbers(prevNumbers => [...prevNumbers, ...nextItems]);
    }, 1000);
  };

  // ---------
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <ThemedView>
      <ThemedText type="h3">Infinite Scroll: {numbers.length}</ThemedText>

      <FlatList
        data={numbers}
        renderItem={({ item }) => <MemoListItem item={item} />}
        keyExtractor={item => item.id}
        // ----
        onEndReached={loadMoreItems} // legamos al final
        onEndReachedThreshold={0.6} // cuando estamos al 60% del final ya carga
        // ----
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size="small" color={primaryColor} />
          </View>
        )}
        // optimizaciones ----
        initialNumToRender={6} // monta menos al inicio
        maxToRenderPerBatch={6} // renderiza menos por lote
        windowSize={10} // menos elementos en memoria a la vez
        removeClippedSubviews={true} // elimina sub-vistas fuera de la pantalla
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

// -----------------------------------------
interface ListItemProps {
  item: {
    id: string;
    title: string;
    photoId: number;
  };
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <ThemedCard className="my-3 overflow-hidden rounded-3xl bg-white shadow-xl">
      <View className="p-4">
        <FadeInImage photoId={item.photoId} />

        <ThemedText type="h3" className="text-xl font-semibold tracking-wide">
          {item.title}
        </ThemedText>
      </View>
    </ThemedCard>
  );
};

const MemoListItem = memo(ListItem);
