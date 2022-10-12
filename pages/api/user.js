function handleUser(req, res) {
    console.log('cookies:', req.cookies)
    res.status(200).json({});
}

export default handleUser