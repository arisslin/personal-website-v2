import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadata = {
  description: string;
};

type SiteMetadataQueryProps = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery<SiteMetadataQueryProps>(
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
