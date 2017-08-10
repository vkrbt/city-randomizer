const get = (url) => new Promise((resolve, reject) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      resolve(JSON.parse(this.responseText));
    }
  };
  xhr.open('GET', url , true);
  xhr.send()
})

export { get };