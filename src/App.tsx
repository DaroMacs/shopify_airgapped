import RouterNav from "./Router/RouterNav";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
window.Buffer = window.Buffer || require("buffer").Buffer;

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.polygonMumbai,
  ],
  [
    alchemyProvider({ apiKey: "L-cyCh_HT4fXQlLCJwQFBxuZQ26dKHbo" }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div>
          <RouterNav />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default App;
