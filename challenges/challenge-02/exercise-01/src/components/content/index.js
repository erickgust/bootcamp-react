import { Button } from '../button'
import { Title } from '../../Title'
import './content.css'

export const Content = ({ articleTitle, articleContent }) => (
  <main>
    <div>
      <Title as='h3'>HAYAO MIYAZAKI</Title>
      <Title as='h1'>A VIAGEM DE CHIHIRO</Title>

      <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>

      <Button kind='primary' />
      <Button kind='secondary' />

      <Title as='h2'>{articleTitle}</Title>
      <p>{articleContent}</p>
    </div>

  </main>
)


