import { useStaticQuery, graphql } from 'gatsby';

type SiteMetaData = {
  description: string;
};

type SiteMetaDataQuery = {
  site: {
    siteMetadata: SiteMetaData;
  };
};
/**
 * Returns the site meta data by graphql
 * @returns {SiteMetadataQuery} site meta data
 */
export const useSiteMetaData = (): SiteMetaData => {
  const { site } = useStaticQuery<SiteMetaDataQuery>(
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
