import { memo, useEffect, useState } from "react";

import { api } from "../services/api";
import { Button } from "./Button";

import "../styles/sidebar.scss"

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SelectedIdProps {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void
}

function SideBarComp({ selectedGenreId, setSelectedGenreId }: SelectedIdProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(res => {
      setGenres(res.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const SideBar = memo(SideBarComp, (prev, next) => {
  return Object.is(prev.selectedGenreId, next.selectedGenreId)
})