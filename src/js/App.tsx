import { useState } from 'react';
import '../style/style.scss';

function App() {
	const [winner, setWinner] = useState<string | null>(null);

	function handleClick(fieldNumber: number) {
		let array = [...game];
		if (array[fieldNumber] === null) {
			if (cross) {
				array[fieldNumber] = 'X';
				setCross(!cross);
			} else {
				array[fieldNumber] = 'O';
				setCross(!cross);
			}
			if (
				(array[0] === 'X' && array[1] === 'X' && array[2] === 'X') || // Верхняя горизонталь
				(array[3] === 'X' && array[4] === 'X' && array[5] === 'X') || // Средняя горизонталь
				(array[6] === 'X' && array[7] === 'X' && array[8] === 'X') || // Нижняя горизонталь
				(array[0] === 'X' && array[3] === 'X' && array[6] === 'X') || // Левая вертикаль
				(array[1] === 'X' && array[4] === 'X' && array[7] === 'X') || // Средняя вертикаль
				(array[2] === 'X' && array[5] === 'X' && array[8] === 'X') || // Правая вертикаль
				(array[0] === 'X' && array[4] === 'X' && array[8] === 'X') || // Главная диагональ
				(array[2] === 'X' && array[4] === 'X' && array[6] === 'X') // Побочная диагональ
			) {
				console.log('X wins!');
				setWinner('X');
			} else if (
				(array[0] === 'O' && array[1] === 'O' && array[2] === 'O') ||
				(array[3] === 'O' && array[4] === 'O' && array[5] === 'O') ||
				(array[6] === 'O' && array[7] === 'O' && array[8] === 'O') ||
				(array[0] === 'O' && array[3] === 'O' && array[6] === 'O') ||
				(array[1] === 'O' && array[4] === 'O' && array[7] === 'O') ||
				(array[2] === 'O' && array[5] === 'O' && array[8] === 'O') ||
				(array[0] === 'O' && array[4] === 'O' && array[8] === 'O') ||
				(array[2] === 'O' && array[4] === 'O' && array[6] === 'O')
			) {
				console.log('Победа O!');
				setWinner('O');
			}
			setGame(array);
		}
	}

	function restartGame() {
		setGame(Array(9).fill(null));
		setCross(true);
		setWinner(null);
	}

	const [game, setGame] = useState<(string | null)[]>([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
	]);

	const [cross, setCross] = useState<boolean>(true);
	return (
		<>
			<header>
				<h1>TicTacToe</h1>
			</header>
			<main>
				{winner && (
					<div className='modal'>
						<div className='modal-content'>
							<p>Победил {winner}!</p>
							<button onClick={restartGame}>Начать заново</button>
						</div>
					</div>
				)}
				<div className='page'>
					<div className='main'>
						<div className='container'>
							<div className='game-container'>
								{[0, 3, 6].map(row => (
									<div key={row} className='game-line'>
										{game.slice(row, row + 3).map((value, index) => (
											<div
												key={row + index}
												className='game-field'
												onClick={() => handleClick(row + index)}
											>
												{value}
											</div>
										))}
									</div>
								))}
							</div>
							<h2>Ход: {cross ? 'X' : 'O'}</h2>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
