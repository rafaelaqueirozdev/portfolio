import { useState } from 'react';

import Header from '../components/layouts/Header';

export async function getStaticProps() {
  const { default: portfolioData } = await import('../data/portfolioData.json');

  return {
    props: {
      portfolioData,
    },
  };
}

export default function Home({ portfolioData }) {
  const [language, setLanguage] = useState('pt-br');
  const [portfolio, setPortfolio] = useState(portfolioData["language"][language]);

  return (
    <div className="container mx-auto">
      <Header {...portfolio.header} />
    </div>
  );
}
