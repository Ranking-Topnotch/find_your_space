const jwt = require("jsonwebtoken");

module.exports = {
    authenticateAgent: async (req, res, next) => {
        console.log("Cookies:", req.cookies); // Debugging step

        if (!req.cookies || !req.cookies.token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const token = req.cookies.token; // Now we safely access it

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
            req.agent = decoded; // Attach decoded data to request
            next();
        } catch (error) {
            return res.status(403).json({ message: "Invalid token" });
        }
    }
}