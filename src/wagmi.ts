import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import {
  mainnet,
  taiko,
  taikoHekla,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "3e5fb9eb794c48260e2a5a41be9e5b38",
  chains: [
    mainnet,
    taiko,
    taikoHekla,
  ],
  transports: {
    [mainnet.id]: http(
      "https://eth-mainnet.g.alchemy.com/v2/8ywJ2qEHhB4TgLYz5ytdQiRyVHRNcoQT"
    ),
  },
});
