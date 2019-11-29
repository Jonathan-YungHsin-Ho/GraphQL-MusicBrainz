import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const TEST = gql`
	query {
		lookup {
			artist(mbid: "5b11f4ce-a62d-471e-81fc-a69a8278c7da") {
				name
			}
		}
	}
`;

function App() {
	const { data } = useQuery(TEST);

	console.log(data);

	return (
		<div className='App'>
			<h1>MusicBrainz</h1>
		</div>
	);
}

export default App;
