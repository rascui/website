import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
	return (
		<Helmet>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/x-icon" href="./favicon.ico" />
			<title>IEEE RAS | CUI</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
			<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
		</Helmet>
	);
}

export default Head;
