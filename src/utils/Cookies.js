const setCookies = (tokens) => {
  document.cookie = `accessToken=${
    tokens.accessToken
  }; max-age=${1 * 24 * 60 * 60}`;
  document.cookie = `refreshToken=${
    tokens.refreshToken
  }; max-age=${365 * 24 * 60 * 60}`;
};

const getCookies = (cookieName) => {
  return document.cookie
    .split(";")
    .find(
      (token) => token.trim().split("=")[0] === cookieName
    )
    ?.split("=")[1];
};

export { setCookies, getCookies };
