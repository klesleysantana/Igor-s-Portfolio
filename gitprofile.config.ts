// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Igor-Barret0', // Your GitHub org/user name. (This is the only required config)
  },
  

  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [
            'Igor-Barret0/Portf-lio01',
            'Igor-Barret0/Igor-Barret0',
            'Igor-Barret0/Portf-lio',
          ], // Estes projetos não serão exibidos
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Getinfo',
          description:
            'Sistema para centralizar e automatizar a gestão do ciclo de vida de contratos, desde sua celebração até o encerramento.',
          imageUrl: './getinfo.png',
          link: 'https://getinfo-seven.vercel.app',
        },
        {
          title: 'MyQuimicaLab',
          description:
            'Projeto de Iniciação Científica com o foco em ensinar química orgânica através da experiência lúdica e descontraída de um jogo.',
          imageUrl:
            './myquimicalab.png',
          link: 'https://myquimicalab.github.io/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Igor Barreto', description: '', imageURL: '' },
  social: {
    linkedin: 'linkedin.com/in/igor-barreto-135ab2281/',
    discord: '1332680356175937571',
    Github: 'https://github.com/Igor-Barret0',
    email: 'ig0r.barr3to@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1jAXsUtOGDRff5vh3Zt7oM5PVqZm_IEtt/edit?usp=drive_link&ouid=115471461113663628545&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Python',
    'CSS',
    'JAVA',
  ],
  experiences: [
    {
      company: 'Secretaria de Estado da Educação',
      position: 'Estagiário',
      from: '10/03/2025',
      to: 'Atual',
      companyLink: 'https://seduc.se.gov.br/',
    },
    {
      company: 'Viação Atalaia LTDA',
      position: 'Aprendiz',
      from: '10/01/2024',
      to: '24/04/2025',
      companyLink: 'https://viacaoatalaia.com.br/',
    },
  ],
  educations: [
    {
      institution: 'Universidade Tiradentes',
      institutionLink: 'https://www.unit.br/',
      degree: 'Ciência de Computação',
      from: '2023',
      to: '2027',
    },
  ],
  certifications: [
    {
      body: 'ADA TECH',
      name: 'Banco de Dados',
      year: '15/06/2025',
    },
    {
      body: 'ADA TECH',
      name: 'Introdução a Plataforma Node.js',
      year: '20/06/2025',
    },
    {
      body: 'ADA TECH',
      name: 'Introdução ao Google Cloud',
      year: '26/03/2023',
    },
    {
      body: 'ADA TECH',
      name: 'Linguagem de Programação JAVA',
      year: '01/06/2025',
    },
    {
      body: 'ADA TECH',
      name: 'Linguagem de Programação Python',
      year: '01/03/2025',
    },
    {
      body: 'ADA TECH',
      name: 'GIT e Versionamento',
      year: '03/04/2025',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  enablePWA: true,
};

export default CONFIG;
