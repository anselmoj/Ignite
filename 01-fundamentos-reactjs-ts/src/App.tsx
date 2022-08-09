import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { SideBar } from "./components/SideBar"

import './global.css'

import sytles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/anselmoj.png',
      name: 'Paulo Jr',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site / portfólio.Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'link', content: 'devonlane.design', },
    ],
    publishedAt: new Date('2022-08-14 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/IgorMoraes15.png',
      name: 'Igor Moares',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site / portfólio.Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻', },
      { type: 'link', content: 'devonlane.design', },
    ],
    publishedAt: new Date('2021-09-25 12:14:24')
  }

]

export function App() {
  return (
    <div>
      <Header />

      <div className={sytles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
