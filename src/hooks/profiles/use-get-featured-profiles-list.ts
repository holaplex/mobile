import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {featuredProfiles} from '@graphql/queries';

export const useGetFeaturedProfileList = (limit: number, offset: number) => {
  const queryRes = useQuery(gqlQuery(featuredProfiles), {
    variables: {
      limit,
      offset,
    },
  });

  return {...queryRes};
};
