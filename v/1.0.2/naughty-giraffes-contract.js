let naughty_g_provider, naughty_g_accounts, naughty_g_signer, naughty_g_sale_stage;
const NAUGHTY_G_CONTRACT_ADDRESS = '0x296180ac4fF57e9cDE446f689C8D2F5Ba70D1D81';
const NAUGHTY_G_CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
        "name": "ApprovalForAll",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "uint256", "name": "_timestamp", "type": "uint256"}],
        "name": "SetStartTime",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "earlySalePrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "getApproved",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }],
        "name": "isApprovedForAll",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxEarlysaleSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxMintPerAddressInEarlysale",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxMintPerAddressInPresale",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxMintPerAddressInPublicsale",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxPresaleSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxPublicsaleSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_numOfTokensToMint",
            "type": "uint256"
        }, {"internalType": "bytes32[]", "name": "_merkleproof", "type": "bytes32[]"}],
        "name": "mintSale",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "ownerOf",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "preSalePrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "publicSalePrice",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "_uri", "type": "string"}],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256[]", "name": "_mintPerAddress", "type": "uint256[]"}],
        "name": "setMaxMintPerAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256[]", "name": "_maxSupply", "type": "uint256[]"}],
        "name": "setMaxSupply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes32", "name": "_merkleRoot", "type": "bytes32"}],
        "name": "setMerkleroot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256[]", "name": "_mintPrice", "type": "uint256[]"}],
        "name": "setMintPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "string", "name": "_revealedBaseUri", "type": "string"}],
        "name": "setRevealedBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "newTime", "type": "uint256"}],
        "name": "setStartTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
        "name": "supportsInterface",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "index", "type": "uint256"}],
        "name": "tokenByIndex",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }],
        "name": "tokenOfOwnerByIndex",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_tokenId", "type": "uint256"}],
        "name": "tokenURI",
        "outputs": [{"internalType": "string", "name": "", "type": "string"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_owner", "type": "address"}],
        "name": "tokensInWallet",
        "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "totalNoOfTokensMintedByAddress",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const WHITELIST_ADDRESSES = [
    "0x500c97e15be41052c0119910fa0cd8d0d24b639c"
];

const LEAF_NODES = WHITELIST_ADDRESSES.map(addr => keccak256(addr));
const MERKLE_TREE = new MerkleTree(LEAF_NODES, keccak256, {sortPairs: true});
const ROOT_HASH = MERKLE_TREE.getRoot();
let max_mint_value = 10;
let mint_val = 0;


$(document).ready(function () {

    setMintVal();
    $('#naughty-counter-input').val(0);
    $('#naughty-mint-up').on('click', () => {
        setMintVal();
        if (mint_val < max_mint_value) {
            $('#naughty-counter-input').val(++mint_val);
        }
    });
    $('#naughty-mint-down').on('click', () => {
        setMintVal();
        if (mint_val > 0) {
            $('#naughty-counter-input').val(--mint_val);
        }
    });
    $('#naughty-counter-input').change(function () {
        setMintVal();
        const num = Number($(this).val());
        if (num < 0) {
            $(this).val(0);
            mint_val = 0;
        } else if (mint_val >= max_mint_value) {
            $(this).val(max_mint_value);
            mint_val = max_mint_value;
        } else {
            mint_val = num;
        }
    });
    check_metamask_detection();
    $('#connect-metamask').on('click', function () {
        check_metamask_detection(true);
    });
    $('#mint-btn').on('click', function () {
        setMintVal();
        mintSale();
    });
});

function setMintVal() {
    let current_time = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getTime();
    let pre_sale_time = new Date((new Date('Apr 27 14:30:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();
    let early_sale_time = new Date((new Date('Apr 28 14:30:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();
    let public_sale_time = new Date((new Date('Apr 29 14:30:00 UTC 2022').toLocaleString('en-US', {timeZone: 'America/New_York'}))).getTime();
    max_mint_value = 10;
    naughty_g_sale_stage = 'public';
    if(public_sale_time > current_time){
        naughty_g_sale_stage = 'early';
    }else if (early_sale_time > current_time) {
        naughty_g_sale_stage = 'pre';
    } else if (pre_sale_time > current_time) {
        naughty_g_sale_stage = 'not started';
        max_mint_value = 0;
    }
    if (mint_val >= max_mint_value) {
        mint_val = max_mint_value;
    }
    if (mint_val < 0) {
        mint_val = 0;
    }
}

async function mintSale() {
    try {
        if (typeof naughty_g_signer._isSigner != "undefined" && naughty_g_signer._isSigner === true) {
            setMintVal();
            if(naughty_g_sale_stage === "not started"){
                throw "The sale has not started yet.";
            }
            if (naughty_g_accounts.length > 0) {
                let hex_proof = [];
                if (naughty_g_sale_stage === 'pre') {
                    const CLAIMING_ADDRESS = keccak256(naughty_g_accounts[0]);
                    hex_proof = MERKLE_TREE.getHexProof(CLAIMING_ADDRESS);
                    if (!MERKLE_TREE.verify(hex_proof, CLAIMING_ADDRESS, ROOT_HASH)) {
                        throw "You Don't have access yet.";
                    }
                }
                const NAUGHTY_G_CONTRACT = new ethers.Contract(NAUGHTY_G_CONTRACT_ADDRESS, NAUGHTY_G_CONTRACT_ABI, naughty_g_provider);
                let sale_value = ethers.BigNumber.from('0');
                let max_mint_token = ethers.BigNumber.from('0');
                switch (naughty_g_sale_stage) {
                    case 'pre':
                        sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).preSalePrice();
                        max_mint_token = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).maxMintPerAddressInPresale();
                        break;
                    case 'early':
                        sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).earlySalePrice();
                        max_mint_token = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).maxMintPerAddressInEarlysale();
                        break;
                    case 'public':
                        sale_value = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).publicSalePrice();
                        max_mint_token = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).maxMintPerAddressInPublicsale();
                        break;
                    default : throw "The sale has not started yet.";break;
                }
                sale_value = parseFloat(sale_value.toString());
                max_mint_token = parseFloat(max_mint_token.toString());
                const MINT_TOKEN = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).totalNoOfTokensMintedByAddress(naughty_g_accounts[0]);
                const ALREADY_MINTED_TOKEN = parseFloat(MINT_TOKEN.toString());

                if (ALREADY_MINTED_TOKEN + mint_val > max_mint_token) {
                    Swal.fire('Warning !!', 'You may have exceeded the mint limit, Max mint limit for ' + naughty_g_sale_stage + ' sale is ' + max_mint_token, 'warning');
                } else {
                    const HASH = await NAUGHTY_G_CONTRACT.connect(naughty_g_signer).mintSale(mint_val, hex_proof, {value: sale_value});
                    if (HASH) {
                        Swal.fire('Success !!!', "The transaction has been completed successfully! Please check metamask for the latest status of your transaction.", "success");
                    } else {
                        Swal.fire('Error !!', 'Fail to complete minting.', 'error');
                    }
                }
            } else {
                throw "Please Connect The Wallet First.";
            }
        } else {
            throw "Please Connect The Wallet First.";
        }
    } catch (e) {
        if (typeof e === "string") {
            Swal.fire('Error !!', e, 'error');
        } else {
            Swal.fire('Error !!', 'Please refresh the page and try again.', 'error');
            console.error(e);
        }
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
