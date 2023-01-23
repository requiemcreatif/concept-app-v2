import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;

    .dashboard {
      background-color: ${({ theme }) => theme.dashboard};
}
.sidebar {
  background-color: ${({ theme }) => theme.sidebar};
}
.search {
  background-color: ${({ theme }) => theme.search};
}
  .navbar {
    background-color: ${({ theme }) => theme.navbar};
  }
  .card {
    background-color: ${({ theme }) => theme.card};
  }

  .topSearch{
    background-color: ${({ theme }) => theme.topSearch};
  }
  }
  


    
`;
export const lightTheme = {
  body: "#e3e2df",
  //dashboard: "#fff",
  sidebar: "#fff",
  navbar: "#fff",
  //topSearch: "#fff",
  search: "#fff",
  card: "#fff",
};
export const darkTheme = {
  body: "#0b0c10",
  //dashboard: "#0b0c10",
  //sidebar: "#1f2833",
  topSearch: "#1f2833",
  navbar: "#1f2833",
  sidebar: "#1f2833",
  card: "#1f2833",
};
