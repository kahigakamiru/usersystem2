const jwt = require('jsonwebtoken');

// FORMAT OF THE TOKEN
// x-access-token: Bearer <access-token>

// verifyToken method.
const verifyToken = async (req, res, next) => {
  // getting the token from either the body, query parameters or headers
  const authHeader= req.headers['authorization'];

  const token = authHeader.split(' ')[1];

  if(token) {

    
    try {
        const data = await jwt.verify(token, 'secretkey')
        req.user = data;

        next();      
    } catch (error) {
        if(error) return res.status(403).json({ message: "forbidden" });
      
    }
    
  } else {
    res.status(403).json({ message: "forbidden1" });
  }

}

module.exports = verifyToken;