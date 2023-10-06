import CardFilme from '@/components/CardFilme'
import NavBar from '@/components/NavBar'
import Titulo from '@/components/Titulo.jsx'

async function carregarDados(){
  const url = "https://api.jikan.moe/v4/top/anime"
  const response = await fetch(url)
  const json = await response.json()
  return json.data
}

export default async function Home() {

  //mock
  const  animes = await carregarDados()  

  return ( //JSX
    <>
      <NavBar/>

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {animes.map( anime => <CardFilme anime={anime} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>

    </>
  )
}
