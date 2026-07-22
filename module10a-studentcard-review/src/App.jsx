import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentCard from './StudentCard';

function App() {
  
  return (
    <>
      <div>
      {/* Parent where all information is given to the child component (StudentCard). */}
      <StudentCard
        name="Emily Carter"
        major="Computer Science"
        year="Sophomore"
        bio="I enjoy building interactive web apps and working on open source projects in my spare time."
        imageUrl="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
      />
    </div>
    </>
  )
}

export default App
