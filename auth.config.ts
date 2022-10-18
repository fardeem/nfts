import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { domainName } from "./lib/constants";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || "",
  domain: domainName,
});
