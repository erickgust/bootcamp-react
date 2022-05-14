import { Button } from './Button'
import { Title } from './Title'
import './content.css'

export const Content = () => (
  <main>
    <div>
      <Title as='h3'>HAYAO MIYAZAKI</Title>
      <Title as='h1'>A VIAGEM DE CHIHIRO</Title>

      <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>

      <Button kind='primary' />
      <Button kind='secondary' />
    </div>
  </main>
)


