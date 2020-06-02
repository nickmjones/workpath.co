# Workpath.co
## Marketing Website v3
------------
- https://statickit.com/guides/next-js-tailwind
- https://tailwindcss.com/
- https://www.viget.com/articles/tips-for-your-tailwind-config/
- https://www.creativebloq.com/how-to/build-an-seo-friendly-head-component-for-nextjsreact
- https://medium.com/trabe/using-bem-conventions-in-css-modules-leveraging-custom-webpack-loaders-fd985f72bcb2
- https://github.com/zeit/next.js/tree/master/examples/with-styled-components
- https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout
- https://medium.com/cartogram/embracing-constraint-with-css-modules-89ba3bbcb95d
- https://glenmaddern.com/articles/css-modules
- https://blog.yipl.com.np/css-modules-with-react-the-complete-guide-a98737f79c7c
- https://github.com/rnosov/react-reveal
- https://stackoverflow.com/questions/51044090/react-countup-animation-starts-immediately-after-the-page-loading-should-start/51045182
- https://buttercms.com/blog/how-to-test-nextjs-apps#installingcypress
- https://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184

---

## Grid System
`.wrapper` provides a grid context for all content. By default the grid is 12 columns at everyt breakpoint. All children of the grid, by default, span all 12 columns (which handles mobile first)

The `columns` class sets up a flexbox with various attributes. By default this has the following attributes:

```
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin: 0;
padding: 2rem;
```

#### 'Push' utilities
By default, columns are centered in the page and have a maximum width of the highest breakpoint. These classes allow columns to include full bleed images that appear as if they are going off the page.
-`.push-left` starts the columns instance on the extreme left edge of its parent grid
-`.push-right` starts the columns instance on the extreme right edge of its parent grid

#### 'Margin' utilities
These classes determine how much margin is around an instance of columns.
-`.margin-medium` 2rem of margin
-`.margin-large` 4rem of margin
-`.margin-xlarge` 6rem of margin

Another set of utilities in this series allows padding along only one co-ordinate.
-`.margin-y-medium` 2rem of margin on top and bottom only
-`.margin-y-large` 4rem of margin on top and bottom only
-`.margin-y-xlarge` 6rem of margin on top and bottom only
-`.margin-x-medium` 2rem of margin on left and right only
-`.margin-x-large` 4rem of margin on left and right only
-`.margin-x-xlarge` 6rem of margin on left and right only

#### 'Padding' utilities
Similar to the `margin` utilities, `padding` provides spacing but to the interior of an element.
-`.padding-medium` 2rem of padding
-`.padding-large` 4rem of padding
-`.padding-xlarge` 6rem of padding

Another set of utilities in this series allows padding along only one co-ordinate.
-`.padding-y-medium` 2rem of padding on top and bottom only
-`.padding-y-large` 4rem of padding on top and bottom only
-`.padding-y-xlarge` 6rem of padding on top and bottom only
-`.padding-x-medium` 2rem of padding on left and right only
-`.padding-x-large` 4rem of padding on left and right only
-`.padding-x-xlarge` 6rem of padding on left and right only

