const sortById = (data, direction) => {
  if (direction === "desc")
    return data.sort((a, b) => a.id < b.id ? 1 : - 1);

  return data.sort((a, b) => a.id > b.id ? 1 : - 1);

};

const sortByReads = (data, direction) => {
  if (direction === "desc")
    return data.sort((a, b) => a.reads < b.reads ? 1 : -1);

  return data.sort((a, b) => a.reads > b.reads ? 1 : -1);
};

const sortByLikes = (data, direction) => {
  if (direction === "desc")
    return data.sort((a, b) => a.likes < b.likes ? 1 : -1);

  return data.sort((a, b) => a.likes > b.likes ? 1 : -1)
}

const sortByPopularity = (data, direction) => {
  if (direction === "desc")
    return data.sort((a, b) => a.popularity < b.popularity ? 1 : -1);

  return data.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
};

const dataSort = (data, sortTag, direction) => {

  switch(sortTag) {
    case("id"):
      return sortById(data, direction);

    case("reads"):
      return sortByReads(data, direction);

    case("likes"):
      return sortByLikes(data, direction);

    case("popularity"):
      return sortByPopularity(data, direction);

    default:
      return data;
  }

};

module.exports = { dataSort };