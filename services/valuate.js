const Ebay = require("ebay-node-api");
const { ebayCredentials } = require("../secrets");

export async function valuate(identity) {
  if (!identity || identity.length == 0) {
    throw new Error("identity required");
  }

  const ebay = new Ebay({
    clientID: ebayCredentials.production.appId,
    clientSecret: ebayCredentials.production.certId,
    body: {
      grant_type: 'client_credentials',
      //you may need to define the oauth scope
      scope: 'https://api.ebay.com/oauth/api_scope'
    },
    env: "PRODUCTION"
  });

  await ebay.getAccessToken();
  const resultsJson = await ebay.searchItems({ keyword: identity, limit: '20' });
  const resultsObj = JSON.parse(resultsJson);
  return parseSearchItems(resultsObj);
}

function parseSearchItems(searchResults) {
  const total = searchResults.itemSummaries.reduce((priceSum, item) => priceSum + Number(item.price.value), 0);
  return total / searchResults.itemSummaries.length
}
