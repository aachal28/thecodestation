import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN || 'your-notion-token-here',
});

export interface NotionBlog {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  published: boolean;
  slug: string;
  content?: string;
}

export async function getBlogPosts(): Promise<NotionBlog[]> {
  try {
    // Replace with your actual Notion database ID
    const databaseId = process.env.NOTION_DATABASE_ID || 'your-database-id-here';
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: page.properties.Category?.select?.name || 'General',
      date: page.properties.Date?.date?.start || new Date().toISOString(),
      readTime: page.properties.ReadTime?.rich_text?.[0]?.plain_text || '5 min read',
      published: page.properties.Published?.checkbox || false,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || page.id,
    }));
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error);
    // Return mock data for development
    return getMockBlogPosts();
  }
}

export async function getBlogPost(slug: string): Promise<NotionBlog | null> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID || 'your-database-id-here';
    
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) return null;

    const page = response.results[0] as any;
    
    // Get page content
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    const content = blocks.results
      .map((block: any) => {
        if (block.type === 'paragraph') {
          return block.paragraph.rich_text.map((text: any) => text.plain_text).join('');
        }
        return '';
      })
      .join('\n\n');

    return {
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || '',
      category: page.properties.Category?.select?.name || 'General',
      date: page.properties.Date?.date?.start || new Date().toISOString(),
      readTime: page.properties.ReadTime?.rich_text?.[0]?.plain_text || '5 min read',
      published: page.properties.Published?.checkbox || false,
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || page.id,
      content,
    };
  } catch (error) {
    console.error('Error fetching blog post from Notion:', error);
    return null;
  }
}

// Mock data for development
function getMockBlogPosts(): NotionBlog[] {
  return [
    {
      id: '1',
      title: 'How to Master React Hooks in 2024',
      excerpt: 'A comprehensive guide to understanding and implementing React hooks effectively in your projects.',
      category: 'Tutorials & Tips',
      date: '2024-01-15',
      readTime: '8 min read',
      published: true,
      slug: 'master-react-hooks-2024',
    },
    {
      id: '2',
      title: 'Book Review: Clean Code by Robert Martin',
      excerpt: 'My thoughts on this classic programming book and how it changed my coding practices.',
      category: 'Book Reviews',
      date: '2024-01-12',
      readTime: '5 min read',
      published: true,
      slug: 'clean-code-book-review',
    },
    {
      id: '3',
      title: 'My Journey Learning TypeScript',
      excerpt: 'From JavaScript to TypeScript - the challenges, wins, and lessons learned along the way.',
      category: 'Learning Journey',
      date: '2024-01-10',
      readTime: '12 min read',
      published: true,
      slug: 'typescript-learning-journey',
    },
  ];
}