let naughty_g_provider, naughty_g_accounts, naughty_g_signer;
const NAUGHTY_G_CONTRACT_ADDRESS = '0xE8778812FdD8A5185B8f4300C2D55ac62aF68907';
const NAUGHTY_G_CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"SetStartTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlySalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxEarlysaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInEarlysale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInPublicsale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPresaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublicsaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numOfTokensToMint","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleproof","type":"bytes32[]"}],"name":"mintSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_mintPerAddress","type":"uint256[]"}],"name":"setMaxMintPerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_maxSupply","type":"uint256[]"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleroot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_mintPrice","type":"uint256[]"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_revealedBaseUri","type":"string"}],"name":"setRevealedBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_whitelistAddress","type":"address[]"}],"name":"setWhitelistContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalNoOfTokensMintedByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const WHITELIST_ADDRESSES = ["0xa2FaE4169EdB6976DDaca9e7C74351C51D669ddA","0x61bAC65DC5F713B2c44BdaB9f4E5436D03201eDc","0x99F695E3c38d7fecf0431f0b28F1eb0baAA26a56","0xaA884bFC4B6dEcd8002E20e21ACB126E4C985A4B","0xe8b4ed412236d8968101589f30e96960b8c1a8b1","0xF4314Ae434A33a5e0567242ecd41D76BB6C1B777","0x6542902cEC03E31707915694ad36e5A386c46A4b","0x2588ea8c8ea71ff2162615e83c5add7f90fc6cc6","0xb1ce638daec9be670f6d2a55fdb5414955c5aa08","0x5b33ea8b7836ff4d14c75f0d461fc67a23d777f0","0xcd0416451277FA11d870A0312b4Da5DC027cBe99","0xAf0b4EaBB70f28F0876EE2679019b135C7Ad275c","0xFCfCB538594Aea1c94Fb148b9d860D2C4a318848","0xeCd30Ca82Bbfd50Bdf08e17d79bb34fd933a5996","0xe1A66DBDBe0743bf2f68388a9BC95a3Ce1132f12","0xd90bf395Db944F472e7D9538FbAf48db039bC561","0x766779489EBCf848523c8B70C0e6B2F9C2a8Fa5A","0x1c28f041e4d70fecb05482a669f019377f1e20bc","0x23F57EF966Be70931A7b414A2363834dd011b4C5","0x733eAb07a428F5081B0c39c5BF9899A326B595Ea","0x787E48216f48C007867548CcBA3009e549C134ac","0xe23020aE155b31a22903dF8b0c743130CBB91C3e","0xD169B22B51f38c205A8f81BC72987a71d485A37F","0xd5728294Cff3bd0A8985d33E0F2D27EbFf315174","0x7EadDF262e3299CDcf29ACefCa588D57f75eF564","0xAa884ac9BB63d810baEdA6a4A5E8406FEE088D51","0xceFB18bACbd75fc849EFB718001e49cdF970b89a","0x800E944d8d67941FE3ed78FADc6294ED688760C7","0x937E8756fE99388775E7e5aC92187F107272ce88","0x6542902cEC03E31707915694ad36e5A386c46A4b","0xaE6478ED65956f067FDa3cb28B13E1b951A89330","0xD995fa9dF9F006e5dbD05a802d6A8f2fe94064cf","0xABAa4386CD964AA652a44795e73f03bDAf8e1e9C","0x0BC02FbC82cDa1bFd4E0D2f2F3395eE83a57FFC3","0xcDc3894aDffa3ba0dE55462CE71340b584486758","0x6d0b33865Da54050C5d26ef485aEd93067d494EA","0xFb7834CA901F1CEE55207a9a88010A7777Fc7384","0xe14D53938734a91eD7221F129896C336e49Dce0D","0x282d656A9d95c64522F6Bc1a42EE759DE81e8dc0","0x887e9c939a7077d81c73d99b577ca641f6cd1af1","0xB4182Dd4dd442CF8508453bb1fC04B44351FB485","0xF08E242722aF03F5575A50E8bFbA0c56EFF6D134","0x1ad05039e712cDef4703CB90C1f501CE2e1cbCA0","0xf361f3d33A0E67812DE0F88b7c5D46d392c9E277","0xA867cc3B98F90379108b255ec90A7d64381E8719 ","0x7Fa0e40261659046d4aE7c8121aA66E6F409C4dB","0xDD4b344481A9a0e6B17b79B225a69a902D725022","0x61c4a9107de33e75ED6FE29550Ae2cc29cEd2264","0x7392B638B6cA1E2Fa18a2EE046700e94Cc18fBa2","0xD9524b4EF7fA85B09aa12463221750Da2aDC76b8","0x0BF61023640B5fFa269EBaBa895cc3662793A4c9","0x067D3160A3D2C91C958c604F4fE92AbfC82063A4"];

