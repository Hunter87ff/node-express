

const users = new Map(); //<email : { email, password}>
const tokens = new Map();  //<token : email>

export default class AuthController {

    /**
     * this should used as /auth/signup
     * @param {Request} req 
     * @param {Response} res 
     */
    static async signup(req, res) {
        const { email, password} = req.body;

        // check if existing !! 
        const existing  = users.get(email);
        if(existing){
            return res.status(400).json({ message: "User already exists" });
        }

        users.set(email, {email, password });
        const _token = `token-${Math.random().toString(36).substr(2)}`;
        tokens.set(_token, email);
        return res.status(201).json({ message: "User created successfully", token: _token });
    }

    /**
     * this should used as /auth/
     * @param {Request} req 
     * @param {Response} res 
     */
    static async auth(req, res){
        const token = req.body.token;
        const email = tokens.get(token);
        if(!token || !email){
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = users.get(email);
        return res.status(200).json({ message: "Authorized", data : user });
    }


    /**
     * this should used as /auth/login
     * @param {Request} req
     * @param {Response} res
     */
    static async login(req, res){
        const { email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "Bad request!! you better mention email and password"})
        }

        const user = users.get(email)

        if(!user){
            return res.status(404).json({message : "User is dead !!"})
        }

        if(user.password != password){
            return res.status(401).json({message : "You've entered a wrong passsword!!"})
        }

        return res.status(200).json({message : "You've passed for heaven!!", data : user})

    }

    // data : "email"
    // data : { email, password }

}



// 404 Not Found
// 400 Bad request
// 401 Unauth
// 403 Forbidden
// 200 Success/ok
// 201 Created
// 204 Existing

// 200 - success code

// 302 redirect
// 429 rate limited

// 500 server error
// 502 service unreachable/unavailable