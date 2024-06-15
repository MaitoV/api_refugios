import ModelMem from "./refugiosMem.js";
import ModelMongoDB from "./refugiosMongoDB.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                return new ModelMem();
            break;
            case 'MONGODB':
                return new ModelMongoDB();
            break;
            default: 
                return new ModelMem();
        }
    }
}

export default ModelFactory;