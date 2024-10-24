import { Router } from "express";
import { isAdmin } from "../middleware/isAdmin.middleware,js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/session", (req, res) => {
  

  if(req.session.counter) {
    req.session.counter++;
    res.send(`se ha visitado el sitio ${req.session.counter} veces`)
  }else{
    req.session.counter = 1;
    res.send("Bienvenido por pimera vez")
  }
});

router.get("/logout" ,(req,res) => {

  req.session.destroy((err) => {
    if(!error){
      res.send("Session cerrada")
    }else{
      res.send(`Error al cerrar la session: ${err}`);
    }
  })

})

router.get("/login", (req,res) => {

  const { username, password } = req.query; 

  if(username !== "pepe" || passowrd !== "123"){
    return res.send("Usuario o contraseña no valido")
  }

  req.session.user = username;
  req.session.admin = true;

  res.send(`Bienvenido ${username}`)

})

router.get("/admin", isAdmin, (req, res) => {
  res.send(`Bienvenido usuario ${req.session.user}`)
})

export default router;
