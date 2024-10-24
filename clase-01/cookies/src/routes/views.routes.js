import { Router } from "express";

const router = Router();

//Setear una cookie
router.get("/setCookie", (req, res) => {
  res
    .cookie("cookieName", "Info en la cookie", { maxAge: 10000 })
    .send("Cookie Seteada");
});


//Obtener la cookie
router.get("/getCookie", (req,res) => {

    const cookie = req.cookies.cookieName;
    res.send(`El valor de la cookie es : ${cookie}`)

})


//limpiar las cookies

router.get("/deleteCookie", (req,res) => {

    res.clearCookie("cookieName").send("Cookie eliminada")

})

router.get("/", (req,res) =>  {
    res.render("index");
})

router.post("/setdata", (req,res) => {
    const {user, email} = req.body;
    res.cookie("user", {email, user, role: "user"}, {maxAge: 100000, signed:true })
    .send("Cookie guardada")
})

router.get("/getdata", (req,res) => {

    const cookie = req.cookies.user;
    res.send(cookie)

})

export default router;
