package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("/home/bengineer/Documents/Projects/ChatApp/content/"))
	http.Handle("/", fs)
	log.Println("Linstening ...")
	http.ListenAndServe(":3000", nil)
}
