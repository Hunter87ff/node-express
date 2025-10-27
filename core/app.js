
import e from "express";
import { PORT } from "../config";

export default class TestApp {

    constructor(){
        this.app = e();
    }

    async start(){
        this.app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }

}