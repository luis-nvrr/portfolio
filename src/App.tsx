import React from 'react'
import Emoji from '~/components/Emoji'
import Navbar from '~/components/Navbar/Navbar'
import ProfileCard from '~/components/Navbar/ProfileCard'

const App: React.FC = () => (
  <div className="flex flex-col neutral-200 h-screen w-screen bg-[url('/src/assets/background.svg')]">
    <Navbar />
    <main className="flex flex-col items-center p-6 max-w-sm mx-auto text-black-100 space-y-4">
      <ProfileCard />
      <div className="text-center text-lg">
        <p className="font-bold text-center mt-4">
          Hi there, I&apos;m Luis Navarro
        </p>
        <Emoji
          label="waving hand"
          symbol="&#128075;&#127997; &#128075;&#127997;"
        />
      </div>
      <p className="text-stone-900 text-center">
        I enjoy product development, solving problems and learning along the
        way.
        <br /> <strong>Get in touch</strong>!
      </p>
    </main>
  </div>
)

export default App
