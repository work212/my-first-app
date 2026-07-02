import dayjs from 'dayjs'

window.showDate = () => {
  document.getElementById('result').textContent = dayjs().format('YYYY年MM月DD日')
}
