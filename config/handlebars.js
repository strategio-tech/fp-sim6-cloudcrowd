const {
  formatDate,
  stripTags,
  truncate,
  editIcon,
  select,
} = require('../helpers/hbs')
const { engine } = require('express-handlebars')

const handlebarsEngine = engine({
  helpers: {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select,
  },
  defaultLayout: 'main',
  extname: '.hbs',
})

module.exports = handlebarsEngine
