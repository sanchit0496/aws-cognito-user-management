import {CognitoUserPool} from 'amazon-cognito-identity-js'


const poolData = {
    UserPoolId: 'us-east-2_tUqSXHwtz',
    ClientId: '6bij9npnn8vkm50m8adkbianpr'
}

export default new CognitoUserPool(poolData)