export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ea8af26b1e75978e9619b90',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6rnr51py',
                  apiId: '63dd8265-44b2-42a7-8252-bee904745c0c'
                },
                {
                  buildHookId: '5ea8af260f385a0192bde494',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k92huepq',
                  apiId: '905a6fc1-8cd5-4ec4-919d-6d58f40a29e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rodrigojeansantos/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k92huepq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
