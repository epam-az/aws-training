## Create an Auth0 application
1. On the Auth0 website dashboard, choose Applications, and then choose Create Application.
2. In the Create Application dialog box, enter a name for your application. For example, My App.
3. Under Choose an application type, choose Single Page Web Applications.
4. Choose Create.

## Create a test user for your Auth0 application
Add new users using User Management in Auth0 dashboard.
Use same users that you already added in cognito (same username, email).

## Configure SAML settings for your application
1. On the left navigation bar, choose Applications.
2. Choose the name of the application you created.
3. On the Addons tab, turn on SAML2 Web App.
4. In the Addon: SAML2 Web App dialog box, on the Settings tab, for Application Callback URL enter https://<your_cognito_domain>.auth.region.amazoncognito.com/saml2/idpresponse.
5. Under Settings, do the following:

    1. For audience, delete the comment delimiter (//) and replace the default value (urn:foo) with urn:amazon:cognito:sp:yourUserPoolId.
    Note: Replace yourUserPoolId with your Amazon Cognito user pool ID. Find the ID in the Amazon Cognito console on the General settings tab of the management page for your user pool.
    2. For mappings and email, delete the comment delimiters (//). Do the same for any other attributes required by your Amazon Cognito user pool. For more information, see configuring user pool attributes.
    3. For nameIdentifierFormat, delete the comment delimiters (//). Replace the default value (urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified) with urn:oasis:names:tc:SAML:2.0:nameid-format:persistent.

1. (Optional) Choose Debug, then log in as the test user you created to confirm that the configuration works.
2. Choose Enable, and then choose Save.
3. On the Usage tab, find Identity Provider Metadata
4. Right-click download, and then copy the URL.
5. Choose download to download the .xml metadata file.

## Configure Auth0 as SAML IdP in Amazon Cognito
1. Create Federation Identity provider
2. Select SAML
3. Set name and upload Metadata(.xml) document
4. For SAML Attribute, enter http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress. For User pool attribute, choose Email from the list.
   
## Config cognito App client
Choose App client settings. Then do the following:

1. Under Enabled identity providers, select the Auth0 and Cognito User Pool check boxes.
2. For Callback URL(s), enter a URL where you want your users to be redirected after logging in. For testing, you can enter any valid URL, such as https://<you-api>.execute-api.eu-central-1.amazonaws.com.
3. For Sign out URL(s), enter a URL where you want your users to be redirected after logging out. For testing, you can enter any valid URL, such as https://<you-api>.execute-api.eu-central-1.amazonaws.com.
4. Under Allowed OAuth Flows, be sure to select at least the Implicit grant check box.
5. Under Allowed OAuth Scopes, be sure to select at least the email and openid check boxes.


1. auth0 -> cognito  (scopes) https://www.npmjs.com/package/express-jwt-permissions
2. EC2 private network (shared key, authentication)
3. materials?? rolling scope
