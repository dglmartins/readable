import R from 'ramda';

export const toDate = (createdAtMilliseconds) => {
  const date = new Date(createdAtMilliseconds)
  return date.toString();
}

//experimenting with Ramda. sortByCurried is a function I built that uses Ramda to take an object that contains the properties prop and order. it returns a function that expects an array to be sorted first by R[order](R.prop(prop)) - eg. R.descend(R.prop('voteScore') will order by property voteScore, descending. Then orders by R.descend(R.prop('timestamp')), which orders by newest. 
export const sortByCurried = ({prop, order}) => R.sortWith([
  R[order](R.prop(prop)),
  R.descend(R.prop('timestamp'))
]);
