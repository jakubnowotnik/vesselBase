const server = 'http://localhost:3001'


export const API = {
  GET: {
    vesselList: server + '/vesselList',
  },
  POST: {
    vessel: server + '/vessel',
  },
  DELETE: {
    vessel: (id) => server + '/vessel/' + id
  }

}