// example.ts

import { UndetectableApi } from "./src/undetectableApi";

(async () => {
  const apiKey = '<YOUR_API-KEY>';
  const apiClient = UndetectableApi.getInstance(apiKey);

  try {
    const result = await apiClient.detectIndividualHumanText(
      'ً<PUT-YOUR-SENTENCE-HERE>',
    );
    console.log('API Response:', result);
  } catch (error) {
    console.error(error);
  }
})();
