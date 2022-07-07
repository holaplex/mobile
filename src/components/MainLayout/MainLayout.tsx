import React, {ReactNode} from 'react';

import Headers from '@components/Headers/headers';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MainLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <SafeAreaView>
      <Headers />

      {children}
    </SafeAreaView>
  );
};
