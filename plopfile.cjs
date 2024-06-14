module.exports = function (plop) {
  plop.setGenerator("slide", {
    description: "slide",
    prompts: [
      {
        type: "input",
        name: "domain",
        message: "domain please",
      },
      {
        type: "input",
        name: "topic",
        message: "topic please",
      }
    ],
    actions: [
      {
        type: "add",
        path: "slides/{{domain}}/{{topic}}.md",
        templateFile: "mustaches/slide.hbs",
        abortOnFail: false,
        skipIfExists: true,
        force: false,
      },
    ],
  });
  plop.setGenerator("article", {
    description: "article",
    prompts: [
      {
        type: "input",
        name: "article",
        message: "article please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "docs/{{article}}.md",
        templateFile: "mustaches/article.hbs",
        abortOnFail: false,
        skipIfExists: true,
        force: false,
      },
    ],
  });
};
