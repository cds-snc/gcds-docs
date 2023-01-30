const chroma = require("chroma-js");

const designTokens = require("../src/tokens/figma/figma.tokens.json");
const i18n = require("./display-tokens.i18n");

const displayTokens = (token, subCategory, locale) => {

  const tokens = getTokenValues(designTokens.Tokens, token, [], "", "gcds");

  let tableHeading = "";
  let tableBody = "";
  let headings = ["h1","h2","h3","h4","h5","h6"];

  switch (token) {

    case "color":

      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.preview}</th>
          <th>${i18n[locale][token].headers.name}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.contrast}</th>
          <th>${i18n[locale][token].headers.hex}</th>
          <th>${i18n[locale][token].headers.rgb}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style="width: var(--gcds-spacing-500); height: var(--gcds-spacing-400); background-color: ${tokens[i].value}; border: 1px solid #EDEDED"
              >
              </div>
            </td>
            <td>${tokens[i].name}</td>
            <td>--${tokens[i].token}</td>
            <td>${Math.floor(chroma.contrast(tokens[i].value, "#FFF") * 100) / 100}</td>
            <td>${tokens[i].value}</td>
            <td>${chroma(tokens[i].value).css()}</td>
          </tr>`;
      }

      break;

    case "spacing":

      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.preview}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.sass}</th>
          <th>${i18n[locale][token].headers.px}</th>
          <th>${i18n[locale][token].headers.rem}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style="width: ${tokens[i].value}; height: ${tokens[i].value}; background-color: var(--gcds-color-blue-900);"
              >
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value.replace('rem', '') * 16}px</td>
            <td>${tokens[i].value}</td>
          </tr>`;
      }

      break;

    case 'fontFamilies':


      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.example}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.sass}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (subCategory == "headings" && tokens[i].token.replace("gcds-font-families-", "") == "heading") {
          tableBody += `<tr>
            <td>
              <div
                style="font-family: ${tokens[i].value}"
              >
                ${i18n[locale][token].body.headings}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        } else if (subCategory == "paragraphs" && tokens[i].token.replace("gcds-font-families-", "") == "body") {

          tableBody += `<tr>
            <td>
              <div
                style="font-family: ${tokens[i].value}"
              >
                Paragraph
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        }
      }

      break;

    case 'fontSizes':

      tokens.reverse();

      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.example}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.sass}</th>
          <th>${i18n[locale][token].headers.px}</th>
          <th>${i18n[locale][token].headers.rem}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (subCategory == "headings" && headings.includes(tokens[i].token.replace("gcds-font-sizes-", ""))) {
          tableBody += `<tr>
            <td>
              <div
                style="font-size: ${tokens[i].value};"
              >
                ${i18n[locale][token].body.headings} ${tokens[i].token.replace("gcds-font-sizes-h", "")}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value.replace('rem', '') * 16}px</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        } else if (subCategory == "paragraphs" && !headings.includes(tokens[i].token.replace("gcds-font-sizes-", ""))) {

          tableBody += `<tr>
            <td>
              <div
                style="font-size: ${tokens[i].value};"
              >
                ${i18n[locale][token].body.paragraphs}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value.replace('rem', '') * 16}px</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        }
      }

      break;

    case 'fontWeights':

      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.example}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.sass}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (subCategory == "headings" && tokens[i].token.replace("gcds-font-weights-", "") == "bold") {

          tableBody += `<tr>
            <td>
              <div
                style="font-weight: ${tokens[i].value};"
              >
                ${i18n[locale][token].body.headings} 1 - 6
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        } else if (subCategory == "paragraphs") {

          tableBody += `<tr>
            <td>
              <div
                style="font-weight: ${tokens[i].value};"
              >
                ${i18n[locale][token].body.paragraphs}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        }
      }

      break;

    case 'lineHeights':

      tokens.reverse();

      tableHeading = `<tr>
          <th>${i18n[locale][token].headers.example}</th>
          <th>${i18n[locale][token].headers.css}</th>
          <th>${i18n[locale][token].headers.sass}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (subCategory == "headings" && headings.includes(tokens[i].token.replace("gcds-line-heights-", ""))) {
          tableBody += `<tr>
            <td>
              <div
                style="line-height: ${tokens[i].value}; font-size: var(--gcds-font-sizes-${tokens[i].token.replace("gcds-line-heights-", "")})"
              >
              ${i18n[locale][token].body.headings} ${tokens[i].token.replace("gcds-line-heights-h", "")}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        } else if (subCategory == "paragraphs" && !headings.includes(tokens[i].token.replace("gcds-line-heights-", ""))) {

          tableBody += `<tr>
            <td>
              <div
                style="line-height: ${tokens[i].value};"
              >
                Paragraph
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>$${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;

        }
      }

      break;

    default:
      // Build out a more generic table for later values?
      break;
  }

  return `<table>
    ${tableHeading}
    ${tableBody}
  </table>`;
}

/*
* Load token values based off of passed token
*/
function getTokenValues(object, token, tokenArray, name, tokenVar) {

  let fixName = "";

  if (onlyCapitalLetters(token)) {
    fixName = token.replace(onlyCapitalLetters(token), `-${onlyCapitalLetters(token).toLowerCase()}`);
  } else {
    fixName = token;
  }

  tokenVar = tokenVar + "-" + fixName;

  if (name == "") {
    name = fixName;
  } else {
    name = name + " " + fixName;
  }

  if ("value" in object[token]) {

    tokenArray.push({
      "name": name,
      "token": tokenVar,
      "value": object[token].value
    });

  } else {

    for (var key in object[token]) {
      getTokenValues(object[token], key, tokenArray, name, tokenVar);
    }

  }

  return tokenArray;
}

/*
* Return capital letters in passed string
*/
function onlyCapitalLetters (str) {
  return str.replace(/[^A-Z]+/g, "");
}

module.exports = displayTokens;
