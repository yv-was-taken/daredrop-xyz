export const randomizerAbi = [
  {
    "inputs": [],
    "name": "NoProposedSequencer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Unauthorized",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "proposedSequencer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "currentSequencer",
        "type": "address"
      }
    ],
    "name": "ProposeSequencerCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "currentSequencer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newSequencer",
        "type": "address"
      }
    ],
    "name": "SequencerProposed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "UpdateContractConfig",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldValue",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newValue",
        "type": "uint256"
      }
    ],
    "name": "UpdateGasConfig",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptSequencer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_keys",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "batchSetConfigUints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_keys",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "batchSetGasEstimates",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancelProposeSequencer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "configUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "configUints",
    "outputs": [
      {
        "internalType": "uint256[48]",
        "name": "",
        "type": "uint256[48]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "gasEstimate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "gasEstimates",
    "outputs": [
      {
        "internalType": "uint256[16]",
        "name": "",
        "type": "uint256[16]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_proposed",
        "type": "address"
      }
    ],
    "name": "proposeSequencer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposedSequencer",
    "outputs": [
      {
        "internalType": "address",
        "name": "proposedSequencer_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sequencer",
    "outputs": [
      {
        "internalType": "address",
        "name": "sequencer_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "setConfigUint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_key",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "setGasEstimate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_treasury",
        "type": "address"
      }
    ],
    "name": "setTreasury",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "treasury",
    "outputs": [
      {
        "internalType": "address",
        "name": "treasury_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BeaconAlreadyRegistered",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "pending",
        "type": "uint256"
      }
    ],
    "name": "BeaconHasPending",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BeaconNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BeaconNotSelected",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "staked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimum",
        "type": "uint256"
      }
    ],
    "name": "BeaconStakedEthTooLow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BeaconValueExists",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "name": "BlockhashUnavailable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FailedToSendEth",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minBlockNumber",
        "type": "uint256"
      }
    ],
    "name": "MinHeightNotYetReached",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotABeacon",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "availableBeacons",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "requiredBeacons",
        "type": "uint256"
      }
    ],
    "name": "NotEnoughBeaconsAvailable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotOwnerOrBeacon",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ReentrancyGuard",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "givenHash",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "expectedHash",
        "type": "bytes32"
      }
    ],
    "name": "RequestDataMismatch",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "RequestNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SenderNotBeaconOrSequencer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "currentBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minTime",
        "type": "uint256"
      }
    ],
    "name": "SequencerSubmissionTooEarly",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "VRFProofInvalid",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "RegisterBeacon",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "ethReserved",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "beaconFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationBlocks",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationSeconds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "callbackGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minConfirmations",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "client",
            "type": "address"
          },
          {
            "internalType": "address[3]",
            "name": "beacons",
            "type": "address[3]"
          },
          {
            "internalType": "bytes32",
            "name": "seed",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct SRequestEventData",
        "name": "request",
        "type": "tuple"
      }
    ],
    "name": "Request",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes10",
        "name": "value",
        "type": "bytes10"
      }
    ],
    "name": "SubmitRandom",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_beacon",
        "type": "address"
      }
    ],
    "name": "beacon",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "publicKey",
        "type": "uint256[2]"
      },
      {
        "internalType": "bool",
        "name": "registered",
        "type": "bool"
      },
      {
        "internalType": "uint8",
        "name": "strikes",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "consecutiveSubmissions",
        "type": "uint8"
      },
      {
        "internalType": "uint64",
        "name": "pending",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "ethStake",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_beacon",
        "type": "address"
      }
    ],
    "name": "beaconStakeEth",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "beaconUnstakeEth",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "beacons",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_request",
        "type": "uint256"
      }
    ],
    "name": "getRequest",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "result",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "dataHash",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "ethPaid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethRefunded",
        "type": "uint256"
      },
      {
        "internalType": "bytes10[2]",
        "name": "vrfHashes",
        "type": "bytes10[2]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_beacon",
        "type": "address"
      },
      {
        "internalType": "uint256[2]",
        "name": "_vrfPublicKeyData",
        "type": "uint256[2]"
      }
    ],
    "name": "registerBeacon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "beaconPos",
        "type": "uint256"
      },
      {
        "internalType": "address[4]",
        "name": "_addressData",
        "type": "address[4]"
      },
      {
        "internalType": "uint256[19]",
        "name": "_uintData",
        "type": "uint256[19]"
      },
      {
        "internalType": "bytes32",
        "name": "seed",
        "type": "bytes32"
      }
    ],
    "name": "submitRandom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "beaconPos",
        "type": "uint256"
      },
      {
        "internalType": "address[4]",
        "name": "_addressData",
        "type": "address[4]"
      },
      {
        "internalType": "uint256[19]",
        "name": "_uintData",
        "type": "uint256[19]"
      },
      {
        "internalType": "bytes32[3]",
        "name": "_rsAndSeed",
        "type": "bytes32[3]"
      },
      {
        "internalType": "uint8",
        "name": "_v",
        "type": "uint8"
      }
    ],
    "name": "submitRandom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_beacon",
        "type": "address"
      }
    ],
    "name": "unregisterBeacon",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "inputLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxLimit",
        "type": "uint256"
      }
    ],
    "name": "CallbackGasLimitOOB",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "inputLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxLimit",
        "type": "uint256"
      }
    ],
    "name": "ConfirmationsOOB",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "deposited",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserved",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "requiredAmount",
        "type": "uint256"
      }
    ],
    "name": "EthDepositTooLow",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "allowedAmount",
        "type": "uint256"
      }
    ],
    "name": "WithdrawingTooMuch",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "client",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ClientWithdrawTo",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_client",
        "type": "address"
      }
    ],
    "name": "clientBalanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "deposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reserved",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_client",
        "type": "address"
      }
    ],
    "name": "clientDeposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "clientWithdrawTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_confirmations",
        "type": "uint256"
      }
    ],
    "name": "estimateFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "esimateFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      }
    ],
    "name": "estimateFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "esimateFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_confirmations",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_gasPrice",
        "type": "uint256"
      }
    ],
    "name": "estimateFeeUsingConfirmationsAndGasPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_gasPrice",
        "type": "uint256"
      }
    ],
    "name": "estimateFeeUsingGasPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_confirmations",
        "type": "uint256"
      }
    ],
    "name": "request",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_callbackGasLimit",
        "type": "uint256"
      }
    ],
    "name": "request",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_initializationContractAddress",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "InitializationFunctionReverted",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "enum IDiamondCut.FacetCutAction",
            "name": "action",
            "type": "uint8"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "indexed": false,
        "internalType": "struct IDiamondCut.FacetCut[]",
        "name": "_diamondCut",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_init",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "DiamondCut",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "enum IDiamondCut.FacetCutAction",
            "name": "action",
            "type": "uint8"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct IDiamondCut.FacetCut[]",
        "name": "_diamondCut",
        "type": "tuple[]"
      },
      {
        "internalType": "address",
        "name": "_init",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "diamondCut",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "_functionSelector",
        "type": "bytes4"
      }
    ],
    "name": "facetAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "facetAddress_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "facetAddresses",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "facetAddresses_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_facet",
        "type": "address"
      }
    ],
    "name": "facetFunctionSelectors",
    "outputs": [
      {
        "internalType": "bytes4[]",
        "name": "facetFunctionSelectors_",
        "type": "bytes4[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "facets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "internalType": "struct IDiamondLoupe.Facet[]",
        "name": "facets_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "_interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancelProposeOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_proposedOwner",
        "type": "address"
      }
    ],
    "name": "proposeOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposedOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "proposed_",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "CantRenewDuringDisputeWindow",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expirationHeight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expirationSeconds",
        "type": "uint256"
      }
    ],
    "name": "NotYetRenewable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_request",
        "type": "uint256"
      }
    ],
    "name": "getFeeStats",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[4]",
        "name": "_addressData",
        "type": "address[4]"
      },
      {
        "internalType": "uint256[9]",
        "name": "_uintData",
        "type": "uint256[9]"
      },
      {
        "internalType": "bytes32",
        "name": "_seed",
        "type": "bytes32"
      }
    ],
    "name": "renewRequest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[2]",
        "name": "_publicKey",
        "type": "uint256[2]"
      },
      {
        "internalType": "uint256[4]",
        "name": "_proof",
        "type": "uint256[4]"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      }
    ],
    "name": "computeFastVerifyParams",
    "outputs": [
      {
        "internalType": "uint256[2]",
        "name": "",
        "type": "uint256[2]"
      },
      {
        "internalType": "uint256[4]",
        "name": "",
        "type": "uint256[4]"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[2]",
        "name": "_publicKey",
        "type": "uint256[2]"
      },
      {
        "internalType": "uint256[4]",
        "name": "_proof",
        "type": "uint256[4]"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "uint256[2]",
        "name": "_uPoint",
        "type": "uint256[2]"
      },
      {
        "internalType": "uint256[4]",
        "name": "_vComponents",
        "type": "uint256[4]"
      }
    ],
    "name": "fastVerify",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_gammaX",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_gammaY",
        "type": "uint256"
      }
    ],
    "name": "gammaToHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[2]",
        "name": "_publicKey",
        "type": "uint256[2]"
      },
      {
        "internalType": "uint256[4]",
        "name": "_proof",
        "type": "uint256[4]"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      }
    ],
    "name": "verify",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BeaconDepositEth",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "chargeType",
        "type": "uint8"
      }
    ],
    "name": "ChargeEth",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ClientDepositEth",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "seed",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "RequestBeacon",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "result",
        "type": "bytes32"
      }
    ],
    "name": "Result",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "ethReserved",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "beaconFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationBlocks",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expirationSeconds",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "callbackGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minConfirmations",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "client",
            "type": "address"
          },
          {
            "internalType": "address[3]",
            "name": "beacons",
            "type": "address[3]"
          },
          {
            "internalType": "bytes32",
            "name": "seed",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct SRequestEventData",
        "name": "request",
        "type": "tuple"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "chargedBeacon",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "renewer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethToClient",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethToRenewer",
        "type": "uint256"
      }
    ],
    "name": "Retry",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousTreasury",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newTreasury",
        "type": "address"
      }
    ],
    "name": "SetTreasury",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousSequencer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newSequencer",
        "type": "address"
      }
    ],
    "name": "TransferSequencer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "kicked",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "strikes",
        "type": "uint8"
      }
    ],
    "name": "UnregisterBeacon",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "WithdrawEth",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "client",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "result",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "txData",
        "type": "bytes"
      }
    ],
    "name": "CallbackFailed",
    "type": "event"
  }
]

