import dbConnect from "../../../utils/mongodb";

export default async (req, res) => {
    const db = await dbConnect()

    if (req.method === "GET") {
        db.collection("users", (err, usersCollection) => 
            usersCollection.find({}).toArray((err, users) => {
                res.status(200).json(users)
            })
        )
    }
}