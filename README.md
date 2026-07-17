# Priisma — priisma.com

One-page portfolio beacon for Fede Bozo / Priisma. Astro 5, no framework CSS on the homepage.

**Live data:** the homepage ticker fetches `https://showbliz.com/feed/today.xml` at build time
(10s timeout, snapshot fallback in `src/pages/index.astro` if the feed is unreachable).
A scheduled GitHub Actions run rebuilds daily at 09:00 UTC so listings stay fresh — note
GitHub disables cron workflows after ~60 days of repo inactivity (re-enable in the Actions tab).

---

# Astro Starter Kit: Portfolio

```
npm init astro -- --template portfolio
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/portfolio)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
