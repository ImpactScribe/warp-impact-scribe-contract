export const EVM_CONFIG = {
  RPC_ENDPOINT: "https://gnosis-rpc.publicnode.com",

  M3TER_CONTRACT_ADDRESS: "0x39fb420Bd583cCC8Afd1A1eAce2907fe300ABD02",

  REGISTRATION_EVENT_TOPIC:
    "0x802abf5d4820f78b3f21914ccd6a0eb1d54d61b57882c8a0185f8577a4bbe581",

  REGISTRATION_EVENT_ABI: [
    "event Register(uint256 indexed tokenId, bytes32 indexed publicKey, address from, uint256 timestamp)",
  ],
};
