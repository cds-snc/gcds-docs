const chroma = require('chroma-js');

const designTokens = require('../src/tokens/figma/figma.tokens.json');
const i18n = require('./display-tokens.i18n');

const displayTokens = (token, subCategory, locale) => {
  const tokens = getTokenValues(designTokens.Tokens, token, [], 'gcds');

  let tableHeading = '';
  let tableBody = '';
  let headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  // Render the correct table for passed token and subCategory
  switch (token) {
    case 'color':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale][token].headers.name}</th>
          <th>${i18n[locale][token].headers.token}</th>
          <th>${i18n[locale][token].headers.contrast}</th>
          <th>${i18n[locale][token].headers.hex}</th>
          <th>${i18n[locale][token].headers.rgb}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        let color = tokens[i].token.replace('gcds-color-', '').split('-');
        tableBody += `<tr>
            <td>
              <div
                style="width: var(--gcds-spacing-500); height: var(--gcds-spacing-500); border-radius: var(--gcds-spacing-500); background-color: ${
                  tokens[i].value
                }; border: 1px solid #EDEDED"
              >
              </div>
            </td>
            <td>${i18n[locale][token].body[color[0]]} ${color[1]}</td>
            <td>--${tokens[i].token}</td>
            <td>${
              Math.floor(chroma.contrast(tokens[i].value, '#FFF') * 100) / 100
            }</td>
            <td>${tokens[i].value}</td>
            <td>${chroma(tokens[i].value).css()}</td>
          </tr>`;
      }

      break;

    case 'spacing':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale][token].headers.token}</th>
          <th>${i18n[locale][token].headers.px}</th>
          <th>${i18n[locale][token].headers.rem}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style="width: ${tokens[i].value}; height: ${
                  tokens[i].value
                }; background-color: var(--gcds-color-blue-900);"
              >
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value.replace('rem', '') * 16}</td>
            <td>${tokens[i].value.replace('rem', '')}</td>
          </tr>`;
      }

      break;

    case 'font':
      if (subCategory == 'paragraphs') {
        tokens.reverse();
      }

      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale][token].headers.token}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (
          subCategory == 'headings' &&
          headings.includes(tokens[i].token.replace('gcds-font-', ''))
        ) {
          tableBody += `<tr>
            <td>
              <div
                style='font: ${tokens[i].value.fontWeight} ${tokens[
                  i
                ].value.fontSize.replace('rem', '')}rem/${tokens[
                  i
                ].value.lineHeight.replace('%', '')}% ${
                  tokens[i].value.fontFamily
                };'
              >
                ${i18n[locale][token].body['heading']} ${tokens[
                  i
                ].token.replace('gcds-font-h', '')}
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>
              ${tokens[i].value.fontWeight}
              ${
                Math.round(tokens[i].value.fontSize.replace('rem', '') * 100) /
                100
              }rem/${
                Math.round(tokens[i].value.lineHeight.replace('%', '') * 10) /
                10
              }%
              ${tokens[i].value.fontFamily}
            </td>
          </tr>`;
        } else if (
          subCategory == 'paragraphs' &&
          !headings.includes(tokens[i].token.replace('gcds-font-', ''))
        ) {
          tableBody += `<tr>
            <td>
              <div
                style='font: ${tokens[i].value.fontWeight} ${tokens[
                  i
                ].value.fontSize.replace('rem', '')}rem/${tokens[
                  i
                ].value.lineHeight.replace('%', '')}% ${
                  tokens[i].value.fontFamily
                };'
              >
                ${
                  i18n[locale][token].body[
                    tokens[i].token.replace('gcds-font-', '')
                  ]
                }
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>
              ${tokens[i].value.fontWeight}
              ${
                Math.round(tokens[i].value.fontSize.replace('rem', '') * 100) /
                100
              }rem/${
                Math.round(tokens[i].value.lineHeight.replace('%', '') * 10) /
                10
              }%
              ${tokens[i].value.fontFamily}
            </td>
          </tr>`;
        }
      }

      break;

    case 'fontWeights':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale][token].headers.token}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style="font-weight: ${tokens[i].value};"
              >
                ${
                  i18n[locale][token].body[
                    tokens[i].token.replace('gcds-font-weights-', '')
                  ]
                }
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;
      }

      break;

    case 'fontFamilies':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale][token].headers.token}</th>
          <th>${i18n[locale][token].headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style='font-family: ${tokens[i].value};'
              >
                ${
                  i18n[locale][token].body[
                    tokens[i].token.replace('gcds-font-families-', '')
                  ]
                }
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;
      }

      break;

    case 'border':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale].global.headers.token}</th>
          <th>${i18n[locale].global.headers.hex}</th>
          <th>${i18n[locale].global.headers.usecase}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        if (subCategory == 'color' && tokens[i].value.includes('#')) {
          tableBody += `<tr>
            <td>
              <div
                style="width: var(--gcds-spacing-500); height: var(--gcds-spacing-500); border-radius: var(--gcds-spacing-500); background-color: ${
                  tokens[i].value
                }; border: 1px solid #EDEDED"
              >
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
            <td>${
              i18n[locale].global.body[tokens[i].token.replace('gcds-', '')]
            }</td>
          </tr>`;
        } else if (subCategory == 'size' && tokens[i].value.includes('rem')) {
          tableBody += `<tr>
              <td>
                <div
                  style="width: var(--gcds-spacing-500); height: var(--gcds-spacing-500); border-radius: var(--gcds-spacing-500); background-color: ${tokens[i].value}; border: 1px solid #EDEDED"
                >
                </div>
              </td>
              <td>--${tokens[i].token}</td>
              <td>${tokens[i].value}</td>
              <td>use case text</td>
            </tr>`;
        }
      }

      break;

    case 'text':
    case 'link':
    case 'focus':
    case 'danger':
    case 'disabled':
      tableHeading = `<tr>
          <th></th>
          <th>${i18n[locale].global.headers.token}</th>
          <th>${i18n[locale].global.headers.hex}</th>
          <th>${i18n[locale].global.headers.usecase}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>
              <div
                style="width: var(--gcds-spacing-500); height: var(--gcds-spacing-500); border-radius: var(--gcds-spacing-500); background-color: ${
                  tokens[i].value
                }; border: 1px solid #EDEDED"
              >
              </div>
            </td>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
            <td><td>${
              i18n[locale].global.body[tokens[i].token.replace('gcds-', '')]
            }</td></td>
          </tr>`;
      }

      break;

    default:
      tableHeading = `<tr>
          <th>${i18n[locale].default.headers.token}</th>
          <th>${i18n[locale].default.headers.value}</th>
        </tr>`;

      for (var i = 0; i < tokens.length; i++) {
        tableBody += `<tr>
            <td>--${tokens[i].token}</td>
            <td>${tokens[i].value}</td>
          </tr>`;
      }
      break;
  }

  return `<table>
    ${tableHeading}
    ${tableBody}
  </table>`;
};

/*
 * Load token values based off of passed token
 */
function getTokenValues(object, token, tokenArray, tokenVar) {
  let fixName = '';

  if (onlyCapitalLetters(token)) {
    fixName = token.replace(
      onlyCapitalLetters(token),
      `-${onlyCapitalLetters(token).toLowerCase()}`,
    );
  } else {
    fixName = token;
  }

  tokenVar = tokenVar + '-' + fixName;

  if ('value' in object[token]) {
    tokenArray.push({
      token: tokenVar,
      value: object[token].value,
    });
  } else {
    for (var key in object[token]) {
      getTokenValues(object[token], key, tokenArray, tokenVar);
    }
  }

  return tokenArray;
}

/*
 * Return capital letters in passed string
 */
function onlyCapitalLetters(str) {
  return str.replace(/[^A-Z]+/g, '');
}

module.exports = displayTokens;
