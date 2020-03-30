import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App component with the correct message', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText('Your content here...');
	expect(linkElement).toBeInTheDocument();
});
