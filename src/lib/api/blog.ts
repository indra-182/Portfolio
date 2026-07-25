export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  type: "article" | "curation";
  coverImage?: string;
  date: string;
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  readingTime: string;
  url: string;
}

export async function fetchLatestPosts(limit = 6): Promise<Post[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(
      `https://blog-mahadi-indra.vercel.app/api/posts?limit=${limit}`,
      {
        signal: controller.signal,
        next: { revalidate: 900 },
      },
    );

    if (!res.ok) return [];

    const data = await res.json();
    return data.data ?? (data.posts ?? []);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
