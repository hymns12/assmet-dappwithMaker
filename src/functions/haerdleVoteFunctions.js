import { isSupportedChain } from "../utils/index";
import { getProvider } from "../constants/providers";
import { getProposalsContract } from "../constants/contracts";


const heardleVoteFunctions = (id, chainId, walletProvider) => {
    const handleVote = async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getProposalsContract(signer);

        try {
            const transaction = await contract.vote(id);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("vote successfull!");
            }

            console.log("vote failed!");

        } catch (error) {
            console.log(error);
            let errorText;
            if (error.reason === "Has no right to vote") {
                errorText = "You have not right to vote";
            } else if (error.reason === "Already voted.") {
                errorText = "You have already voted";
            } else {
                errorText = "An unknown error occured";
            }

            console.error("error: ", errorText);
        }
    };

    return handleVote;
}

export default heardleVoteFunctions;