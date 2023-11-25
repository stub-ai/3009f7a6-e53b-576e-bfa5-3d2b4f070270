import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const Scraper = () => {
  const [data, setData] = useState<string | null>(null);

  const scrapeWebsite = async () => {
    const result = await axios.get('https://example.com');
    const $ = cheerio.load(result.data);
    const scrapedData = $('body').text();
    setData(scrapedData);
  };

  return (
    <div>
      <button onClick={scrapeWebsite}>Scrape Website</button>
      {data && <div>{data}</div>}
    </div>
  );
};

export default Scraper;