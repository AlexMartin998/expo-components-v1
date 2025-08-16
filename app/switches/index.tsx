import { useState } from 'react';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView useMargin>
      <ThemedCard>
        <ThemedSwitch
          text="Enable Notifications"
          value={state.isActive}
          onValueChange={value =>
            setState(prev => ({ ...prev, isActive: value }))
          }
          className="mb-2"
        />

        <ThemedSwitch
          text="I am Hungry"
          value={state.isHungry}
          onValueChange={value =>
            setState(prev => ({ ...prev, isHungry: value }))
          }
          className="mb-2"
        />

        <ThemedSwitch
          text="I am Happy"
          value={state.isHappy}
          onValueChange={value =>
            setState(prev => ({ ...prev, isHappy: value }))
          }
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
