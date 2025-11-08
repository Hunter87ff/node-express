
import e from "express";
import routes from "../routes/index.route.js";
import { PORT } from "../config.js";

export default class TestApp {

    constructor(){
        this.app = e();
        this.app.use(e.json());
        this.app.use("/", routes);
    }

    async start(){
        this.app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }

}