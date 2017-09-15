import localStorage from '../local-storage';

let hostname = 'http://api.test-b.zoomcarstaging.com/fleet/';

export const getData = (url) => {
  let seperator = url.includes('?') ? '&' : '?';
  url = hostname + url + seperator + 'token=' + localStorage.getItem('auth_token');
  return fetch(url)  
    .then(response => {
      if (response.status == 401){
        localStorage.removeItem('auth_token');
        window.location = '/login'
      }
      if (response.status !== 200) {  
        // console.log('Looks like there was a problem. Status Code: ' +  
        //   response.status);  
        return;  
      }
      return response.json();  
    });
}

export const postData = (url, data) => {
  url = hostname + url;
  //data.token = localStorage.getItem('auth_token');
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.status == 401){
      localStorage.removeItem('auth_token');
      window.location = '/login'
    }
    if(!response.ok) {
      throw response.json();
    }
    return response.json();  
  });
}

export const putData = (url, data) => {
  url = hostname + url;
  data.token = localStorage.getItem('auth_token');
  return fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    if (response.status == 401){
      localStorage.removeItem('auth_token');
      window.location = '/login'
    }
    if(!response.ok) {
      throw response.json();
    }
    return response.json();  
  });
}

export const deleteData = (url) => {
  let seperator = url.includes('?') ? '&' : '?';
  url = hostname + url + seperator + 'token=' + localStorage.getItem('auth_token');
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => {
    if (response.status == 401){
      localStorage.removeItem('auth_token');
      window.location = '/login'
    }
    if(!response.ok) {
      throw response.json();
    }
    return response.json();  
  });
}

export const postFileData = (url, data) => {
  let seperator = url.includes('?') ? '&' : '?';
  url = hostname + url + seperator + 'token=' + localStorage.getItem('auth_token');
  return fetch(url, {
    headers: {
      "cache-control": "no-cache"
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    method: 'POST',
    body: getFormData(data)
  }).then(response => {
    if(!response.ok) {
      throw response.json();
    }
    return response.json();  
  });
}

export const getHrefForApiHost = (url) => {
  let seperator = url.includes('?') ? '&' : '?';
  url = hostname + url + seperator + 'token=' + localStorage.getItem('auth_token');
  return url; 
}

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

export default {
  getData,
  postData,
  putData,
  deleteData,
  postFileData,
  getHrefForApiHost
}

