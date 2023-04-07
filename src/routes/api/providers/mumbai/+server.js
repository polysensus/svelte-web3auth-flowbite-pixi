import * as env from '$env/static/public';
import { env as secrets } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

// import { CHAIN_NAMESPACES } from "@web3auth/base";
// import { ethers } from 'ethers';

/** @type {import('./arena/$types').RequestHandler} */
export function GET() {
  return json({
    name: "mumbai",
    description: 'Mumbai Testnet replicates the Polygon Mainnet and is used for testing',
    chainConfig: {
      // chainNamespace: CHAIN_NAMESPACES.EIP155"
      chainNamespace: "eip155",
      chainId: hexlify(80001),
      displayName: "Polygon Mumbai (testnet)",
      rpcTarget: secrets['MUMBAI_URL'],
      // blockExplorer: "https://mumbai.polygonscan.com/",
      ticker: "MATIC",
      tickerName: "MATIC"
    },
    chainId: 80001,
    currency: 'MATIC',
    url: secrets['MUMBAI_URL'],
    polling: env['PUBLIC_MUMBAI_POLLING'] ?? 2000, 
    web3auth: {
      // web3auth - https://web3auth.io/docs/sdk/web/modal/initialize
      clientId: env['PUBLIC_WEB3AUTH_CLIENT_ID'],
      web3AuthNetwork: "testnet"
    }
  });
}

/**
 * because ethers 5.x isn't happy on SSR in a package with type: module
 * @param {*} value 
 * @returns 
 */
function hexlify(value) {
  // Convert the value to a hexadecimal string
  let hexString = value.toString(16);

  // Pad the string with zeros if necessary
  if (hexString.length % 2 !== 0) {
    hexString = '0' + hexString;
  }

  // Add the '0x' prefix
  return '0x' + hexString;
}
