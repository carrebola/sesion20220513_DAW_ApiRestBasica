


// rollup.config.js
import copy from 'rollup-plugin-copy'

export default {
  input: 'app/index.js',
  output: {
    file: 'dist/app.js',
    format: 'cjs'
  },
  plugins: [
    copy({
      targets: [
        { src: 'app/database.js', dest: 'dist' },       
        { src: 'app/src/**', dest: 'dist/src' }
      ]
    })
  ]
}