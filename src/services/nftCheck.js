// const [nfts, setNFTs] = useState([]);

//   useEffect(() => {


//     fetchNFTs();
//   }, []);
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('devnet'));

export default async function fetchNFTs(provider, solanaAddress) {
    try {
        const publicKey = new PublicKey(solanaAddress);
        const accountInfo = await connection.getAccountInfo(publicKey);

        console.log(accountInfo)
        // const connect = createConnectionConfig(clusterApiUrl("devnet"));
        // let ownerToken = provider.publicKey;
        // const result = isValidSolanaAddress(ownerToken);
        // console.log("result", result);

        // const nfts = await getParsedNftAccountsByOwner({
        //   publicAddress: ownerToken,
        //   connection: connect,
        //   serialization: true,
        // });
        // return nfts;
    } catch (error) {
        console.error('Error fetching NFTs:', error);
    }
}