import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    .dashboard {
      background-color: ${({ theme }) => theme.dashboard};
}
.sidebar, .big-sidebar, .small-sidebar {
  background-color: ${({ theme }) => theme.sidebar};
}
.search {
  background-color: ${({ theme }) => theme.search};
}
  .navbar {
    background-color: ${({ theme }) => theme.navbar};
  }
  .card, .first-state-card {
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.cardText};
  }

  .card:hover {
    background-color: ${({ theme }) => theme.cardHover};
  }

  .first-state-card {
    background-color: ${({ theme }) => theme.firstCard};
  }


  .topSearch{
    background-color: ${({ theme }) => theme.topSearch};
    
  }
  .textSearch{
    color: ${({ theme }) => theme.textSearch};
    
  }
  .card:hover .description {
    color: ${({ theme }) => theme.descriptionHover};
  }

 .description, {
    color: ${({ theme }) => theme.codeDescription};
  }

  .global-text, input,  
  /* .code-desc,  */
   .count, {
    color: ${({ theme }) => theme.globalText};
  }
  
.link {
  color: ${({ theme }) => theme.link};
}
.link:hover {
  box-shadow: ${({ theme }) => theme.linkHover};
}

    
`;
export const lightTheme = {
  body: "#F5F5F7",
  sidebar: "#fff",
  navbar: "#fff",
  search: "#fff",
  card: "transparent",
  firstCard: "#fff",
  globalText: "#053651",

  link: "#053651",
};
export const darkTheme = {
  navbar: "#1C1C1EFF",
  text: "#fff",
  textSearch: "#000",
  search: "#fff",
  body: "#121212",
  sidebar: "#1C1C1EFF",
  firstCard: "#1C1C1EFF",
  card: "transparent",
  cardHover: "#1C1C1EFF",
  cardText: "#fff",
  globalText: "#ffffff",
  description: "red",
  descriptionHover: "#fff",
  link: "#fff",
  linkHover: "inset 200px 0 200px 0 #00afb9;",
};
