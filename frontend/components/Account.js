import { useState } from "react";
import Login from "./Login";
import WordleEngine from "./Wordle/WordleEngine";
import { useAccount, useNetwork } from 'wagmi'
import { useSession } from 'next-auth/react'

const Account = () => {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  const { status } = useSession()

  const [gameRunning, runGame] = useState(false);
  console.log(chain)
  return (
    <div className="max-w-4xl mx-auto md:px-1 px-3">
      {address && isConnected && status === 'authenticated' ? (
        <>
          <div>
            <br />
            {!gameRunning && chain.name === "Rinkeby" ? (
              <p>
                <button
                  onClick={() => runGame(true)}
                  className="bg-[#E63946] hover:bg-[#457B9D] hover:text-white active:bg-teal-500  text-white font-bold py-2 px-4  rounded-full"
                  type="button"
                >
                  Play Wordle!
                </button>
              </p>
            ) : (
              chain.name === "Rinkeby" ? <WordleEngine /> : null
            )}
          </div>
        </>
      ) : (
        <Login runGame={runGame} />
      )}
    </div>
  );
};

export default Account;
