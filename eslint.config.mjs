import next from 'eslint-config-next'

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'project/**'] },
  ...next,
  {
    rules: {
      // The dragon GIF and the PFP tiles are plain <img>: the dragon is an
      // animated GIF (next/image would have to be `unoptimized` anyway) and the
      // PFP URLs come from the ON THE WALL API, i.e. arbitrary remote hosts.
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
