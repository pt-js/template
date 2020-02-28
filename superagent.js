const superagent = require('superagent')
const request = require('axios')
const qs = require('qs')


async function main() {



    console.log(superagent['Get'])


    let r
    try{
        r =  await request({
            method: 'Get',
            // url: 'https://gitlab.com/api/v4/projects',
            url: 'http://localhost:3001/data1',
            data: qs.stringify({'bar': 123}),
            params: {'bar3': 356},
        })

        r = await request( {
            method: 'post',
            headers: {'content-type': 'application/json' },
            data: { count: 7 },
            // params: undefined,
            url: 'https://plx06wepl5.execute-api.us-east-2.amazonaws.com/increment',
            // url: 'http://localhost:3001/data1',
          })


    }catch(e) {
        console.log('error', e)
    }

    let data = r.data


    console.log('result', Object.keys(r), r.data)






}

main()