const LEAF_NODES = WHITELIST_ADDRESSES.map(addr => keccak256(addr));
const MERKLE_TREE = new MerkleTree(LEAF_NODES, keccak256, {sortPairs: true});
const ROOT_HASH = MERKLE_TREE.getRoot();
let mint_val = 0;

async function connect_to_metamask() {
    naughty_g_provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
        naughty_g_accounts = await naughty_g_provider.send("eth_requestAccounts", []);
        naughty_g_signer = naughty_g_provider.getSigner();
        if (naughty_g_signer._isSigner) {
            $('#wallet-connected').removeClass('d-none');
            $('#connect-metamask').addClass('d-none');
            $('#get-metamask').addClass('d-none');
        } else {
            $('#wallet-connected').addClass('d-none');
            check_metamask_detection();
        }
    } catch (e) {
        check_metamask_detection();
    }
}

async function check_metamask_detection(connect = false) {
    let detectEthereum = await detectEthereumProvider();
    $('#connect-metamask').addClass('d-none');
    $('#get-metamask').addClass('d-none');
    if (detectEthereum && window.ethereum) {
        if (window.ethereum.isMetaMask) {
            $('#connect-metamask').removeClass('d-none');
            if (connect) {
                connect_to_metamask();
            }
        } else {
            $('#get-metamask').removeClass('d-none');
        }
    } else {
        $('#get-metamask').removeClass('d-none');
    }
}

$(document).ready(function () {
    $('#naughty-counter-input').val(0);
    $('#naughty-mint-up').on('click', () => {
        $('#naughty-counter-input').val(++mint_val);
    });
    $('#naughty-mint-down').on('click', () => {
        if (mint_val > 0) {
            $('#naughty-counter-input').val(--mint_val);
        }
    });
    $('#naughty-counter-input').change(function () {
        const num = parseInt($(this).val());
        if (num < 0) {
            $('#naughty-counter-input').val(0);
            mint_val = 0;
        } else {
            mint_val = num;
            $('#naughty-counter-input').val(num);
        }
    });
    check_metamask_detection();
    $('#connect-metamask').on('click', function () {
        check_metamask_detection(true);
    });
    $('#mint-btn').on('click', function () {
        if (mint_val > 0) {
            mintSale().then(r => {});
        } else {
            Swal.fire('Warning !!', 'Please select proper mint value.', 'warning');
        }
    });
});

async function mintSale() {
    try {
        if (naughty_g_accounts.length > 0 && typeof naughty_g_signer != "undefined" && typeof naughty_g_signer._isSigner != "undefined" && naughty_g_signer._isSigner === true) {
            const NAUGHTY_G_CONTRACT = new ethers.Contract(NAUGHTY_G_CONTRACT_ADDRESS, NAUGHTY_G_CONTRACT_ABI, naughty_g_provider);
            let sale_value = ethers.BigNumber.from('0');
            let hex_proof = [];
            let current_time = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getTime();
            let pre_sale_time = new Date((new Date('May 10 16:48:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();
            let early_sale_time = new Date((new Date('May 13 14:30:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();
            let public_sale_time = new Date((new Date('May 14 14:30:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();

            if (pre_sale_time > current_time) {
                throw "The sale has not started yet.";
            } else if (early_sale_time > current_time) {  // Pre
                hex_proof = MERKLE_TREE.getHexProof(keccak256(naughty_g_accounts[0]));
                sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).preSalePrice();
            } else if (public_sale_time > current_time) { // Early
                sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).earlySalePrice();
            } else {  // Public
                sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).publicSalePrice();
            }

            sale_value = parseFloat(sale_value.toString());

            const HASH = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).mintSale(mint_val, hex_proof, {value: (sale_value * mint_val).toString()});
            if (HASH) {
                Swal.fire('Success !!!', "The transaction has been completed successfully! Please check metamask for the latest status of your transaction.", "success");
            } else {
                throw 'Fail to complete minting.';
            }
        } else {
            throw "Please Connect The Wallet First.";
        }
    } catch (e) {
        if (typeof e === "string") {
            Swal.fire({title: 'Error !!', text: e, icon: 'error', confirmButtonColor: '#d33'});
        } else {
            if (e.message && e.message === 'MetaMask Tx Signature: User denied transaction signature.') {
                Swal.fire({
                    title: 'Error !!',
                    text: 'Transaction Cancelled !',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
            } else if (e.message && (e.message.indexOf('insufficient funds for intrinsic transaction cost') === 0  || e.message.indexOf('err: insufficient funds') === 0)) {
                Swal.fire({
                    title: 'Error !!',
                    text: 'You have insufficient funds for performing the transaction.',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
            } else if (e.error.code === -32603 && e.error.message && e.error.message.indexOf('execution reverted:') === 0) {
                Swal.fire({
                    title: 'Error !!',
                    text: e.error.message.replace('execution reverted:', ''),
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
            } else {
                Swal.fire({
                    title: 'Error !!',
                    text: 'Please refresh the page and try again.',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
                // console.error(e);
            }
        }
    }
}
