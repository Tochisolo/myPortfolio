// ─── HASHNODE CONFIG ──────────────────────────────────────────────────────────
const HASHNODE_ENDPOINT = "https://gql.hashnode.com";
const PUBLICATION_ID    = "69f8212776c1469ba429844f";

/**
 * Fetches all posts from your Hashnode blog
 * @param {number} first - number of posts to fetch (default 12)
 */
export const fetchPosts = async (first = 12) => {
  const query = `
    query GetPosts($id: ObjectId!, $first: Int!) {
      publication(id: $id) {
        posts(first: $first) {
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
              tags {
                name
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(HASHNODE_ENDPOINT, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({
      query,
      variables: { id: PUBLICATION_ID, first },
    }),
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.publication.posts.edges.map((edge) => edge.node);
};

/**
 * Fetches a single post by slug
 * @param {string} slug - the post slug from the URL
 */
export const fetchPostBySlug = async (slug) => {
  const query = `
    query GetPost($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          id
          title
          brief
          slug
          publishedAt
          readTimeInMinutes
          coverImage {
            url
          }
          tags {
            name
          }
          author {
            name
            profilePicture
          }
          content {
            html
          }
        }
      }
    }
  `;

  const response = await fetch(HASHNODE_ENDPOINT, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({
      query,
      variables: {
        host: "franciscoshub.hashnode.dev",
        slug,
      },
    }),
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message);
  }

  return data.data.publication.post;
};

/**
 * Formats a raw Hashnode date string into a readable format
 * e.g. "2025-04-20T10:00:00.000Z" → "April 20, 2025"
 */
export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
};

/**
 * Builds the full URL to a post on your Hashnode blog
 */
export const getPostUrl = (slug) =>
  `https://franciscoshub.hashnode.dev/${slug}`;