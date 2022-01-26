import { ethers } from "ethers";
import axios from "axios";
import toastProperties from "./../components/Toast/toast";
import { toast } from "react-toastify";

let contract;
let address;

export const providerHandler = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.listAccounts();
  address = accounts[0];
  const signer = provider.getSigner();

  const contractAddress = "0x7bCa4344313a7341f917397B4f922b70E57819aD";
  const contractAbi = [
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isPreSale",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isMainSale",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isFreeSale",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "slotPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenAmount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
      ],
      name: "_mintRandom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];

  contract = new ethers.Contract(contractAddress, contractAbi, signer);
};

export const totalSupply = async () => {
  const n = await contract.totalSupply();
  return n.toNumber();
};

export const isPreSale = async () => {
  const n = await contract.isPreSale();
  return n;
};

export const isMainSale = async () => {
  const n = await contract.isMainSale();
  return n;
};

export const isFreeSale = async () => {
  const n = await contract.isFreeSale();
  return n;
};

export const slotPrice = async () => {
  const n = await contract.slotPrice();
  return Number(ethers.utils.formatEther(n));
};

export const _mintRandom = async (value, signature, quantity, setRefresh) => {
  console.log(value, quantity);
  try {
    const n = await contract._mintRandom(quantity, signature, {
      value: ethers.utils.parseEther(`${value * quantity}`).toString(),
    });
    toast(<h4>Your Request is processing</h4>, {
      ...toastProperties,
      autoClose: 10000,
    });
    const receipt = await n.wait();
    toast.success(`your transaction is completed.`, toastProperties);
    setRefresh(true);
    console.log(receipt);
  } catch (err) {
    console.error(err);
    toast.error("transaction failed " + err.message, toastProperties);
  }
};

export const whitelistCheck = async () => {
  try {
    const { data } = await axios.post(
      "https://tribepass-back.herokuapp.com/whiteList",
      {
        wallet: address,
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
