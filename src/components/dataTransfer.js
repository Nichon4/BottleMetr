export function jsonParse(str) {
  let parsed = {};
  try {
    parsed = JSON.parse(str)
  }
  catch (e) {
    console.log(e);
    return false;
  }
  return parsed;
};

export function jsonStringify(obj) {
  let str = "";
  try {
    str = JSON.stringify(obj);
  }
  catch (e) {
    console.log(e);
    return false;
  }
  return str;
}

export function saveData(obj, key, param, value) {
  let object = localStorage.getItem(obj) ? jsonParse(localStorage.getItem(obj)) : {} ;
  if ( object[key] ) {
    object[key][param] = value;
  } else {
    object[key] = {};
    object[key][param] = value;
  }
  localStorage.setItem(obj, jsonStringify(object));
// TODO: remove before merge
  object = jsonParse(localStorage.getItem(obj));
  console.log(object[key]);
}

export function loadData(obj) {
  let object = localStorage.getItem(obj) ? jsonParse(localStorage.getItem(obj)) : {} ;
  return object;
}

