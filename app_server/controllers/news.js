module.exports = (req, res, next) => {
    res.render("news", {news: true})
}