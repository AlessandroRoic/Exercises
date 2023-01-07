"use strict";

(() => {
  let userData = null;

  const getUserData = async () => {
    return await fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.log(error));
  };

  const mapTextContent = (id, content) =>
    (document.getElementById(id).textContent = content);

  const mapUserData = (data) => {
    userData = data[0];
    const { name, email, picture } = userData;
    mapTextContent("userName", `${name.first} ${name.last}`);
    mapTextContent("email", email);
    document.querySelector("img").src = picture.medium;
    console.log(userData);
  };

  const init = () => {
    getUserData().then(mapUserData);
  };

  init();
})();
