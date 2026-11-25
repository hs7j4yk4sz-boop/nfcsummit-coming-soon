import next from 'eslint-config-next'

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'public/**', 'site/**'] },
  ...next,
]

export default config
