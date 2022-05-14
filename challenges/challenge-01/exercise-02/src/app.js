import { Header } from './Header'
import { Menu } from './Menu'
import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { Footer } from './Footer'


const App = () => (
  <div className="container">
    <Header />
    <Menu />
    <Sidebar />
    <Content />
    <Footer />
  </div>
)

export default App
