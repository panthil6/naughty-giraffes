let naughty_g_provider,naughty_g_accounts,naughty_g_signer;
    const naughty_g_contract_address = '0x296180ac4fF57e9cDE446f689C8D2F5Ba70D1D81';
    const naughty_g_contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"SetStartTime","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlySalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxEarlysaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInEarlysale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddressInPublicsale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPresaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublicsaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numOfTokensToMint","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleproof","type":"bytes32[]"}],"name":"mintSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSalePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_mintPerAddress","type":"uint256[]"}],"name":"setMaxMintPerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_maxSupply","type":"uint256[]"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setMerkleroot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_mintPrice","type":"uint256[]"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_revealedBaseUri","type":"string"}],"name":"setRevealedBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTime","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensInWallet","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalNoOfTokensMintedByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    const whitelistAddresses = [
        "0x500C97e15bE41052C0119910fA0cd8D0d24B639C"
    ];

    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    const rootHash = merkleTree.getRoot();

    $(document).ready(function () {
        check_metamask_detection();
        $('#connect-metamask').on('click', function () {
            check_metamask_detection(true);
        });
        $('#mint-btn').on('click',function () {
            let mint_val = $('#naughty-counter-input').val();
            mintSale(mint_val);
        });
    });

    async function mintSale(mint_val) {
        try {
            if (naughty_g_signer._isSigner === true) {
                if (naughty_g_accounts.length > 0) {
                    const claimingAddress = keccak256(naughty_g_accounts[0]);
                    const hexProof = merkleTree.getHexProof(claimingAddress);
                    if (merkleTree.verify(hexProof, claimingAddress, rootHash)) {

                        // start contract process from below
                        const naughty_g_contract = new ethers.Contract(naughty_g_contract_address, naughty_g_contract_abi, naughty_g_provider);
                        const hash = await naughty_g_contract.connect(naughty_g_signer).mintSale(mint_val);
                        console.log(hash);
                        if (hash) {
                            Swal.fire('Please Check Your Inbox !!!', "The transaction has been initiated successfully! Please check metamask for the latest status of your transaction.", "success");
                        }
                    } else {
                        throw "You Don't have access yet."
                    }
                } else {
                    throw "Please Connect The Wallet First."
                }
            } else {
                throw "Please Connect The Wallet First.";
            }
        } catch (e) {
            if (typeof e === "string") {
                Swal.fire('Error !!', e, 'error');
            } else {
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
            if(naughty_g_signer._isSigner){
                $('#wallet-connected').removeClass('d-none');
                $('#connect-metamask').addClass('d-none');
                $('#get-metamask').addClass('d-none');
            }else{
                $('#wallet-connected').addClass('d-none');
                check_metamask_detection();
            }
        }catch (e) {
            check_metamask_detection();
        }
    }

    var max_mint_value = 10;
    let currentTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })).getTime();
    let startTime = new Date((new Date('Apr 1 00:00:00 UTC 2022').toLocaleString('en-US', { timeZone: 'America/New_York' }))).getTime();
    if(startTime > currentTime){
        max_mint_value = 3;
    }
    $(document).ready(function () {
        var x = 0;
        $('#naughty-counter-input').val(0);
        $('#naughty-mint-up').on('click', () => {
            if(x<max_mint_value) {
                $('#naughty-counter-input').val(++x);
            }
        });
        $('#naughty-mint-down').on('click', () => {
            if (x > 0) {
                $('#naughty-counter-input').val(--x);
            }
        });
        $('#naughty-counter-input').change(function () {
            const num = Number($(this).val());
            if(num < 0){
                $(this).val(0);
                x=0;
            }else if(x >= max_mint_value){
                $(this).val(max_mint_value);
                x=max_mint_value;
            }else{
                x = num;
            }
        });
    });
