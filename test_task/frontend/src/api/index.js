class Api {
    constructor (url, headers) {
      this._url = url
      this._headers = headers
    }
  
    checkResponse (res) {
      return new Promise((resolve, reject) => {
        if (res.status === 204) {
          return resolve(res)
        }
        const func = res.status < 400 ? resolve : reject
        res.json().then(data => func(data))
      })
    }
    getTable ({ page = 1, limit=3, filterField='',  filterValue='', filterCondition='', ordering=''} = {}) {
        if (filterField === null || filterValue === null || filterCondition === null || filterValue ==='') {
            return fetch(
                `/api/v1/table/?page=${page}&limit=${limit}${ordering ? `&ordering=${ordering}` : ''}`,
                {
                  method: 'GET',
                  headers: {
                    ...this._headers,
                  }
                }
              ).then(this.checkResponse)
        }
        return fetch(
          `/api/v1/table/?page=${page}&limit=${limit}&${filterField + filterCondition}=${filterValue}${ordering ? `&ordering=${ordering}` : ''}`,
          {
            method: 'GET',
            headers: {
              ...this._headers,
            }
          }
        ).then(this.checkResponse)
    }
  }
  
  export default new Api(process.env.API_URL || 'http://localhost', { 'content-type': 'application/json' })