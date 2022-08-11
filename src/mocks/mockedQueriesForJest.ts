import * as Gatsby from 'gatsby';

export function mockQuerySiteMetaData(): void {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        description: 'My description',
      },
    },
  }));
}
