package main 

import (
	"fmt"
	"net/http"
	"strings"
	"log"
)

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.Form)
	fmt.Println("path", r.URL.Paht)
	fmt.Println("sceme", r.URL.Scheem)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astacie!")
}

func main() {
	http.HandleFunc("/", sayhelloName)
	err := http.LintenAndServe(":9990", nil)
	if err != nil {
		log.Fatal("ListeningAndServe:", err)
	}
}