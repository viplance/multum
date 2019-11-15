const LOCAL_STORAGE_NAME = process.env.REACT_APP_LOCAL_STORAGE_NAME as string;

export function transformDate(date: Date = new Date()): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${(mm > 9 ? '' : '0') + mm}.${(dd > 9 ? '' : '0') + dd}.${date.getFullYear()}. ${hrs}:${min}:${sec}`;
}

export function getLocal(): any {
  let lS: object;
  try {
    lS = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) as string);
  } catch (e) {
    lS = {};
  }
  if (lS === null) {
    lS = {};
  }
  return lS;
}

export function removeLocal() {
  localStorage.removeItem(LOCAL_STORAGE_NAME);
}

export function setLocal(obj: object) {
  const lS = getLocal() as any;
  let newLs = cloneObject(lS);
  newLs = Object.assign(newLs, obj);
  if (JSON.stringify(lS) !== JSON.stringify(newLs)) {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(newLs));
  }
}

function cloneObject(obj: {}) {
  return JSON.parse(JSON.stringify(obj));
}
