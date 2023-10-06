"use client"
import { useEffect, useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

export default function CardAnime({ anime }) {
  const [favoritos, setFavoritos] = useState([]); // Lista de IDs dos animes favoritos

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  function favoritar() {
    const novoFavoritos = [...favoritos, anime.mal_id];
    setFavoritos(novoFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novoFavoritos));
  }

  function desfavoritar() {
    const novoFavoritos = favoritos.filter((id) => id !== anime.mal_id);
    setFavoritos(novoFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novoFavoritos));
  }

  // Verifique se o ID do anime está na lista de favoritos
  const isFavorito = favoritos.includes(anime.mal_id);

  return (
    <div className="flex flex-col items-center w-40 m-2 gap-1 bg-zinc-700 rounded">
      <div className="relative">
        <img className="p-1 h-60" src={anime.images.jpg.image_url} alt="" />


        {isFavorito ? (
          <HeartIconSolid
            className="h-6 w-6 absolute top-0 right-0 m-1.5 cursor-pointer text-red-400"
            onClick={desfavoritar}
          />
        ) : (
          <HeartIconOutline
            className="h-6 w-6 absolute top-0 right-0 m-1.5 cursor-pointer hover:text-red-500"
            onClick={favoritar}
          />
        )}

        <div className="flex items-center gap-1 bg-zinc-400 px-1 py-0.5 rounded absolute bottom-0 right-0 m-1.5 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-amber-400"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="#">{anime.score.toFixed(2)}</span>
        </div>

        <span className="bg-zinc-700 p-1 rounded absolute bottom-0 left-0 m-1.5 text-xs">
          {anime.type === "Movie" ? "Filme" : anime.episodes === 1 ? anime.episodes + " Episódio" : anime.episodes + " Episódios"}
        </span>
      </div>

      <span className="text-lg w-full line-clamp-1 text-center">{anime.title}</span>
    </div>
  );
}