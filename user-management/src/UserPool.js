import {CognitoUserPool} from 'amazon-cognito-identity-js'


const poolData = {
    UserPoolId: 'us-east-2_QjjfjU9Wm',
    ClientId: '7hjct5mrk29ic7lskbqde516d8'
}

export default new CognitoUserPool(poolData)