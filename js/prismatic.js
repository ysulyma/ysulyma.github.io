(async () => {
  // helpers
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) =>
    Array.from(context.querySelectorAll(selector));
  const $el = (name, attrs = {}, ...children) => {
    const el = document.createElement(name);
    for (const [key, value] of Object.entries(attrs))
      el.setAttribute(key, value);
    for (const child of children) {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        el.appendChild(child);
      }
    }
    return el;
  };
  const $h = (innerHTML) => {
    const div = $el("div");
    div.innerHTML = innerHTML;
    return div.firstChild;
  };

  const tagNames = {
    "big-picture": "big picture",
    calculation: "calculation",
    "cartier-tr": "TR",
    dr: "Ω",
    drw: "WΩ",
    "formal-groups": "formal groups",
    genuine: "genuine equivariance",
    "hodge-de-rham": "hodge-de Rham degeneration",
    k: "k-theory",
    log: "logarithmic",
    prism: "prismatic",

    start: "good place to start",
    major: "new idea",
    notes: "notes",
    solve: "solves major problem",
  };

  const tagIcons = {
    "big-picture": {
      alt: "big picture",
      color: "lightseagreen",
      icon: "globe-hemisphere-west",
    },
    major: {
      alt: "major new idea",
      color: "darkorchid",
      icon: "star-fill",
    },
    notes: {
      alt: "course notes",
      color: "cornflowerblue",
      icon: "notebook-fill",
    },
    solve: {
      alt: "solves major problem",
      color: "orange",
      icon: "rocket-launch-fill",
    },
    start: {
      alt: "good place to start",
      color: "green",
      icon: "number-square-one-fill",
    },

    calculation: {
      alt: "calculation",
      color: "red",
      icon: "calculator",
    },
    // even: {
    //   alt: "even filtration",
    //   color: "purple",
    //   icon: "funnel-simple",
    // },
    "fargues-fontaine": {
      alt: "Fargues-Fontaine curve",
      color: "deepskyblue",
      icon: "meta-logo",
    },
    "formal-groups": {
      alt: "formal groups",
      color: "#af1866",
      icon: "wine-fill",
    },
    genuine: {
      alt: "genuine equivariance",
      color: "forestgreen",
      icon: "google-logo",
    },
    log: {
      alt: "logarithmic stuff",
      color: "saddlebrown",
      icon: "log-fill",
    },
    prism: {
      alt: "prismatic",
      color: "hotpink",
      icon: "/prism.svg",
    },
    real: {
      alt: "Real",
      color: "red",
      icon: "/assets/mathbbR.svg",
    },
    stacky: {
      alt: "stacky perspective",
      color: "teal",
      icon: "stack",
    },
  };

  const primaryTags = new Set(["notes", "start", "major", "solve"]);

  const root = $("#prismatic-widget");

  /** @type HTMLDivElement */
  const output = $("#prismatic-list");
  if (!output) return;

  /** @type HTMLInputElement */
  const input = $("#prismatic-input");
  if (!input) return;
  input.addEventListener("input", onType);

  for (const checkbox of $$("input[type=checkbox]", root)) {
    checkbox.addEventListener("change", onCheckbox);
  }

  /**
   * @type ({
      title: string;
      authors?: string[];
      href: string;
      tags?: string[];
    }[])
   */
  let items = [];

  let options = {
    search: [],
    tags: new Set(),
  };

  async function initialize() {
    const res = await fetch("/prismatic.json").then((res) => res.json());
    items = res.filter((item) => typeof item !== "string");
    repaint();
    await replaceIcons();
    repaint();
  }

  function replaceIcons() {
    return Promise.all(
      Object.keys(tagIcons).map(async (key) => {
        const iconPath = tagIcons[key].icon;
        let svg = await fetch(
          iconPath.startsWith("/")
            ? iconPath
            : `/assets/phosphor/${iconPath}.svg`,
        ).then((res) => res.text());
        svg = svg.replace(/<\?xml[^>]*>/, "");

        for (const element of $$(`img[data-icon="${key}"]`)) {
          const svgElt = $h(svg);
          if (!svgElt) {
            console.log(svg);
          }
          svgElt.setAttribute("class", "prismatic-tag-icon");

          for (const child of $$("g, path", svgElt)) {
            child.setAttribute("fill", tagIcons[key].color);
            child.style.fill = tagIcons[key].color;
          }
          element.replaceWith(svgElt);
        }
        tagIcons[key].svg = svg;
      }),
    );
  }

  function getSortedFiltered() {
    return items
      .filter((item) => {
        const matchesSearch =
          options.search.length === 0 ||
          options.search.some(
            (term) =>
              item.authors.some((author) =>
                author.toLowerCase().includes(term),
              ) || item.title.toLowerCase().includes(term),
          );

        const matchesTags =
          options.tags.size === 0 ||
          Array.from(options.tags).some((tag) => item.tags.includes(tag));

        return matchesSearch && matchesTags;
      })
      .sort((a, b) => {
        if (a.authors.length === 0) return -1;
        if (b.authors.length === 0) return 1;

        for (let i = 0; i < a.authors.length && i < b.authors.length; ++i) {
          const authorA = a.authors[i];
          const authorB = b.authors[i];
          if (authorA !== authorB) {
            return authorA.localeCompare(authorB);
          }
        }

        if (a.authors.length < b.authors.length) return -1;
        if (a.authors.length > b.authors.length) return 1;

        return a.title.localeCompare(b.title);
      });
  }

  function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function split(str, sep) {
    if (str.length === 0) return [];
    return str.split(sep);
  }

  function onType(e) {
    options.search = split(normalize(e.target.value), " ");
    repaint();
  }

  function onCheckbox(e) {
    const value = e.target.value;
    if (e.target.checked) {
      options.tags.add(value);
    } else {
      options.tags.delete(value);
    }
    repaint();
  }

  function repaint() {
    const rows = getSortedFiltered();

    output.replaceChildren(
      $el(
        "ul",
        {},
        ...rows.map((item) => {
          const tagsSorted = item.tags.slice().sort((a, b) => {
            if (tagIcons[a] && !tagIcons[b]) return -1;
            if (!tagIcons[a] && tagIcons[b]) return 1;

            if (primaryTags.has(a) && !primaryTags.has(b)) return -1;
            if (!primaryTags.has(a) && primaryTags.has(b)) return 1;

            return a.localeCompare(b);
          });

          return $el(
            "li",
            {class: "prismatic-item"},
            $el("span", {class: "authors"}, (item.authors ?? []).join("-")),

            $el(
              "div",
              {class: "inline"},
              $el("a", {href: item.href}, item.title),
              $el(
                "div",
                {class: "inline-flex items-center prismatic-tags"},
                ...tagsSorted.map((tag) => {
                  if (tagIcons[tag]?.svg) {
                    const div = $el("div");
                    div.innerHTML = tagIcons[tag].svg;
                    const svg = div.firstChild;

                    svg.setAttribute("alt", tagIcons[tag].alt);
                    svg.setAttribute("title", tagIcons[tag].alt);

                    $("path", svg).style.fill = tagIcons[tag].color;

                    svg.setAttribute("class", "prismatic-tag-icon");

                    return svg;
                  }

                  return $el(
                    "span",
                    {class: `tag tag-${tag}`},
                    tagNames[tag] ?? tag,
                  );
                }),
              ),
            ),
          );
        }),
      ),
    );
    MathJax.startup.promise.then(() => MathJax.typesetPromise([output]));
  }

  initialize();
})();
