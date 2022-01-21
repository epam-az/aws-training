Cognito AWS supports common flows in OAuth 2.0. (follow the [link](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-idp-settings.html) to learn more about flows)
You can enable both the Authorization code grant and the Implicit code grant, and then use each grant as needed.

The Client credentials flow is used in machine-to-machine communications.


## Create an Amazon Cognito user pool with an app client and domain name (Implicit grant)
1. Choose cognito
2. Create new user pool
3. Add some users using Users and Groups tab
4. Create new App client
    1. Enabled Identity Providers: Cognito User Pool
    2. Callback URL(s): https://<you-api>.execute-api.eu-central-1.amazonaws.com/<stage_name>
    3. Sign out URL(s): https://<you-api>.execute-api.eu-central-1.amazonaws.com/<stage_name>
    4. Allowed OAuth Flows: Implicit grant 
    5. Allowed OAuth Scopes: email, openid
5. Set Amazon Cognito domain
6. In App client settings click Launch Hosted UI
7. Test login using login form https://<domain_name>.auth.eu-central-1.amazoncognito.com/login?client_id=<app_client_id>&response_type=token&scope=email+openid&redirect_uri=https://<your_api>.execute-api.eu-central-1.amazonaws.com/dev

## Create authorizer in api gateway
1. Go to your api gateway
2. Create Authorizer:
    1. Type: cognito 
    2. Cognito User Pool: your pool name
    3. Token Source: Authorization
3. Add authorize to /{proxy+} - ANY - Method Request

## Enable client credentials flow
1. Define new resource server
   Identifier https://<you-api>.execute-api.eu-central-1.amazonaws.com/<stage_name>
2. Set scopes: users.read, users.write
3. Use client_id and client_secret to get access token

POST https://<domain_name>.auth.eu-central-1.amazoncognito.com/oauth2/token
Request Body:
grant_type: "client_credentials"
scope: "https://<you-api>.execute-api.eu-central-1.amazonaws.com/dev/api/v1/users.read"
client_id: "client_id"
client_secret: "client_secret"

4. Test your token
https://<you-api>.execute-api.eu-central-1.amazonaws.com/dev
headers:
   Authorization: <your_access_token>

