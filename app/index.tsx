import React from 'react';

import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import ThemedView from '@/presentation/shared/ThemedView';
import { View } from 'react-native';

const ComponentsApp = () => {
  return (
    <ThemedView useMargin>
      {animationMenuRoutes.map((route, idx) => (
        <MenuItem
          key={route.name}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={idx === 0}
          isLast={idx === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-2" />

      {uiMenuRoutes.map((route, idx) => (
        <MenuItem
          key={route.name}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={idx === 0}
          isLast={idx === uiMenuRoutes.length - 1}
        />
      ))}

      <View className="my-2" />

      {menuRoutes.map((route, idx) => (
        <MenuItem
          key={route.name}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={idx === 0}
          isLast={idx === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
