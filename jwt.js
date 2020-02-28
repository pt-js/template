const jwt = require('jsonwebtoken')


let token = jwt.sign(
    {name: 'wang', iat: 1582673419},
    'secret',
    {algorithm: 'HS256'}
)
console.log(token)

let result = jwt.verify(token, 'secret', {algorithm: 'HS256'})
console.log(result)