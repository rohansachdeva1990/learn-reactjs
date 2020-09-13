import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  // page 1 -> 0 (0,1,2,3)
  // page 2 -> 4 (4,5,6,7)
  const startIndex = (pageNumber - 1) * pageSize;
  // Wraping to lodash object
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
