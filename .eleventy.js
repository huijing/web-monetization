const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addNunjucksFilter('dateFormat', date => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-SG', options)
  })

  return {
    templateFormats: [
      "md",
      "njk"
    ],
    passthroughFileCopy: true,
    dir: {
      data: '../_data',
      input: 'src/views',
      output: 'docs'
    }
  }
}
