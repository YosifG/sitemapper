import Sitemapper from '../assets/sitemapper.mjs';


// URL to be crawled
const exampleURL = 'https://www.edna.bg/sitemap.xml';



// Instantiate an instance
const sitemapper = new Sitemapper({
  url: exampleURL, // url to crawl
  debug: false, // don't show debug logs
  timeout: 10000, // 10 seconds
  concurrency: 10, // Number of maximum concurrent sitemap crawl threads
  retries: 0, // Number of retry attempts in case of error response (e.g. 404 or timeout)
});

/**
 *  Async/await example of using sitemapper.
 */
/** 
(async () => {
  try {
    // fetch the example url to get all sites
    const data = await sitemapper.fetch();

    // log the sites
    console.log(data);
  } catch (error) {
    // log any errors
    console.error(error);
  }
})();
*/

const sitemap = new Sitemapper({
  timeout: 4000,
  debug:true
});

const site_urls_response = await sitemap.fetch(exampleURL)
console.log(site_urls_response)