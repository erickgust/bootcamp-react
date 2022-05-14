const menu = [
  {
    name: 'Home',
    link: '/home',
    id: 'home'
  },
  {
    name: 'Home',
    link: '/mobile-home',
    id: 'mobile-home'
  },
  {
    name: 'About',
    link: '/about',
    id: 'about'
  }
]

const App = () => (
  <ul>
    {menu.map((item) => (
      <li key={item.id}>
        <a href={item.link}>{item.name}</a>
      </li>
    ))}
  </ul>
)

export default App
