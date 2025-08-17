import { Link, router } from 'expo-router';

import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemesButton from '@/presentation/shared/ThemesButton';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className="mx-4">
        <ThemedText>Open Modal</ThemedText>
      </Link>

      <ThemesButton
        onPress={() => router.push('/modal/modal-window')}
        classNameBtn="mx-4 mt-4"
      >
        Open Modal
      </ThemesButton>
    </ThemedView>
  );
};
export default ModalScreen;
