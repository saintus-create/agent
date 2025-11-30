import MinimalHero from "@/components/heroes/minimal-hero";
import NewsFeed from "@/components/news-feed";
import { NewsArticle, parseNewsArticles } from "@/lib/validators/news";
import Exa from "exa-js";

// Helper to build favicon URL
function buildFaviconUrl(url: string | undefined | null): string {
  try {
    const hostname = url ? new URL(url).hostname : "google.com";
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=google.com&sz=64";
  }
}

export default async function Home() {
  let newsArticles: NewsArticle[] = [];

  try {
    const exa = new Exa(process.env.EXASEARCH_API_KEY);

    // Calculate date 2 days ago for recent news
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const result = await exa.searchAndContents(
      "latest important global news stories political technology science",
      {
        type: "neural",
        useAutoprompt: true,
        numResults: 15,
        text: true,
        startPublishedDate: twoDaysAgo.toISOString(),
        category: "news",
      }
    );

    newsArticles = parseNewsArticles(
      result.results.map((raw, index) => ({
        id: raw.id || `news-${index}`,
        title: raw.title || "Untitled News",
        summary: raw.text ? `${raw.text.slice(0, 200)}...` : "Click to read more...",
        text: raw.text || "No content available.",
        url: raw.url || "#",
        publishedDate: raw.publishedDate || new Date().toISOString(),
        image: "",
        favicon: buildFaviconUrl(raw.url),
      }))
    );
  } catch (error) {
    console.error("Error fetching news from Exa:", error);
    // Fallback only if API fails, but strictly NO stock images
    newsArticles = [
      {
        id: "error-1",
        title: "Unable to load latest news",
        summary: "Please check your connection or API configuration.",
        text: "We encountered an issue fetching the latest stories. Please try again later.",
        url: "#",
        publishedDate: new Date().toISOString(),
        image: "",
        favicon: "",
      },
    ];
  }

  return (
    <>
      {/* Hero – occupies the first viewport */}
      <section className="relative min-h-screen">
        <MinimalHero />
      </section>

      {/* News feed – starts after hero */}
      <section className="relative min-h-screen bg-zinc-900/50 py-12">
        <NewsFeed newsArticles={newsArticles} />
      </section>
    </>
  );
}