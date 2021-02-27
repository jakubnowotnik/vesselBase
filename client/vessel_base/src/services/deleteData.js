

const deleteData = (url) => {

  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      resolve(1);
    }).catch((err) => {
      reject(err.message);
    })
  })
}

export default deleteData