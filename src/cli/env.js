const parseEnv = () => {
  // Write your code here
  const envVars = Object.entries(process.env || []);
  const envVarsWithRSS = envVars.filter(([key, value]) => {
    return key.startsWith('RSS_');
  });

  const envsAsString = envVarsWithRSS
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log(envsAsString);
};

parseEnv();
