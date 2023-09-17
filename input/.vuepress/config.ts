import { getSlugger } from "glossarify-md";
import { defaultTheme } from "@vuepress/theme-default";
import fs from "fs";

const slugify = {
  slugify: getSlugger()
};

const isMarkdownFileOrUnknown = /^\.?[a-zA-Z0-9-+_]+(\.md)?$/;
const isMarkdownFile = /\.md$/;
const isMarkdownReadme = /README\.md$/;

const { sidebar } = getConfig({}, "./input");
console.log(JSON.stringify(sidebar, null, 2));
export default {
    title: 'VuePress 2.x Test Bed',
    description: '',
    markdown: {
      toc: { ...slugify },
      anchor: { ...slugify },
      extractHeaders: { ...slugify },
      /*extendMarkdown: md => {
        md.set({ breaks: true })
        md.use(require('markdown-it-footnote'))
        md.use(require('markdown-it-toc-done-right'), {
          ...slugify
        })
      }*/
    }
    ,theme: defaultTheme({
      sidebar
    })
    ,plugins: [
      'vuepress-plugin-jsonld-playground'
    ]
}

function getConfig(opts = {}, path = "") {
  const defaults = {
    stripNumbers: true,
    maxLevel: 2,
    filter: null
    // navPrefix: "nav"
    // skipEmptySidebar: true,
    // skipEmptyNavbar: true
    // multipleSideBar: true
    // addReadMeToFirstGroup: true
    // mixDirectoriesAndFilesAlphabetically: true
    // pinyinNav: true
  };
  return {
    sidebar: getSidebar(path),
    navbar: getSidebar(path)
  };
}

function toForwardSlash(path) {
  return path.replace(/(\\+|\/\/+)/g, "/");
}

/**
 * Comparator which sorts README.md files to the beginning and any other files
 * by their file name.
 * 
 * @param fileA 
 * @param fileB 
 * @returns 
 */
function sortByFileName(fileA, fileB) {
  if (isMarkdownReadme.test(fileA)) {
    return -1;
  } else if (isMarkdownReadme.test(fileB)) {
    return 1;
  } else {
    return fileA.localeCompare(fileB);
  }
}

function mapToSidebarItem(file, path, _basePath) {
  // Path normalization: replace duplicate and OS-dependent path separators
  const _path = toForwardSlash(`${path}/${file}`);
  const stat = fs.statSync(_path);
  if (stat.isDirectory()) {
    const children = getSidebar(_path, _basePath); // Entering recursion!
    if (children.length > 0) {
      const text = `${file}`
        .replace(/(\w)[-_](\w)/g, "$1 $2") // Convert single dashes and underscores to whitespaces
        .replace(/(-|_)+/g, "$1") // Convert duplicate dashes and underscores to single dash or underscore
        .replace(/^\d+\s?/, ""); // Strip leading numbers in file names

      // Determine item link URL: check whether subdirectory has file entries or README.md
      const files = children.filter(c => typeof c === "string");
      const mdReadme = files.find(file => isMarkdownReadme.test(file));
      const mdFile = files.find(file => isMarkdownFile.test(file));
      const pathSegment = toForwardSlash(_path.replace(_basePath, "/"));
      const link = mdReadme || mdFile || pathSegment;
      return { text, link, children, collapsible: true };
    } else {
      return; // no markdown children in this directory
    }
  } else {
    // Since basePath is a filesystem path pointing to vuepress's root
    return toForwardSlash(_path.replace(_basePath, "/"));
  }
}

/**
 * 
 * @param path Path relative to the current working directory of vuepress containing markdown files.
 * @param _basePath Path relative to the current working directory of vuepress which corresponds to the document root path. Recommended to leave empty. Will default to `path`.
 * @returns 
 */
function getSidebar(path, _basePath = "") {
  if (! path) {
    throw new Error("Missing search path argument (0)");
  }
  if (! _basePath) {
    _basePath = path;
  }

  const files = fs.readdirSync(path);
  const sidebar = files
    .filter(file => isMarkdownFileOrUnknown.test(file))
    .sort(sortByFileName)
    .map(file => mapToSidebarItem(file, path, _basePath))
    .filter(item => !!item); 
    // filter `null` or `undefined` items that may be created
    // when attempting to map directories without .md content

    return sidebar;
}