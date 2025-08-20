import { startWebServer } from "./application/web.js";
import { logger } from "./application/logging.js";
startWebServer(3000, () => {
    logger.info("Listening on port 3000");
});
//# sourceMappingURL=main.js.map