export default (req, res) => {
    if (req.method === "GET") {
        res.status(200).json({ nome: "Igor"})
    } else {
        res.status(200).json({ nome: "Alice" })
    }
}