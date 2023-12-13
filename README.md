# Résumé template

A résumé template for personal use, built with Astro and customized with Tailwind CSS.

## Development

> [!NOTE]
> `pnpm` was used to install the dependencies, but `npm` or `Yarn` can also be used.

To see the difference between `pnpm` and `npm` commands, see the official documentation [here](https://pnpm.io/pnpm-cli#commands).

Run a command from the root of the project, from a terminal:

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `pnpm install`     | Install project dependencies                     |
| `pnpm dev`         | Start a local dev server at `localhost:4321`     |
| `pnpm build`       | Build project for production to `./dist/`        |
| `pnpm preview`     | Preview the build locally, before deploying      |

Find more commands in the [official documentation](https://docs.astro.build/en/reference/cli-reference) provided by Astro to further develop, build, and preview the project from a terminal window.

## Example

See the `sample-data` branch for an example résumé with sample data, or scroll below for a preview image.

> [!IMPORTANT]
> When creating a PDF after building the project for production, you may sometimes need to correct the layout of the pages using CSS.

> [!TIP]
> Add the CSS style `page-break-before: always` or `page-break-after: always` to move the content to a new page.
> As an alternative, you can use the `break-before-page` and `break-after-page` classes from Tailwind CSS, but be sure to rebuild the project.

## Preview

![Screenshot](images/screenshot.png)
