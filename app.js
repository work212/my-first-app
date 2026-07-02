import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const { data } = await supabase.from('tasks').select('*')

const result = document.getElementById('result')
data.forEach(task => {
  const li = document.createElement('li')
  li.textContent = task.title
  result.appendChild(li)
})
