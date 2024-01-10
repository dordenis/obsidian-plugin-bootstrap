# Obsidian Plugin Bootstrap

This is a template for bootstrapping development of plugins for [Obsidian](https://obsidian.md/).

## Features of this template

- All the required changes are written in the `${VARIABLE_NAME}` form, so it's easier not to overlook them.
- You have to rename [`README.md.template`](./README.md.template) to `README.md`.
- Code style forced via [`ESLint`](https://eslint.org/).
- Available commands:
  - `npm run dev`: builds the development version of `main.js`.
    - If the environment variable `OBSIDIAN_CONFIG_DIR` is set to something like `path/to/my/vault/.obsidian`, the command automatically copies the compiled version of the plugin there and triggers [Hot Reload](https://github.com/pjeby/hot-reload) plugin if it is installed.
  - `npm run build`: builds the production version of `main.js` ready for publishing the release.
  - `npm run version`: updates the plugin's version in multiple places, based on the value from `package.json`.
  - `npm run lint`: verifies code style and fixes it automatically if it can.
