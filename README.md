# Dependências
>> utilizar o npm para instalar no projeto
react-icons (incluir ícones no projeto)
axios (para consumir api)

# Componentes maiores
>> componentes que usam os componentes menores recebendos os conteúdos por props

Bio 
Search (atenção pois aqui recebemos os dados consumindo da API do github e fazemos a busca)

# Componentes menores

>> somente o esqueleto, os conteúdos serão inclusos por props

Title 
Subtitle
Text
Image
Header
Footer

# Estrutura do App

>> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import { Search } from './components/Search'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```