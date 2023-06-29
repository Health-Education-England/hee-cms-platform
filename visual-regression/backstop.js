const desktopViewport = {
  label: 'desktop',
  width: 1280,
  height: 720
};

const tabletViewport = {
  label: 'tablet',
  width: 768,
  height: 1024
};

const mobileViewport = {
  label: 'mobile',
  width: 375,
  height: 667
};

// To test on the host
// const local_uri = 'http://localhost:8080/site';

/* To test within a docker container */
const local_uri = 'http://host.docker.internal:8080/site';

module.exports = {
  'id': 'back_end_visual_regression_default',
  'viewports': [desktopViewport, tabletViewport, mobileViewport],
  'scenarios': [
    {
      'label': 'home_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-home-page`,
    },
    {
      'label': 'landing_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-landing-page`,
    },
    {
      'label': 'blog_post_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-blog-post-page`,
    },
    {
      'label': 'news_article_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-news-article-page`,
    },
    {
      'label': 'scp_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-standard-content-page`,
    },
    {
      'label': 'scp_newsletter_signup_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-scp-newsletter-signup-page`,
    },
    {
      'label': 'scp_cookies_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-scp-cookies-page`,
    },
    {
      'label': 'mini_hub_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-mini-hub-page`,
    },
    {
      'label': 'publication_landing_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-publication-landing-page`,
    },
    {
      'label': 'publication_page',
      'url': `${local_uri}/visual-regression/vr-content-pages/vr-publication-landing-page/vr-publication-page`,
    },
    {
      'label': 'bulletin_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-bulletin-collection-page`,
    },
    {
      'label': 'bulletin_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-bulletin-collection-page?category=medical_oncology&sortBy=az`,
    },
    {
      'label': 'blog_post_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-blog-post-collection-page`,
    },
    {
      'label': 'blog_post_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-blog-post-collection-page?category=RD-Discovery&category=Finance&sortBy=asc`,
    },
    {
      'label': 'news_article_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-news-article-collection-page`,
    },
    {
      'label': 'news_article_collection_page_with_filters_and_sorting_on',
      // The example doesn't include 'category' as 'NewsCategories' value-list isn't available for KLS channel
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-news-article-collection-page?sortBy=az`,
    },
    {
      'label': 'case_study_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-case-study-collection-page`,
    },
    {
      'label': 'case_study_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-case-study-collection-page?impactGroup=admin_and_clerical&impactGroup=medicine_and_dental&sortBy=desc`,
    },
    {
      'label': 'search_bank_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-search-bank-collection-page`,
    },
    {
      'label': 'search_bank_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-search-bank-collection-page?topic=prevention&sortBy=desc`,
    },
    {
      'label': 'event_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-event-collection-page`,
    },
    {
      'label': 'event_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-event-collection-page?year=2021&sortBy=asc`,
    },
    {
      'label': 'publication_collection_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-publication-collection-page`,
    },
    {
      'label': 'publication_collection_page_with_filters_and_sorting_on',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-publication-collection-page?publicationType=consultation&publicationType=data_statistics&publicationType=data&publicationProfession=public_health_professionals&publicationTopic=workforce_planning&publicationTopic=workforce_transformation&sortBy=desc`,
    },
    {
      'label': 'a-z_listing_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-a-z-listing-page`,
    },
    {
      'label': 'search_listing_page',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-search-listing-page`,
    },
    {
      'label': 'search_listing_page_with_search_query',
      'url': `${local_uri}/visual-regression/vr-collection-and-listing-pages/vr-search-listing-page?q=nhs&page=2&pageSize=10`,
    },
    {
      'label': 'page_not_found',
      'url': `${local_uri}/pagenotfound`,
    }
  ],
  'paths': {
    'bitmaps_reference': 'backstop_data/bitmaps_reference',
    'bitmaps_test': 'backstop_data/bitmaps_test',
    'casper_scripts': 'backstop_data/casper_scripts',
    'html_report': 'backstop_data/html_report',
    'ci_report': 'backstop_data/ci_report'
  },
  'report': ['browser'],
  'engine': 'puppeteer',
  'engineOptions': {
    /* Use 'firefox' browser for visual regression */
    // 'browser': 'firefox',

    /* Use 'safari' browser for visual regression */
    // 'browser': 'safari',
    'args': [
      '--no-sandbox',
      '--disable-web-security' // Disable same-origin policy to load YouTube/Vimeo/Anchor FM players (in case if any)
    ]
  },
  'asyncCaptureLimit': 5,
  'asyncCompareLimit': 50,
  'debug': false,
  'debugWindow': false,
  'delay': 5000 // Giving 5 seconds wait to let YouTube/Vimeo/Anchor FM players load first (in case if any) before taking screenshots. This may need to be adjusted or handle better (maybe, using selectors and event handlers).
};
