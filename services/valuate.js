const Ebay = require("ebay-node-api");
const { ebayCredentials } = require("../secrets");

export async function valuate(identity) {
  if (!identity || identity.length == 0) {
    throw new Error("identity required");
  }

  // GET https://api.ebay.com/buy/browse/v1/item_summary/search?
  // q="identity"&
  // filter=FilterField&
  // sort=SortField&
  const ebay = new Ebay({
    clientID: ebayCredentials.appId,
    clientSecret: ebayCredentials.certId,
    body: {
      grant_type: 'client_credentials',
      //you may need to define the oauth scope
      scope: 'https://api.ebay.com/oauth/api_scope'
    },
    env: "SANDBOX"
  });

  await ebay.getAccessToken();
  const results = await ebay.searchItems({ keyword: identity, limit: '20' });
  debugger;
}
