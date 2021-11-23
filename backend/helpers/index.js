const bcrypt = require("bcryptjs");

// console.log('bcrypt')

const encryptPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    return hash;
  } catch (error) {
    console.log(error.message)
  }

}

module.exports = encryptPassword;