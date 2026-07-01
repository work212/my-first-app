import dayjs from './node_modules/dayjs/esm/index.js'

window.showDate = () => {
  document.getElementById('result').textContent = dayjs().format('YYYY年MM月DD日')
}