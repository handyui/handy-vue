module.exports = function cardWrapper(html) {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="card">${fragment}</div>`
      }

      return fragment
    })
    .join('')
}

/* 用来把h3、h2得模块分割出来，然后将h3的模块用<div class="card"></div>包裹起来
var html='<h3>ddddd</h3><h2>eeeeee</h2>'
let a =html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')
// ["", "<h3>ddddd</h3>", "<h2>eeeeee</h2>"]
a.map((fragment) => {
  if (fragment.indexOf('<h3') !== -1) {
    return `<div class="card">${fragment}</div>`
  }
  return fragment
})
// ["", "<div class="card"><h3>ddddd</h3></div>", "<h2>eeeeee</h2>"]
*/
