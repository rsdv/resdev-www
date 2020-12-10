## Resdev-www

Portfolio Resdev site

### Architecture

Simple, using a `Strapi` Headless CMS, backed by a `MongoDB` instance.

> Would use a personal backend but since it's built as though work would want it
> a CMS is a better choice, since it's only for products, and news articles

```bash
  Strapi -> MongoDB
     |
     v
Resdev Site
```

### TODO:

 - [ ] Responsiveness
    - [ ] When less than 768px should look at going vertical, or swapping photo carasel for a full width
    header ??
    - [ ] Or design one that fits

### Pages/Containers

#### HomePage

> `http://rsdv.co.uk/`

#### NewsPage

> `http://rsdv.co.uk/news`

#### ArticlePage

> `http://rsdv.co.uk/news/:slug`

#### CategoryPage

> `http://rsdv.co.uk/category/:slug`

#### ProductPage

> `http://rsdv.co.uk/products/:slug`

#### AboutUsPage

> `http://rsdv.co.uk/about-us`

#### ExportPage

> `http://rsdv.co.uk/export`
