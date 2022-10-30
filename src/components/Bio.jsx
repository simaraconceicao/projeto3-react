import { Subtitle } from "./Subtitle"
import { Text } from "./Text"
import { Image } from "./Image"


export function Bio () {
  return (
      <div className="card">
        <Subtitle text="Prazer, Simara Conceição!" />
        <Text paragraph="Ex-aluna reprograma, fiz migração de carreira após os 30 anos e vindo da área de marketing, Desenvolvedora de software na Thoughtworks e Criadora do podcast e canal quero ser dev" />
        <Image link="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="meu gif" />
      </div>
  )
}