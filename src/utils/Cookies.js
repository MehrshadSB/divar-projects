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

function deleteAllCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name =
      eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie =
      name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}

export { setCookies, getCookies, deleteAllCookies };
