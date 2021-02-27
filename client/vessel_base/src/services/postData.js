

const postData = (url, data) => {

  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      resolve(1);

    }).catch((err) => {
      reject(err.message);
    })
  })
}

export default postData