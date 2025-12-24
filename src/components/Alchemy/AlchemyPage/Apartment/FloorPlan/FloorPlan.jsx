import React from 'react'

export default function FloorPlan() {
	return (
		<section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100%', padding: '2rem' }}>
			<h3 style={{ fontSize: 'clamp(2rem, 4vw, 6rem)', marginBottom: '1rem' }}>Floor Plan</h3>
			<p style={{ fontSize: 'clamp(1.25rem, 2vw, 2.5rem)' }}>Floor plan content goes here.</p>
		</section>
	)
}
