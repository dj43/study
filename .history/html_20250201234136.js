function SemanticTags() {
  // Benefits of Using Semantic Tags
  // Accessibility: Improves compatibility with screen readers and other assistive devices.
  // SEO: Search engines can better understand and rank content.
  // Maintainability: Easier for developers to read, navigate, and maintain code.
  // Standardization: Helps ensure that web pages follow standard practices for HTML markup.
  // <header>: Represents the header section of a document or a section.
  // <nav>: Represents a section of the page containing navigation links.
  // <main>: Represents the main content of the document
  // <article>: Represents a self-contained piece of content that can be independently distributed or reused,
  //  such as a blog post or news article.
  // <footer>: Represents the footer of a document or section.
  // <time>: Represents a specific date or time.
}

function CssUnits() {
  // Absolute Units:
  //  px: Fixed unit for precise control, 1px equals one screen dot.
  // Relative Units:
  //  %: Relative to the parent element’s size, flexible for layouts.
  //  em: Relative to the current font size, scalable within its context.
  //  rem: Relative to the root font size, consistent scaling across elements.
  //  vw/vh: Relative to 1% of the viewport width/height, good for responsive design.
  //  vmin/vmax: Relative to the smaller/larger of viewport width or height.
  //  fr: Fraction of available space in CSS Grid, perfect for flexible grid layouts.
  //  ch: Relative to the width of the "0" character, useful for text widths.
  // for making calaculation in rem easier
  //   html {
  //   font-size: 62.5%; /* 1 rem = 10px */
  // }
}

function jank() {
  // JANK
  // JANK refers to performance issues where animations, scrolling, or transitions appear choppy or laggy, leading to a
  // poor user experience. JANK occurs when the browser is unable to render frames within the ideal frame budget of 16ms (
  // 60 frames per second)
  // Reduce DOM Size
  // Optimize CSS:
  // Optimize Layout Thrashing: Avoid repeatedly reading and writing to the DOM,
  // as it forces layout recalculations. Batch DOM changes together.
  // Minimize Paint Areas: Large areas of the page or complex elements (like box shadows, gradients) take longer to paint.
  // Prioritize Visible Content
  // Minimize the Critical Path Length
  // Limit the number of critical resources (CSS, JavaScript, fonts) needed to render the initial view.
  // Prioritize and inline critical CSS, and delay non-essential resources.
  // in react projects this is done automatically using next.js in production builds
  // in angular this is automcatically done for ssr enabled projects
  //
  // Use a Content Delivery Network (CDN)
  // Load assets from servers closer to the user, reducing latency and improving load times.
  //
  // Leverage Browser Caching
  // Ensure that static assets are cached appropriately to avoid re-fetching them on every page load.
}

function performanceOptimization() {
  // Optimize Resource Loading
  // Lazy Load: Delay loading of non-critical components, routes, and images (React.lazy(), loading="lazy").
  // Defer/Async Scripts: Use async/defer to load non-blocking scripts.
  // Preload Critical Resources: Use <link rel="preload"> for important CSS, fonts, and scripts.
  //
  // Optimize CSS and JavaScript
  // Tree Shaking: Remove unused code using Webpack.
  // Code Splitting: Split JS bundles into smaller chunks (React.lazy()).
  // Minify & Compress: Minify JS/CSS and enable Gzip/Brotli compression.
  //
  // Optimize Rendering
  // Memoization: Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.
  // Avoid Deep State: Keep state shallow to reduce large re-renders.
  //
  // Reduce HTTP Requests & Caching
  // HTTP/2: Enable multiplexing to load multiple resources over one connection.
  // HTTP/2 addresses the inefficiencies of HTTP/1.1 by introducing multiplexing, which allows the browser and server to send and
  // receive multiple requests and responses at the same time over a single TCP connection.
  // Caching: Use Cache-Control and Service Workers to cache assets.
  //
  // Monitor Performance
  // Web Vitals: Use Lighthouse, PageSpeed Insights to monitor key metrics (FCP, LCP, TTI, CLS).
  // React Profiler: Measure and optimize component re-renders.
}

function selectors() {
  // Descendant Selector : all Descendant
  // div p
  // Child Selector : all direct child
  // div > p
  // Adjacent Sibling Selector
  // h1 + p
  // General Sibling Selector: all siblings
  // div ~ p
  // pseudo classes
  // :nth-child(n), :nth-child(odd)
}

function position() {
  //   Relative → Nudges itself (Remain in flow)
  // Fixed → Sticks to the screen (Fixed forever)
  // Absolute → Follows its parent (Ancestor-based)
  // Sticky → Sticks while scrolling (Scrolling sticky)
}
