const fs = require("fs");
const handlebars = require("handlebars");

export function displayValue(value: string) {
  console.log(`${value}`);
}

interface ITemplate {
  templateName: string;
  data: {
    name?: string;
    confirmationLink?: string;
    resetPasswordLink?: string;
    invitationLink?: string;
    inviterName?: string;
  };
}

function renderTemplate({ templateName, data }: ITemplate) {
  const templatePath = `${__dirname}/templates/${templateName}.html`;
  const templateSource = fs.readFileSync(templatePath, "utf8");

  const template = handlebars.compile(templateSource);

  return template(data);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { displayValue, renderTemplate };
}
