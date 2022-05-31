// functions that validate the tag values entered
const tagCheck = (tag) => {
  if (!tag) return false
  return tag.split(',');
}

const sortCheck = (sort) => {
  const validSorts = ['id', 'reads', 'likes', 'popularity'];

  if (!validSorts.includes(sort)) return false;
  return true;
}

const directionCheck = (direction) => {
  const validDirections = ['desc', 'asc'];

  if (!validDirections.includes(direction)) return false;
  return true;
}

module.exports = { tagCheck, sortCheck, directionCheck };