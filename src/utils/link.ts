import * as cheerio from "cheerio";

export const getLinkPreview = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const html = await res.text();
  const $ = cheerio.load(html);

  const ogImage =
    $('meta[property="og:image"]').attr("content") ||
    $('meta[name="twitter:image"]').attr("content");

  const title =
    $('meta[property="og:title"]').attr("content") || $("title").text();

  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content");

  return {
    title,
    description,
    image: ogImage,
  };
};
