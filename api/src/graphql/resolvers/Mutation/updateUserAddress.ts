import User from "../../../db/models/users";

interface userAddress {
  id: string, 
  country: string,  
  city: string, 
  street: string, 
  addressnumber: string, 
} 


const updateUserAddress = async (parent:any, args: userAddress )  => {
    
  const {id, country, city, street, addressnumber, } = args

    const update = await User.update({
      country,
      city,
      street,
      addressnumber,
    },{
        where:{
            id
        }
    })
    
    if (update[0] > 0){
      return "update successfully";
    }
    return "sometingh went wrong trying to update the user"
}

export default updateUserAddress