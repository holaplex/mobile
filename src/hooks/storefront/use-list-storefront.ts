import {useQuery} from '@apollo/client';

import {gqlQuery} from '@utils/helpers';
import {listStoreFronts} from '@graphql/queries';

export const useListStoreFront = () => {
  const queryRes = useQuery(gqlQuery(listStoreFronts), {
    fetchPolicy: 'network-only',
  });

  return {...queryRes};
};
