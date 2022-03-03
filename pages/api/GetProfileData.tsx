import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { TypeExp } from "../../modules/ProfileModule";

var res:TypeExp

const getDataProfile = async (dbCollection:string) => {
  try {
    
    const dbInstance = collection(database, dbCollection);
    await getDocs(dbInstance).then((data:any) => {
        data.docs.map((item: any) => {
          res = { ...item.data() }
        })
      })
      
    return res
  } catch (error) {
    return null
  }

}

const apis = {
  getDataProfile
}
export default apis