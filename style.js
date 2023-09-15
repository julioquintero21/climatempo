
        function ClimaseTempos() {
            var cidadePais = document.getElementById("cidadePaisbotao").value;

           
            if (cidadePais.trim() === "") {
                alert("Por favor, digite a cidade e o país.");
                return;
            }

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadePais}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    document.getElementById("local").innerHTML = "Local : " + data.name +","+ data.sys.country;
                    document.getElementById("temperatura").innerHTML = "Temperatura: " + data.main.temp +"°C";
                    document.getElementById("umidade").textContent = "Umidade: " + data.main.humidity + "%";
                    document.getElementById("mar").textContent = "Sensação: " + data.main.feels_like + "°";
                   
                   
                })
                .catch(error => {
                    console.error("Erro ao buscar informações:", error);
                    alert("Não foi possível encontrar informações para a cidade e o país especificados.");
                })
                
        }
        function abreLink(){
            var cidade = document.getElementById("cidadePaisbotao").value
            window.open('https://earth.google.com/web/search/' + cidade);
        }

        
   