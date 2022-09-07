import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { signIn, useSession } from 'next-auth/react'
import { useAccount, useSignMessage, useNetwork } from 'wagmi'
import { useEffect } from 'react'
import { requestMessage } from '../utils/auth';

const Login = ({ runGame }) => {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  const { status } = useSession()
  const { signMessageAsync } = useSignMessage()
  // const { push } = useRouter();

  useEffect(() => {
    console.log(status, isConnected)
    const handleAuth = async () => {
      const { message } = await requestMessage(address, chain.id);
      const signature = await signMessageAsync({ message })
      const result = await signIn('credentials', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/user',
      })
      console.log(result)
    }
    if (status === 'unauthenticated' && isConnected) {
      handleAuth()
    }
  }, [status, isConnected])

  return (
    <ConnectButton />
  );
};


export default Login