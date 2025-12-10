'use client';

import { useEffect } from 'react';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error('Global error:', error);
	}, [error]);

	return (
		<html lang="ru">
			<body style={{
				margin: 0,
				fontFamily: 'system-ui, -apple-system, sans-serif',
				backgroundColor: '#f8f6f3',
				color: '#3d3530',
			}}>
				<div style={{
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '2rem',
					textAlign: 'center',
				}}>
					<div style={{ maxWidth: '500px' }}>
						{/* Error number */}
						<div style={{
							fontSize: '8rem',
							fontWeight: 'bold',
							lineHeight: 1,
							color: 'rgba(139, 90, 43, 0.15)',
							marginBottom: '1rem',
						}}>
							500
						</div>

						{/* Icon */}
						<div style={{
							width: '80px',
							height: '80px',
							margin: '-4rem auto 2rem',
							backgroundColor: 'white',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
							border: '1px solid rgba(139, 90, 43, 0.1)',
						}}>
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgba(180, 83, 83, 0.7)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
								<path d="M12 9v4"/>
								<path d="M12 17h.01"/>
							</svg>
						</div>

						{/* Message */}
						<h1 style={{
							fontSize: '1.75rem',
							fontWeight: 500,
							marginBottom: '0.75rem',
							color: '#3d3530',
						}}>
							Критическая ошибка
						</h1>
						<p style={{
							fontSize: '1.1rem',
							color: '#7a7067',
							marginBottom: '2rem',
							lineHeight: 1.6,
						}}>
							Произошла серьёзная ошибка приложения. Пожалуйста, обновите страницу
						</p>

						{/* Buttons */}
						<div style={{
							display: 'flex',
							gap: '1rem',
							justifyContent: 'center',
							flexWrap: 'wrap',
						}}>
							<button
								onClick={reset}
								style={{
									padding: '0.875rem 2rem',
									fontSize: '0.875rem',
									fontWeight: 500,
									textTransform: 'uppercase',
									letterSpacing: '0.1em',
									backgroundColor: '#8b5a2b',
									color: 'white',
									border: 'none',
									borderRadius: '9999px',
									cursor: 'pointer',
									transition: 'background-color 0.2s',
								}}
								onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7a4f26'}
								onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8b5a2b'}
							>
								Обновить страницу
							</button>
							{/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
							<a
								href="/"
								style={{
									padding: '0.875rem 2rem',
									fontSize: '0.875rem',
									fontWeight: 500,
									textTransform: 'uppercase',
									letterSpacing: '0.1em',
									backgroundColor: 'transparent',
									color: '#3d3530',
									border: '2px solid rgba(61, 53, 48, 0.2)',
									borderRadius: '9999px',
									cursor: 'pointer',
									textDecoration: 'none',
									transition: 'border-color 0.2s, color 0.2s',
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.borderColor = '#8b5a2b';
									e.currentTarget.style.color = '#8b5a2b';
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.borderColor = 'rgba(61, 53, 48, 0.2)';
									e.currentTarget.style.color = '#3d3530';
								}}
							>
								На главную
							</a>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
