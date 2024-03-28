import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// root persist reducers
const rootPersistConfig = {
    key: "store",
    storage,
    blacklist: [],
    whitelist: [],
};

export default rootPersistConfig;
