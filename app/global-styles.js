import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  body {
  font-family: -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", 
    "Fira Sans", "Droid Sans", "Helvetica Neue", 
    sans-serif;
}
.navbar {
  background: #111 !important;
  margin-bottom: 0 !important;
}

.navbar a {
  color: white !important;
}

.navbar-default {
  margin-bottom: 0px;
}


.navbar a:hover {
  color: #abaab7 !important;
}

.caption a {
  color: black;
}
/*To avoid content below footer*/
.App {
  padding-bottom: 40px;
}

/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 30px;
  /* Set the fixed height of the footer here */
  height: 80px;
  background-color: #f5f5f5;
}

/* Desktops and laptops ----------- */
@media only screen 
and (min-width : 1224px) {
  .thumbnail img {
  width: 350px;
  height: 260px;
}
}

@media (min-width: 768px) {
  .navbar {
    padding-top: 20px;
    height: 90px;
    background: #111 !important;
  }

  .navbar-collapse {
    margin-top: -1px;
  }

  .navbar-nav.navbar-center {
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
  }
}
`;
