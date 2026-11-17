# Setting up and publishing your site

This guide takes you from the zip file to a live site at:

**https://tam-paul.github.io/portfolio/**

The site is plain HTML and CSS. There's no build step, no Node.js and no static site generator. You edit the files in VS Code, commit, push, and GitHub Pages publishes them.

You need:

- Git installed on your computer
- VS Code, signed in to GitHub (VS Code asks you to sign in the first time you clone or push)
- Your `Tam-Paul/portfolio` repository on GitHub

---

## 1. Clone the repository in VS Code

Skip this part if you've already cloned the repository.

1. In VS Code, open the Command Palette (**Ctrl+Shift+P**).
2. Type **Git: Clone** and press Enter.
3. Paste `https://github.com/Tam-Paul/portfolio.git` and press Enter.
4. Choose a parent folder, for example `Documents\GitHub`. VS Code creates a `portfolio` folder inside it.
5. When VS Code asks, select **Open**.

## 2. Add the site files

1. Unzip `tammy-paul-portfolio.zip`.
2. Copy **everything inside** the unzipped folder into your `portfolio` folder, so that `index.html` sits at the top level of the repository, next to the `.git` folder:

   ```
   portfolio/
   ├── .nojekyll
   ├── 404.html
   ├── contact.html
   ├── index.html
   ├── portfolio.html
   ├── resume.html
   ├── README.md
   ├── SETUP.md
   ├── css/style.css
   ├── js/main.js
   ├── files/
   └── images/
       ├── logo.svg
       ├── profile-320x458.png
       ├── profile-640x915.png
       └── profile-960x1372.png
   ```

3. `.nojekyll` is a hidden, empty file. Make sure it gets copied too. It tells GitHub Pages to publish the files exactly as they are, without running them through Jekyll first.
4. If the repository already has a `README.md`, replace it with the new one or merge the two.

## 3. Fill in the placeholders

Every place that needs your input is marked with a `TODO` comment. To list them all, press **Ctrl+Shift+F** and search for `TODO`.

| What | Where | What to do |
|---|---|---|
| CV PDF | `resume.html` | Save your CV as `files/Tammy_Paul_CV.pdf`. The **Download PDF** button already links to that name. |
| Writing sample links | `portfolio.html` | Replace each `<span class="placeholder-link">…</span>` with a link. The comment at the top of the page shows how. |
| LinkedIn and Upwork | `contact.html` | Replace the placeholder with your profile URL, or delete the line. |
| Availability line | `index.html` | Edit or delete "Open to freelance projects and new roles". |
| Testimonials | `index.html` | Optional. When you have quotes, remove the comment markers around the "Kind words" section. |

Things to keep in mind:

- **Links between pages are relative** (`portfolio.html`, not `/portfolio.html`). Keep them that way. The site lives in a `/portfolio/` subfolder on GitHub Pages, so links that start with `/` would break.
- **Your profile photo is already in place** in three sizes (`images/profile-320x458.png`, `profile-640x915.png` and `profile-960x1372.png`). Each browser loads only the size its screen needs, so the photo stays sharp on high-resolution screens without slowing down standard ones. To change the photo later, replace all three files with PNGs of the same names and pixel sizes. If the new photo has a different shape, update the file names and the `width` and `height` in the `<img>` tag in `index.html`.
- **File names are case-sensitive** on GitHub Pages. `Profile.PNG` and `profile.png` are different files there, even though Windows treats them as the same.
- **Your phone number isn't on the site** on purpose, because the site is public. Your email address is. If you'd rather not publish it, use the Netlify contact form instead (see part 6).

## 4. Preview locally

The quickest option is to double-click `index.html` to open it in your browser.

For live reloading while you edit, install Microsoft's **Live Preview** extension in VS Code. Then right-click `index.html` and select **Show Preview**. The preview updates every time you save.

The custom 404 page only works once the site is published, so it will look unstyled when you open it locally.

## 5. Commit, push and turn on GitHub Pages

### Commit and push

1. Open the **Source Control** view (**Ctrl+Shift+G**).
2. Type a commit message, for example `Add portfolio site`.
3. Select **Commit**. If VS Code asks whether to stage all changes, select **Yes**.
4. Select **Sync Changes** (or **Push**).

### Turn on GitHub Pages (one time only)

1. On GitHub, open `Tam-Paul/portfolio` and select **Settings**.
2. In the sidebar, under **Code and automation**, select **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**, then select **Save**.
5. Wait a few minutes, then refresh the page. GitHub shows the address of your live site at the top: `https://tam-paul.github.io/portfolio/`.

On a free GitHub account, the repository has to be **public** for GitHub Pages to work. If the Pages settings are unavailable, you can change the repository's visibility near the bottom of **Settings → General**.

### Updating the site later

Edit the files, commit and push. GitHub Pages publishes the change automatically, usually within a minute or two. You can watch the progress on the repository's **Actions** tab.

## 6. Optional: Netlify

You don't need Netlify. GitHub Pages hosts this site well on its own. Netlify is worth adding if you want either of these:

- **A working contact form.** GitHub Pages can't receive form submissions. Netlify can, and the site already includes a ready-made form that's switched off.
- **Deploy previews.** Netlify can build a preview of a branch before you merge it.

Both services support a custom domain, so a domain alone isn't a reason to switch.

To publish with Netlify:

1. Sign up at netlify.com with your GitHub account.
2. Select **Add new site** (in some versions, **Add new project**), then **Import an existing project**, and choose **GitHub**.
3. Authorize Netlify and select the `portfolio` repository.
4. Leave **Build command** empty and set **Publish directory** to `.` (a single dot). Then deploy.
5. Your site gets a `*.netlify.app` address. You can rename it under the site settings.

To turn on the contact form:

1. In Netlify, open your site, go to **Forms** and turn on form detection.
2. In `contact.html`, remove the comment markers (`<!--` and `-->`) around the `<form>`. Leave the instruction text above the form commented out.
3. Commit and push. Messages appear under **Forms** in Netlify, and you can set up email notifications there.

If you move to Netlify:

- In `404.html`, change `/portfolio/` to `/` in the four places it appears. On Netlify, the site is at the root of its domain, not in a subfolder.
- Turn off GitHub Pages (**Settings → Pages**), so that two copies of the site aren't live at the same time.

## 7. Optional: a custom domain

If you buy a domain such as `tammypaul.com`, you can connect it in **Settings → Pages → Custom domain** on GitHub, or in your site's domain settings on Netlify. Follow that service's DNS instructions. If you use a custom domain with GitHub Pages, also change `/portfolio/` to `/` in `404.html`.

---

## Reference

- GitHub Docs: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- GitHub Docs: [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- Netlify Docs: [Deploy from your repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- Netlify Docs: [Forms setup](https://docs.netlify.com/manage/forms/setup)
