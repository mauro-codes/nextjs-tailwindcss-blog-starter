If you want to have your Next.js custom blog and don't want to build it from scratch, this boilerplate is for you

![post using indigo theme](https://i.imgur.com/o4I8SBZ.png)
<br/>

# Features
Here's a list of the features included:

## TypeScript 
Already applied to the entire project and ready to be used in your custom components.

## TailwindCSS 2.0.2
The entire blog was built using tailwindcss. The [typography plugin](https://tailwindcss.com/docs/typography-plugin) was also used to generate beautiful typographic defaults to any vanilla HTML on your posts.

## Markdown support 
To start adding your posts using markdown, just add new .md files within the posts folder located in the root of the project.

### Syntax highlight
All your posts will include syntax highlight thanks to [unified.js](https://github.com/unifiedjs/unified) and [remark-highlight](https://github.com/remarkjs/remark-highlight.js?files=1)

### Metadata
You can easily add meta-data to your blog posts by including the following heading at the top:
```md
---
title: 'Title for your blog post'
date: '2021-01-07'
description: 'Description of your blog posts'
coverUrl: 'https://path/to/your/post/cover/image.png'
tags: 'nextjs,tailwindcss,markdown'
theme: 'indigo'
---
```
### Themes
By adding the "theme" meta-data at the top of your posts, you can change the accent color for each post. This feature use the tailwindcss colors behind the scene so you can choose between red, green, blue, indigo, yellow, etc.
	
**Indigo theme**

![post using indigo theme](https://i.imgur.com/IEaBMys.png)

**Yellow theme**

![post using yellow theme](https://i.imgur.com/hbjW5vN.png)

## Responsive design
The entire blog was carefully optimized to look good in any screen.

## Font Awesome
The project use font awesome for the social links and for those included in the post header.

<br/>

# First use
In order to start using your blog, just run the following commands:
```bash
npm run build
npm run dev
```

<br/>

# Generate your static blog
In order to export a static version of your blog, just run the following command:
```bash
npx next export
```
After finishing, you'll find all the static resources within the `out` folder.

<br/>

# Customization

## Updating social links and home description
You'll find a `config.ts` in the root of the project. There you can easily change or delete your social links or even add new ones. You'll also we able to update your blog description using the same file like this:
```ts
// config.ts
const Config: ConfigProps = {
    socialLinks: [
        {
            icon: faTwitter,
            url: "https://twitter.com/your-twitter-handle"
        },
        {
            icon: faInstagram,
            url: "https://www.instagram.com/your-instagram-handle/"
        },
        // Add as many social links as you want
    ],
    // Here you can change your blog description
    blogDescription: "Description for your blog"
}
```

## Update blog's title
To update your blog's title, just go to `./components/hero.tsx` and change the following section:
```ts
<h1 className="text-4xl tracking-tight font-extrabold text-cool-gray-900 sm:text-5xl md:text-6xl">
    // Change this section
    <span>techblog</span>
    <span className="text-indigo-600 xl:inline">.dev</span>
</h1>
```

## Navbar customization
### Hiding links
The navbar already comes with a set of links that are displayed by default:

![post using yellow theme](https://i.imgur.com/IIuzjJy.png)

If you want to get rid of them, go to `./components/layout.tsx` and add `showLinks={false}` in the navbar component likes this:
```ts
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar showLinks={false}></Navbar>
      {children}
    </div>
  );
};
```

### Add/Change the existing links
If you want to update the existing links, go to `./config.ts` and update the following section:
```ts
const Config: ConfigProps = {
    ...
    navbarLinks: [
        {
            text: "Link 1",
            href: "#"
        },
        // Add your custom links here
    ]
}
``` 
<br/>

# Roadmap
Here's a list of the upcoming features I'm working on:
- Dark mode support using tailwindcss
- Localization
- Customizable themes for the entire site
- RSS feed
- MDX support
- Navigation by tag and by year
- Support for series of posts


If you want to support my work, you can [☕️ buy me a coffe](https://www.buymeacoffee.com/mauro.codes)
