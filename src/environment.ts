const environment = {
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  private: process.env.NEXT_PUBLIC_PUBLIC_PRIVATE === 'true',
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL!,
  cryptoKey: process.env.NEXT_PUBLIC_CRYPTO_KEY!,
};

export default environment;
