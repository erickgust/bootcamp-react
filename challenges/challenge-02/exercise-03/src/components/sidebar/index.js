import './sidebar.css'

export const Sidebar = ({ articles, setArticleTitle, setArticleContent }) => {
  function handleArticle (article) {
    setArticleTitle(article.title)
    setArticleContent(article.content)
  }
  
  return (
    <aside>
      <ul>
        {articles.map(article => (
          <li key={article.id} onClick={() => handleArticle(article)}>
            {article.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}

