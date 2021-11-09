import { useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}