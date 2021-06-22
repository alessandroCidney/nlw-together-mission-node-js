import { createConnection } from "typeorm";

createConnection();

// yarn typeorm migration:create -n CreateUsers
// yarn typeorm migration:run
// yarn typeorm migration:revert