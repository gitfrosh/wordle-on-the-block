import { ethers } from 'ethers';
import axios from 'axios'
import { createClient } from '@supabase/supabase-js';

console.log(process.env.SUPABASE_PUBLIC_ANON_KEY)
const _supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_PUBLIC_ANON_KEY || '');

const AUTH_API_URL = process.env.AUTH_API_URL;

const handleApiPost = async (endpoint, params) => {
  const result = await axios.post(`${AUTH_API_URL}/${endpoint}`, params, {
    headers: {
      'content-type': 'application/json',
    },
  });

  return result.data;
};

const requestMessage = (account, chain) =>
  handleApiPost('request-message', {
    address: account,
    chain: chain,
    network: 'evm',
  });

const verifyMessage = (message, signature) =>
  handleApiPost('sign-message', {
    message,
    signature,
    network: 'evm',
  });

const getUser = async (token) => {
  _supabase.auth.setAuth(token);
  const { data } = await _supabase.from('users').select('*');
  console.log(data)
  return data;
};



const Login = ({ runGame }) => {

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    const [accounts, chainId] = await Promise.all([
      provider.send('eth_requestAccounts', []),
      provider.send('eth_chainId', []),
    ]);

    const signer = provider.getSigner();
    console.log(signer, chainId, accounts[0])
    return { signer, chain: chainId, account: accounts[0] };
  }

  const handleAuth = async () => {
    let token;

    // Connect to Metamask
    const { signer, chain, account } = await connectToMetamask();

    if (!account) {
      throw new Error('No account found');
    }
    if (!chain) {
      throw new Error('No chain found');
    }

    const { message } = await requestMessage(account, chain);

    const signature = await signer.signMessage(message);

    const { user } = await verifyMessage(message, signature);
    token = user.token;
    const userData = await getUser(token)

    console.log(userData)



  };


  // const { activate } = useEthers();
  // const activateProvider = async () => {
  //   const providerOptions = {
  //     injected: {
  //       display: {
  //         name: "Metamask",
  //         description: "Connect with the provider in your Browser",
  //       },
  //       package: null,
  //     },
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: {
  //         bridge: "https://bridge.walletconnect.org",
  //         infuraId: "14a0951f47e646c1b241aa533e150219",
  //       },
  //     },
  //     fortmatic: {
  //       package: Fortmatic,
  //       options: {
  //         key: "FORTMATIC_KEY",
  //         network: {
  //           rpcUrl: "https://rpc-mainnet.maticvigil.com",
  //           chainId: 137,
  //         },
  //       },
  //     },
  //     authereum: {
  //       package: Authereum,
  //     },
  //   };

  //   const web3Modal = new Web3Modal({
  //     providerOptions,
  //   });
  //   try {
  //     const provider = await web3Modal.connect();
  //     await activate(provider);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  // function handleConnectWallet() {
  //   activateProvider();
  //   runGame(false)
  // }
  return (
    <button
      className="bg-[#E63946] hover:bg-[#457B9D] hover:text-white active:bg-teal-500  text-white font-bold py-2 px-4  rounded-full"
      onClick={handleAuth}
    >
      Connect Wallet
    </button>
  );
};


export default Login