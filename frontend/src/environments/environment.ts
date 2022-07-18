/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-m-gih2pc', // the auth0 domain prefix
    audience: 'https://dev-m-gih2pc.us.auth0.com/api/v2/', // the audience set for the auth0 app
    clientId: 'N25QwanmCyQbAuJSRWeobCQbbcyT8NOM', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
