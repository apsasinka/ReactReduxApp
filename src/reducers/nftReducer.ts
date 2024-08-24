const SET_NFT = "SET_NFT";

const defaultState = {
  items: [],
  isFetching: true,
};

export default function nftReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_NFT":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const setNft = (nft) => ({ type: SET_NFT, payload: nft });
