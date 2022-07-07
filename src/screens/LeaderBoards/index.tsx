/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import HomePageTitle from '@components/HomePageTitle';
import {useGetFeaturedProfileList} from '@hooks/profiles';
import ProfilesToFollow from '@components/ProfilesToFollow';

import {styles} from './style';
import {MainLayout} from '@components/MainLayout/MainLayout';

const titleText = 'Profiles';

const LeaderBoards = () => {
  const [offset, setOffset] = React.useState(0);
  const {data: profileLists, loading} = useGetFeaturedProfileList(10, offset);
  const [profiles, setProfiles] = React.useState<any>([]);

  React.useEffect(() => {
    if (profileLists?.followWallets) {
      const newProfiles = profileLists?.followWallets.filter(
        (item: any) => item.profile,
      );

      const prevProfiles = profiles ? [...profiles] : [];
      setProfiles([...prevProfiles, ...newProfiles]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileLists?.followWallets]);

  const incrementOffset = () => {
    const newOffset = offset + 1;
    if (offset < 1) {
      setOffset(newOffset);
    }
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <View>
          <View style={styles.titleContainer}>
            <HomePageTitle title={titleText} showDiscoverAll={false} />
          </View>
          <FlatList
            data={profiles || []}
            keyExtractor={item => item?.profile?.handle}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={incrementOffset}
            renderItem={({item}) => (
              <ProfilesToFollow
                imageUrl={item?.profile?.bannerImageUrl}
                collected={item.nftCounts.owned}
                Created={item.nftCounts.created}
                name={item?.profile?.handle}
                avatar={item?.profile?.profileImageUrlHighres}
              />
            )}
          />
          {loading && <ActivityIndicator size="large" color="white" />}
        </View>
      </View>
    </MainLayout>
  );
};

export default LeaderBoards;
