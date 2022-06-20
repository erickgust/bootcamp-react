import './sidebar.css'

export const Sidebar = ({ articles }) => (
  <aside>
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          {article.title}
        </li>
      ))}
    </ul>
  </aside>
)

