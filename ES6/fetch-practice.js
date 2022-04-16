const getRandomUsers = async (n) => {
  const res = await fetch(
    `https://randomuser.me/api/?results=${n}`
  );

  try {
    const data = await res.json();

    // console.log(data);

    data.results.forEach((user) => {
      const {
        gender: g,
        name: { title: t, first: f, last: l },
        email: e,
      } = user;

      console.log(
        `${t},${f} ${l}:    '${g}',      contact at: ${e}`
      );
    });
  } catch (e) {
    console.log(e);
  }
};

getRandomUsers(22);
