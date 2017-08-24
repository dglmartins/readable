import R from 'ramda';

export const toDate = (createdAtMilliseconds) => {
  const date = new Date(createdAtMilliseconds)
  return date.toDateString();
}

export const sortByCurried = ({prop, order}) => R.sort(R[order](R.prop(prop)));
