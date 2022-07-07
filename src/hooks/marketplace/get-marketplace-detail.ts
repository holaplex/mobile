import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {getMarketPlace} from '@graphql/queries';

export const useGetMarketPlaceDetails = (subdomain: string) => {
  const queryRes = useQuery(gqlQuery(getMarketPlace), {
    variables: {
      subdomain,
    },
  });

  return {...queryRes};
};
