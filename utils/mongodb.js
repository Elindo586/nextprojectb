import { MongoClient} from "mongodb";

const {MONGODB_URI } = process.env

let cached = global.mongo

if (!cached) {
    cached = global.mongo = {conn: null, promise: null}
}

export async function connectToDatabaseEl(){
    if (cached.conn)
    return cached.conn
}
if (!cached.promise){
    const opts = {
        useNewParser: true
        useUnifiedTopology: true
    }
}

cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
    return {
        client,
        db: client.db(MONGO_DB),
    
    }
})