import dayjs from 'dayjs'

document.querySelector('button').addEventListener('click', () => {
  document.getElementById('result').textContent = dayjs().format('YYYY年MM月DD日')
})
