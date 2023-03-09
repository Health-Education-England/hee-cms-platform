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
      'url': `${local_uri}/visual-regression/vr-home-page`,
    },
    {
      'label': 'landing_page',
      'url': `${local_uri}/visual-regression/vr-landing-page`,
    },
    {
      'label': 'blog_post_page',
      'url': `${local_uri}/visual-regression/vr-blog-post-page`,
    },
    {
      'label': 'news_article_page',
      'url': `${local_uri}/visual-regression/vr-news-article-page`,
    },
    {
      'label': 'scp_page',
      'url': `${local_uri}/visual-regression/vr-standard-content-page`,
    },
    {
      'label': 'scp_newsletter_signup_page',
      'url': `${local_uri}/visual-regression/vr-scp-newsletter-signup-page`,
    },
    {
      'label': 'scp_cookies_page',
      'url': `${local_uri}/visual-regression/vr-scp-cookies-page`,
    },
    {
      'label': 'mini_hub_page',
      'url': `${local_uri}/visual-regression/vr-mini-hub-page`,
    },
    {
      'label': 'publication_landing_page',
      'url': `${local_uri}/visual-regression/vr-publication-landing-page`,
    },
    {
      'label': 'publication_page_page',
      'url': `${local_uri}/visual-regression/vr-publication-landing-page/vr-publication-page`,
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
