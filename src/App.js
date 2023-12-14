import React, { useEffect, useState } from "react";

function GameRow( {game} ) {

  const win = game.win ? "Win" : "Los"

  return (
    <tr>
      <td>{game.hero_id}</td>
      <td>{game.villain_id}</td>
      <td>{win}</td>
    </tr>
  );
}

function GamesTable( {games} ) {

  const rows = [];

  games.forEach((game) => {
    rows.push(
      <GameRow
        game={game} />
    );
  });

  return (
    <div>
      <h1>Games</h1>
      <table>
        <thead>
          <tr>
            <th>Hero ID</th>
            <th>Villain ID</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/games")
    .then(response => response.json())
    .then(games => setGames(games));
  }, [])

  return (
    <GamesTable games={games}/>
  )
}
