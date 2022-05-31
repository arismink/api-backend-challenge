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

// sort data based on sortBy parameter
const dataSort = (data, sortParam, direction) => {

  switch(sortParam) {
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

// Look for duplicates in data
const removeDuplicates = (data) => {
  const results = data.reduce((unique, o) => {
    if (!unique.some(obj => obj.likes === o.likes && obj.authorId === o.authorId && obj.reads === o.reads)) {
      unique.push(o);
    }
    return unique;
  }, [])

  return results;
}

module.exports = { dataSort, removeDuplicates };