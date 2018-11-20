export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';

export function showMenu(state) {
  //console.log(state)
  return { type: state ? HIDE_MENU : SHOW_MENU }
}
