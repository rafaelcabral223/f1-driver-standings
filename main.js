const nome = document.getElementById('name');
 
fetch(`https://ergast.com/api/f1/2023/driverStandings.json`).then(resposta => {
        return resposta.json();
        }).then(data => {
                const datas = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                       
                var AdicionarLinha = "";
                const newDatas = datas.map((user) => {
                        AdicionarLinha += `<tr class="table-row position${user.position}">`;
                        AdicionarLinha += `<td class="table-data position">` + user.position + "º" + `</td>`;
                        AdicionarLinha += `<td class="table-data givenname">` + user.Driver.givenName + " " + user.Driver.familyName + `</td>`;
                        // AdicionarLinha += `<td class="table-data">` + user.Constructors[0].name + `</td>`;
                        AdicionarLinha += `<td class="table-data points">` + user.points + `</td>`;

                        document.getElementById('name').innerHTML = AdicionarLinha;        
                })
        })
