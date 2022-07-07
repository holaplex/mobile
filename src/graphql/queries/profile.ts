export const featuredProfiles = `query featuredProfiles($userWallet: PublicKey, $limit: Int!,$offset:Int!) {
  followWallets(wallet: $userWallet, limit: $limit, offset: $offset) {
    address
    profile {
      handle
      profileImageUrlHighres
      bannerImageUrl
      __typename
    }
    nftCounts {
      owned
      created
      __typename
    }
    __typename
  }
}`;
