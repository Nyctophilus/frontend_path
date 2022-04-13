const cookies = document.cookie;

// add new entries
cookies = `name=MuhammedFayad; age=25;`; // session cookie (only for this session) 'tab close'

// list all entries
let cookiesList = [];
document.cookie
  .split(";")
  .forEach(
    (cookie) =>
      (cookiesList[cookie.trim().split("=")[0]] = cookie
        .trim()
        .split("=")[1])
  );

// comunication between client and server which is using/store (cookies)
// while moving from one page to another athuntication is done using cookies

/**
 * 	 persistent cookies
 */
cookies = `name=MuhammedFayad; age=25; expires=22/11/2022`; // has expire date

/*
	Delete cookie (logout)
*/

for (let i in cookiesList)
  document.cookie = `${i}=;expires=22-11-1995`;
