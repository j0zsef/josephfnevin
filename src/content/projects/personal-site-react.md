# Personal Site React
I decided to rebuild my personal site using React. The site you are currently navigating is the finished product.
React has become my main focus for web development and thought my personal site should reflect that. I have been using React
professionally for the past year and wanted to showcase my (basic/moderate) skills.

Another reason for this rebuild was to display some of my projects. I felt that Next would be a good choice for this because of the dynamic routing.
Also, I am a fan of the opinionated structure of Next. It makes development easier and faster.

Finally, I wanted to learn how to deploy a React site using AWS. I have deployed websites professionally using Terraform and Cloudfront. 
In addition, I deployed my previous personal site using Netlify. It was time for a new challenge.


## Frontend Technologies
- React
- Next
- React-Bootstrap
- AWS

## UI
For the theme, I stuck with the regular bootstrap styling. There are some minor tweaks but overall it is the normal bootstrap style.

I created a context to manage the theme. The theme can be toggled between light and dark through context:
```typescript
const themeCtx = useContext(ThemeContext);
const onThemeToggle = () => {
    themeCtx?.setTheme((current) => {
        return current === 'dark' ? 'light' : 'dark';
    });
};
```

In the context, the `data-bs-theme` attribute and local storage are updated:
```typescript
useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);
```

Lastly, the theme styling is defined with variables for light and dark mode:
```css
:root {
    --background: linear-gradient(135deg, whitesmoke, lightgray);
    --section-bg: var(--background);
    --article-bg: var(--background);
    --navbar-bg: var(--background);
    --hover-bg: var(--background);
    --pre-bg: white;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --theme-selector-color: black;
}

[data-bs-theme="dark"] {
    --background: linear-gradient(135deg, #444, #333);
    --section-bg: var(--background);
    --article-bg: var(--background);
    --navbar-bg: var(--background);
    --hover-bg: var(--background);
    --pre-bg: var(--bs-body-bg);
    --shadow-color: rgba(0, 0, 0, 0.5);
    --theme-selector-color: white;
}
```

## Deployment
I deployed the site using Netlify. I used Netlify to host the site and manage the domain.

## Sources
- Source Code: [here](https://github.com/j0zsef/josephfnevin)
