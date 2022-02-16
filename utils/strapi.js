import qs from "qs";


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 * 
 * https://strapi.io/blog/build-a-blog-with-next-react-js-strapi
 */
 export function getStrapiURL(path = "") {
    return `${
        "https://cms.darkkronicle.com"
    }${path}`;
}
  
/**
* Helper to make GET requests to Strapi API endpoints
* @param {string} path Path of the API route
* @param {Object} urlParamsObject URL params object, will be stringified
* @param {Object} options Options passed to fetch
* @returns Parsed API call response
*/
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
  
    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;
  
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
  
    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}

export async function getPosts() {
    const pagesRes = await fetchAPI("/posts", {populate: "*"});
    return pagesRes;
}

export async function getPost(category, slug) {
    const pagesRes = await fetchAPI("/posts", {
        populate: "*",
        filters: {
            slug: {
                $eq: slug
            },
            category: {
                slug: {
                    $eq: category
                }
            }
        }
    });
    const pageArray = pagesRes.data;
    return pageArray.length > 0 ? pageArray[0] : null;
}

export async function getCategories() {
    const categoriesRes = await fetchAPI("/categories");
    return categoriesRes;
}

export async function getPage(slug) {
    const pages = await fetchAPI("/posts", {
        filters: {
            slug: {
                $eq: slug
            }
        }
    });
    const rawPages = pages.data;
    const pageArray = rawPages.filter((post) => post.attributes.slug == slug);
    return pageArray.length > 0 ? pageArray[0] : null;
}

export async function getCategorySlugs(category) {
    const pages = await fetchAPI('/posts', {
        filters: {
            category: {
                slug: {
                    $eq: category 
                }
            }
        },
    });
    const elementSlugs = pages.data.map((element) => {
        return  {
            params : {
                slug: element.attributes.slug,
            }
        };
    });
    return elementSlugs
}

export async function getRecentPosts(number) {
    const pages = await fetchAPI('/posts', {
        sort: ['publishedAt:desc'],
        pagination: {
            page: 1,
            pageSize: number
        },
        populate: ['category', 'tags']
    })
    return pages;
} 