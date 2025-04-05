// import React, { useState, useEffect, useRef } from 'react';
// This is an game example of DX-Ball game using React Hooks.

// const gameWidth = 600;
// const gameHeight = 400;
// const paddleWidth = 100;
// const paddleHeight = 20;
// const ballSize = 10;
// const brickWidth = 60;
// const brickHeight = 20;

// const DXBallGame = () => {
//   const [ball, setBall] = useState({ x: gameWidth / 2 - ballSize / 2, y: gameHeight - 50, dx: 2, dy: -2 });
//   const [paddle, setPaddle] = useState(gameWidth / 2 - paddleWidth / 2);
//   const [bricks, setBricks] = useState(createBricks());
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const gameIntervalRef = useRef(null);

//   useEffect(() => {
//     if (gameOver) return;
//     startGame();
//     return () => clearInterval(gameIntervalRef.current);
//   }, [gameOver]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       setPaddle(Math.min(Math.max(x - paddleWidth / 2, 0), gameWidth - paddleWidth));
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     return () => document.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const startGame = () => {
//     gameIntervalRef.current = setInterval(() => {
//       updateBallPosition();
//       checkCollisions();
//       checkGameOver();
//     }, 10);
//   };

//   const updateBallPosition = () => {
//     setBall(prevBall => ({
//       ...prevBall,
//       x: prevBall.x + prevBall.dx,
//       y: prevBall.y + prevBall.dy
//     }));
//   };

//   const checkCollisions = () => {
//     setBall(prevBall => {
//       let newDx = prevBall.dx;
//       let newDy = prevBall.dy;
//       let newBricks = [...bricks];

//       // Check wall collisions
//       if (prevBall.x + ballSize > gameWidth || prevBall.x < 0) {
//         newDx = -prevBall.dx;
//       }
//       if (prevBall.y < 0) {
//         newDy = -prevBall.dy;
//       }

//       // Check paddle collision
//       if (prevBall.y + ballSize > gameHeight - paddleHeight && 
//         prevBall.x > paddle && prevBall.x < paddle + paddleWidth) {
//         newDy = -prevBall.dy;
//       }

//       // Check brick collisions
//       newBricks = newBricks.map(brick => {
//         if (prevBall.x < brick.x + brickWidth &&
//           prevBall.x + ballSize > brick.x &&
//           prevBall.y < brick.y + brickHeight &&
//           prevBall.y + ballSize > brick.y) {
//           newDx = -prevBall.dx;
//           newDy = -prevBall.dy;
//           setScore(prevScore => prevScore + 10);
//           return null; // Remove brick
//         }
//         return brick;
//       }).filter(brick => brick !== null);

//       setBricks(newBricks);
//       return { ...prevBall, dx: newDx, dy: newDy };
//     });
//   };

//   const checkGameOver = () => {
//     if (ball.y + ballSize > gameHeight) {
//       setGameOver(true);
//       clearInterval(gameIntervalRef.current);
//     }
//   };

//   const createBricks = () => {
//     const rows = 5;
//     const columns = 10;
//     const bricks = [];
//     for (let row = 0; row < rows; row++) {
//       for (let col = 0; col < columns; col++) {
//         bricks.push({
//           x: col * (brickWidth + 10),
//           y: row * (brickHeight + 5)
//         });
//       }
//     }
//     return bricks;
//   };

//   const handleReplay = () => {
//     setBall({ x: gameWidth / 2 - ballSize / 2, y: gameHeight - 50, dx: 2, dy: -2 });
//     setPaddle(gameWidth / 2 - paddleWidth / 2);
//     setBricks(createBricks());
//     setScore(0);
//     setGameOver(false);
//     startGame();
//   };

//   return (
//     <div style={styles.container}>
//       <h1>DX-Ball Game</h1>
//       <div
//         style={styles.gameArea}
//       >
//         {bricks.map((brick, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.brick,
//               top: brick.y,
//               left: brick.x
//             }}
//           />
//         ))}
//         <div
//           style={{
//             ...styles.ball,
//             top: ball.y,
//             left: ball.x
//           }}
//         />
//         <div
//           style={{
//             ...styles.paddle,
//             left: paddle
//           }}
//         />
//       </div>
//       <p>Score: {score}</p>
//       {gameOver && (
//         <div>
//           <h2 style={styles.gameOver}>Game Over</h2>
//           <button onClick={handleReplay} style={styles.replayButton}>Replay</button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif'
//   },
//   gameArea: {
//     position: 'relative',
//     width: gameWidth,
//     height: gameHeight,
//     border: '2px solid black',
//     overflow: 'hidden',
//     margin: '0 auto',
//     backgroundColor: '#f0f0f0'
//   },
//   paddle: {
//     position: 'absolute',
//     bottom: 0,
//     width: paddleWidth,
//     height: paddleHeight,
//     backgroundColor: 'blue'
//   },
//   ball: {
//     position: 'absolute',
//     width: ballSize,
//     height: ballSize,
//     backgroundColor: 'red',
//     borderRadius: '50%'
//   },
//   brick: {
//     position: 'absolute',
//     width: brickWidth,
//     height: brickHeight,
//     backgroundColor: 'green'
//   },
//   gameOver: {
//     color: 'red',
//     fontSize: '24px'
//   },
//   replayButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     margin: '10px',
//     border: 'none',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s'
//   }
// };

// export default DXBallGame;
