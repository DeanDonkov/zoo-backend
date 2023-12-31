
const getEnvironmentVariable = (name: string): string => {
    const env = process.env[name];
    if (!env) {
        throw new Error(`Couldn't find environment variable: ${name}`);
    }
    return env;
};

export const GITHUB = {
    TOKEN: getEnvironmentVariable('GITHUB_TOKEN'),
    REPO: getEnvironmentVariable('GITHUB_REPO'),
    REPO_OWNER: getEnvironmentVariable('GITHUB_REPO_OWNER'),
    DEFAULT_BRANCH: getEnvironmentVariable('GITHUB_DEFAULT_TRACKED_BRANCH'),
    DEVELOPMENT_BRANCH: getEnvironmentVariable('GITHUB_DEV_TRACKED_BRANCH'),
    COMMITS_COUNT: getEnvironmentVariable('GITHUB_FETCHED_COMMITS_PER_PAGE')
};

export const DB = {
    HOST: process.env.MONGODB_HOST || 'localhost',
    PORT: process.env.MONGODB_PORT || '27017',
    NAME: process.env.MONGODB_DATABASE_NAME || '',
    USERNAME: process.env.MONGODB_USERNAME || '',
    PASSWORD: process.env.MONGODB_PASSWORD || '',
    URI: process.env.MONGODB_URI || '',
    CA_CERT: process.env.CA_CERT
};

export const DEPLOYMENT = getEnvironmentVariable('DEPLOYMENT');
export const HEALTH_CHECK = getEnvironmentVariable('HEALTH_CHECK_LOAD_INTERVAL');

export const PORT = process.env.PORT || 5000;
