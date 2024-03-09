// import useProposals from "./hooks/useProposals";
// import toast from "react-hot-toast";
// import {
//     useWeb3ModalAccount,
//     useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import { isSupportedChain } from "./utils";
// import { getProvider } from "./constants/providers";
// import { getProposalsContract } from "./constants/contracts";


// export const HandlevoteFunction = async (id) => {
  
   
//     const handleVote = async (id) => {
//         if (!isSupportedChain(chainId)) return console.error("Wrong network");
//         const readWriteProvider = getProvider(walletProvider);
//         const signer = await readWriteProvider.getSigner();

//         const contract = getProposalsContract(signer);

//         try {
//             const transaction = await contract.vote(id);
//             console.log("transaction: ", transaction);
//             const receipt = await transaction.wait();

//             console.log("receipt: ", receipt);

//             if (receipt.status) {
                
//                 return toast.success("vote successfill!", {
//                     position : 'top-right',
//                     autoClose: 5000,
//                     hideProgressBar: true,
//                     closeOnclick: false,
//                 });
//             }

//             console.log("vote failed!");
//         } catch (error) {
//             console.log(error);
//             // let errorText;
//             if (error.reason === "Has no right to vote") {
//                 toast.error("You have not right to vote")
//                 // errorText = "You have not right to vote";
//             } else if (error.reason === "Already voted.") {
//                 errorText = "You have already voted";
//             } else {
//                 errorText = "An unknown error occured";
//             }

//             console.error("error: ", errorText);
//         }
//     };
  
// }
