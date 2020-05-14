export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd9e9f021029cd28007ac3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-4-studio',
                  apiId: '29597bdb-96c4-4348-a641-290174a600cd'
                },
                {
                  buildHookId: '5ebd9e9f0530a0aa48bb283b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-4',
                  apiId: '2266ef3e-efd8-4b55-9413-2013d42dcf68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog-4',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
