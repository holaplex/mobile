import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {featuredBuyNowListingsDocument} from '@graphql/queries';

export const useListFeaturedBuyNowNFT = (limit: number, offset: number) => {
  const queryRes = useQuery(gqlQuery(featuredBuyNowListingsDocument), {
    variables: {
      limit,
      offset,
    },
  });

  return {...queryRes};
};
