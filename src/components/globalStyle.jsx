import { createGlobalStyle } from "styled-components";

import "@fontsource/montserrat"; // 數字字型 Defaults to weight 400.
import "@fontsource/noto-sans-tc"; //中英文字型 Defaults to weight 400.

export const ResetStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;

export const GlobalStyle = createGlobalStyle`
:root{
  --color-white:#FFFFFF;
  --color-main:#FF6600;
  --color-primary:#0062FF;
  --color-secondary:#6C757D;
  --color-success:#3DD598;
  --color-warngin:#FFC542;
  --color-error:#FC5A5A;
  --color-secondary-orange:#FF974A;
  --color-secondary-blue:#50B5FF;
  --color-secondary-green:#82C43C;
  --color-secondary-purple:#A461D8;
  --color-secondary-pink:#FF9AD5;
  --color-grayscale-dark100:#171725;
  --color-grayscale-dark90:#44444F;
  --color-grayscale-dark80:#696974;
  --color-grayscale-dark70:#92929D;
  --color-grayscale-dark60:#B5B5BE;
  --color-grayscale-dark40:#E2E2EA;
  --color-grayscale-dark30:#F1F1F5;
  --color-grayscale-dark20:#FAFAFB;
  --color-grayscale-dark20:#FAFAFB;
  --color-input-background:#F5F8FA;
  --color-line-default: #657786;
  --color-line-hover-focus: #50B5FF;
  --color-line-errors: #FC5A5A;
  --color-line-disabled: #D5D5DC;
}

html,body {
  font-family: Noto Sans TC;
  box-sizing: border-box;
  font-size: 16px;
}
h1{
/* font-family: 'Noto Sans TC'; */
font-style: normal;
font-weight: 700;
font-size: 68px;
line-height: 78px;
/* identical to box height, or 115% */
}
h2{
/* font-family: 'Noto Sans TC'; */
font-style: normal;
font-weight: 700;
font-size: 42px;
line-height: 52px;
/* identical to box height, or 124% */
}
h3{
/* font-family: 'Noto Sans TC'; */
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 26px;
/* identical to box height, or 93% */
}
h4{
/* font-family: 'Noto Sans TC'; */
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 26px;
/* identical to box height, or 108% */
}
h5{
/* font-family: 'Noto Sans TC'; */
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */
}
`;
