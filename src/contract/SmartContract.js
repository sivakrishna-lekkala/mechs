import {ethers} from 'ethers'

let contract;
let address;

export const providerHandler = async () =>{
    const provider = new ethers.Provider.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    address = accounts[0];
    const signer = provider.getSigner();

    const contractAddress=""
    const contractAbi=""
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
}

