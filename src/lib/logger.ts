import { consoleTransport, logger as rnLogger } from "react-native-logs";

const defaultConfig = {
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },
    severity: "debug",
    transport: consoleTransport,
    transportOptions: {
        colors: {
            info: "blueBright",
            warn: "yellowBright",
            error: "redBright",
            // debug: "blue",
        },
    },
    async: true,
    dateFormat: "time",
    printLevel: true,
    printDate: true,
    enabled: true,
};

export const logger = rnLogger.createLogger(defaultConfig);
