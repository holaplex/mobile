import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {getNftDetails} from '@graphql/queries';

export const useGetNftDetails = (address: string) => {
  const queryRes = useQuery(gqlQuery(getNftDetails), {
    variables: {
      address,
    },
  });

  return {...queryRes};
};
