// these are not really compjnents but a bunch of functions that are used to check a value. used for form cvalidatikb

// check has an input
export function hasInput(val){
  return val.length > 0;
}

// check email is valid
export function emailCheck(val){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
}

// check zip codes are valid
export function zipCheck(val){
  return val.length > 0 && val.length < 6 && parseInt(val);
}
