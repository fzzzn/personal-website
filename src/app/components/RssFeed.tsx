'use client';

import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
}

const fetchRssFeed = async (feedUrl: string): Promise<RssItem[]> => {
  const parser = new Parser();
  try {
    const response = await parser.parseURL(feedUrl);
    return response.items as RssItem[];
  } catch (err) {
    console.error('Error fetching RSS feed:', err);
    return [];
  }
};

const RssFeed = () => {
  const [items, setItems] = useState<RssItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const feedUrl = process.env.NEXT_PUBLIC_RSS_FEED_URL || '';

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      try {
        const items = await fetchRssFeed(feedUrl);
        setItems(items);
      } catch {
        setError('Failed to fetch RSS feed');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  const renderLoading = () => (
    <div>
      <h2 className='text-xl font-bold mb-2 mt-6'>Read my latest blog posts</h2>
      <hr className='mb-2' />
      <span className='loading loading-dots loading-md'></span>
    </div>
  );

  const renderError = () => (
    <div>
      <h2 className='text-xl font-bold mb-2 mt-6'>Read my latest blog posts</h2>
      <hr className='mb-2' />
      <p>{error}</p>
    </div>
  );

  const renderItems = () => (
    <div>
      <h2 className='text-xl font-bold mb-2 mt-6'>Read my latest blog posts</h2>
      <hr className='mb-2' />
      <ul className='list-disc list-inside space-y-2 mb-2'>
        {items.slice(0, 4).map((item) => (
          <li key={item.link}>
            <a
              className='link'
              title={item.title}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.title}
            </a>
            <span className='text-xs ml-1'>{formatDate(item.pubDate)}</span>
          </li>
        ))}
      </ul>
      {items.length > 4 && (
        <a
          className='link mt-4 text-end block'
          href={feedUrl.split('/').slice(0, 3).join('/')}
          target='_blank'
          rel='noopener noreferrer'
          title='View all posts'
        >
          View all posts
        </a>
      )}
    </div>
  );

  return loading ? renderLoading() : error ? renderError() : renderItems();
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export default RssFeed;
