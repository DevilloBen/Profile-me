import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  Query,
  query,
  onSnapshot,
} from "firebase/firestore";
import { API_COLLECT } from "../config/dotenv";
import { database } from "../config/firebase";
import { ResumeDTOType } from "../contexts/ResumeContext";

type ResponsePropsType = {
  [field: string]: any;
};
let res: ResponsePropsType;
let messages = {};

export const getDataProfile = async (): Promise<ResumeDTOType> => {
  for (let index = 0; index < API_COLLECT.length; index++) {
    const db = collection(database, API_COLLECT[index]);
    if (
      API_COLLECT[index] !== "interests" &&
      API_COLLECT[index] !== "education"
    ) {
      var q: Query<DocumentData>;
      q = query(db, orderBy("order", "asc"));
      res = await new Promise<ResponsePropsType>((res, rej) => {
        try {
          onSnapshot(q, (snapshot) => {
            const logs = snapshot.docs.map((doc) => doc.data());
            res(logs);
          });
        } catch (e) {
          rej([]);
        }
      });
    } else {
      const docSnap = await getDocs<DocumentData>(db);
      res = docSnap.docs.map((doc) => doc.data());
    }
    messages = {
      ...messages,
      [API_COLLECT[index]]: res,
    };
  }
  return messages;
};
