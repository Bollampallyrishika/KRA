const getUserData = (req, res) => {
    const users = [
        {
            name: "Alex",
            age: 23,
            email: "alex@gmail.com"
        },
        {
            name: "Shym",
            age: 24,
            email: "shym@gmail.com"
        },
    ]
    try {
        res.status(200).json(users);
        
    } catch (error) {
        console.log(error.message);
    }
}

const postUserData = (req, res) => {
try {
    
    res.status(201).json({
        message: "User created successfully"
    })
} catch (error) {
    console.log(error.message);
}
}

module.exports = {getUserData, postUserData};