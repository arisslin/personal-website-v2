import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadata = {
  description: string;
};

type SiteMetadataQuery = {
  site: {
    siteMetadata: SiteMetadata;
  };
};
/**
 * Returns the site meta data by graphql
 * @returns {SiteMetadataQuery} site meta data
 */
export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
