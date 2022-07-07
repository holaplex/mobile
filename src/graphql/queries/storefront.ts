export const listStoreFronts = `query storefronts {
  storefronts {
    address
    ownerAddress
    subdomain
    title
    description
    faviconUrl
    logoUrl
    bannerUrl
  }
}
`;
