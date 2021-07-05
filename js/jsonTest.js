let data = require('./json.json')
let mainDiv = document.querySelector('.container')


  for (let commentsKey in data.comments) {
    console.log('DATA', data.comments[commentsKey]['created_at'], 'ARRAY',
      data.comments[commentsKey]['plain_body'])
    // (data.comments[commentsKey]['plain_body'])
  }





console.table([data.id, data.subject])
