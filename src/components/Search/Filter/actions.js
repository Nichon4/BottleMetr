export const SHOW_FILTER = 'SHOW_FILTER';
export const HIDE_FILTER = 'HIDE_FILTER';

export function searchFilter(state) {
  //console.log(state)
  return { type: state ? HIDE_FILTER : SHOW_FILTER }
}