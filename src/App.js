import React, { useState } from 'react'
import Tweet from './tweets'

function App() {
  const [users, setUsers] = useState([
    { name: 'Hlela', message: 'I am simply the best', likes: '13k' },
    {
      name: 'Khayone',
      message: 'Man I love Miles as Spider Man',
      likes: '10k',
    },

    { name: 'Khaleesi', message: 'I miss Khal Drogo', likes: '45M' },
  ])

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  )
}

export default App
