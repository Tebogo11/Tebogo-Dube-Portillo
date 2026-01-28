import { Chess } from "chess.js";
import { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import Tilt from "react-parallax-tilt";
import { GAMES_PGN } from "./chessGames";

const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const MY_USERNAME = "ChessBabyChess1";

const ChessPlayer = () => {
  // 1) Your PGN array

  // ---- Helpers ----
  const parsePgnToMoves = (pgn: string): string[] => {
    const tmp = new Chess();
    tmp.loadPgn(pgn);

    return tmp.history(); // SAN list
  };

  const parsePgnPlayers = (pgn: string): { white?: string; black?: string } => {
    // Very simple tag extraction: [White "name"]
    const whiteMatch = pgn.match(/\[White\s+"([^"]+)"\]/);
    const blackMatch = pgn.match(/\[Black\s+"([^"]+)"\]/);

    return {
      white: whiteMatch?.[1],
      black: blackMatch?.[1],
    };
  };

  // ---- Replay state ----
  const chessRef = useRef<Chess | null>(null);

  const [fen, setFen] = useState(START_FEN);

  const [gameIndex, setGameIndex] = useState(0);
  const [moves, setMoves] = useState<string[]>([]);
  const [moveIndex, setMoveIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);
  // const [moveLog, setMoveLog] = useState<string[]>([]);

  const [players, setPlayers] = useState<{ white?: string; black?: string }>(
    {},
  );

  // Derived: your color + opponent for current game
  const myColor =
    players.white === MY_USERNAME
      ? "White"
      : players.black === MY_USERNAME
        ? "Black"
        : "Unknown";

  // const opponent =
  //   myColor === "White"
  //     ? players.black
  //     : myColor === "Black"
  //       ? players.white
  //       : undefined;

  // Load/prepare the current PGN when gameIndex changes
  useEffect(() => {
    const init = () => {
      const pgn = GAMES_PGN[gameIndex];
      const nextMoves = parsePgnToMoves(pgn);

      // Parse headers for display
      setPlayers(parsePgnPlayers(pgn));

      // Create fresh chess instance (no ref reads during render)
      const fresh = new Chess();
      chessRef.current = fresh;
      setFen(fresh.fen());

      setMoves(nextMoves);
      setMoveIndex(0);
      // setMoveLog([]);
    };
    init();
  }, [GAMES_PGN, gameIndex]);

  // Tick through moves
  useEffect(() => {
    if (!isPlaying) return;
    if (moves.length === 0) return;

    const id = window.setInterval(() => {
      // If we finished this game, advance to next game in array (looping)
      if (moveIndex >= moves.length) {
        setGameIndex((prev) => (prev + 1) % GAMES_PGN.length);
        return;
      }

      const chess = chessRef.current;
      if (!chess) return;

      const san = moves[moveIndex];

      // Apply next move
      const move = chess.move(san);
      if (!move) {
        console.warn("Illegal/failed move from PGN:", san);
        setGameIndex((prev) => (prev + 1) % GAMES_PGN.length);
        return;
      }

      setFen(chess.fen());
      setMoveIndex((prev) => prev + 1);

      // const mover = move.color === "w" ? "White" : "Black";
      // setMoveLog((prev) => [...prev, `${mover}: ${move.san}`]);
    }, 1400);

    return () => window.clearInterval(id);
  }, [GAMES_PGN.length, isPlaying, moveIndex, moves]);

  return (
    <div>
      <div className="font-extralight text-[0.8rem] mb-2 opacity-55 w-72 mt-2">
        <Tilt>
          <Chessboard
            options={{
              position: fen,
              onPieceDrop: () => false,
              squareStyles: {},
              boardStyle: {
                backgroundColor: "#f0d9b5",
                borderRadius: "8px",
                boxShadow: `0 4px 8px rgba(0, 0, 0, 0.15)`,
              },
              showNotation: false,
              lightSquareStyle: { backgroundColor: "#0e223a" },
              darkSquareStyle: { backgroundColor: "oklch(38% 0.463 188.416)" },
            }}
          />
        </Tilt>

        {/* ✅ Your color display */}
        <div className="mt-2 text-[0.75rem] opacity-80">
          {/* You ({MY_USERNAME}): <span className="font-normal">{myColor}</span>
          {opponent ? (
            <>
              {" "}
              • Opponent: <span className="font-normal">{opponent}</span>
            </>
          ) : null} */}
          <p>Player: {myColor}</p>
        </div>

        <div className="mt-2 flex gap-2">
          <button
            className="cursor-pointer hover:font-bold px-3 py-1 bg-accent/20 hover:bg-accent/30 rounded-md text-[0.8rem] text-white"
            onClick={() => setIsPlaying((p) => !p)}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <button
            className="cursor-pointer hover:font-bold px-3 py-1 bg-accent/20 hover:bg-accent/30 rounded-md text-[0.8rem] text-white"
            onClick={() => setGameIndex((i) => (i + 1) % GAMES_PGN.length)}
          >
            Next Game
          </button>

          {/* <button
            className="px-3 py-1 bg-accent/20 hover:bg-accent/30 rounded-md text-[0.8rem]"
            onClick={resetAll}
          >
            Reset All
          </button> */}
        </div>

        {/* <div className="mt-2 text-[0.75rem] opacity-70">
          Game {gameIndex + 1}/{GAMES_PGN.length} • Move{" "}
          {Math.min(moveIndex, moves.length)}/{moves.length}
        </div> */}
      </div>

      {/* Move log optional */}
      {/* <div className="max-h-32 overflow-y-auto border-t border-white/20 pt-2 mt-2 text-[0.7rem] font-extralight">
        <h3 className="mb-1">Move Log:</h3>
        <ul>
          {moveLog.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default ChessPlayer;
