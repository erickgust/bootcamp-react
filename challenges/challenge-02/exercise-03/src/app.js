import { Header } from './components/header'
import { Menu } from './components/menu'
import { Sidebar } from './components/sidebar'
import { Content } from './components/content'
import { Footer } from './components/footer'
import { useState } from 'react'

const articles = [
  {
    "id": 1,
    "title": "Agora é oficial: o Windows 11 está vindo",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
  },
  {
    "id": 2,
    "title": "Tim Berners-Lee vai leiloar código-fonte da web",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
  },
  {
    "id": 3,
    "title": "Tem Firefox novo no pedaço e você vai querer migrar",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
  },
  {
    "id": 4,
    "title": "John McAfee, criador do antivírus McAfee, morre",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
  }
]

const App = () => {
  const [articleTitle, setArticleTitle] = useState(articles[0].title)
  const [articleContent, setArticleContent] = useState(articles[0].content)

  return (
    <div className="container">
      <Header />
      <Menu />
      <Sidebar
        articles={articles}
        setArticleTitle={setArticleTitle}
        setArticleContent={setArticleContent}
      />
      <Content articleTitle={articleTitle} articleContent={articleContent} />
      <Footer />
    </div>
  )
}
export default App
