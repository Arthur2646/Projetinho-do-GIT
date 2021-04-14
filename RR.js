/*
# ROUND-ROBIN
def round_robin(processos, quantum, qnt_processos):
    # Criando uma lista de Burst Time restante dos processos
    bt_restante = [0] * qnt_processos
    # Criando uma lista de Waiting Time
    wt = [0] * qnt_processos
    # Copiando BurstTime dos processos para o bt_restante
    for i in range(qnt_processos):
        bt_restante[i] = processos[i][2]

    tempo = 0 # Tempo total que será adicionado ao WaitingTime
    overhead = 1 # Valor hipotetico para o tempo gasto na troca de contexto entre processos

    while True:
        # Variavel de Controle, verifica se os processos foram
        # finalizados ou não
        finalizados = True
        for i in range(qnt_processos):
            tempo += overhead # Para cada troca de contexto entre os processos, Adicionar ao Tempo Total

            # Se for maior que 0, ainda há processos a serem
            # Finalizados
            if bt_restante[i] > 0:
                finalizados = False
                # Se o tempo restante for maior que Quantum 
                if bt_restante[i] > quantum:
                    # Somar quantum ao tempo de processamento
                    tempo += quantum
                    # Retirar do BurstTime restante o Tempo(quantum)
                    # que ja foi processado
                    bt_restante[i] -= quantum
                else: # Caso o tempo restante seja menor que quantum
                    # Somar ao tempo, o tempo restante de bt
                    tempo += bt_restante[i]
                    # WaitingTime = tempo_total - burst_time do processo
                    wt[i] = tempo - processos[i][2]
                    # Zerando burst time
                    bt_restante[i] = 0
        # Se todos os Processos foram concluídos
        if (finalizados == True):
            break
    return wt # Retornar Lista de WaitingTime

*/

/*função do robim sem o batman*/
function round_robin(processos, quantum, qnt_processos){
  lista1 = []
  lista2 = []
  
  for (let i = 0; i < qnt_processos; i++){
    lista1.push[0]}
  let bt_restante = lista1
   for (let i = 0; i < qnt_processos; i++){
    lista2.push[0]}
  let wt = lista2
   for (let i = 0; i < qnt_processos; i++){
    bt_restante [i] = processos [i] [2]} 
  
  let tempo = 0
  let overhead = 1
/*ESSA MERDA DE WHILE N ME DEIXO USAR O LOOP POR CAUSA DO ULTIMO PARAMETRO PRA PODER QUEBRAR O LOOP, AGR EU TENHO Q COLOCAR OS FINALIZADOS E VER SE SAPOHA VAI*/
  while(true){
    finalizados = true
    for (let i = 0; i < qnt_processos; i++){
      tempo += overhead
            /* ESSE CONRO DO FINALIZADO = A FALSE NÃO PODE FECHAR KRL*/
    if (bt_restante [i] > 0){finalizados = false
      if (bt_restante[i] > quantum){
        tempo += quantum
        bt_restante[i] -= quantum
      }
      else{
        tempo += bt_restante[i]
        wt[i] = tempo - processos [i] [2]
        bt_restante[i] = 0
      }}}
    if (finalizados == true){break}
  }
  return wt}
/* ESSA PORRA DE WHILE FEZ O NAVEGADOR CRACHAR UMAS 5 VEZES ESSA MERRRRDDDDAAAAA */
/*
def turn_around_time(processos, wt, qnt_processos):
    tat = [0] * qnt_processos
    for x in range(qnt_processos):
        tat[x] = processos[x][2] + wt[x]
    return tat
*/
function turn_around_time(processos, wt, qnt_processos){
  lista = []
  for (let i = 0; i < qnt_processos; i++){
        lista.push(0)}
  let tat = lista
  for (let i = 0; i < qnt_processos; i++){
    tat [i] = parseInt( processos [i] [2] +  wt [i])}
  return tat}

/*
def average_tat(tat, qnt_processos):
    turnaround_time = sum(tat)
    return (turnaround_time/qnt_processos)
*/
function average_tat(tat, qnt_processos){
  turnaround_time = tat.reduce((a,b) => a+b,0)
  return (turnaround_time / qnt_processos)}

/*
def average_wt(wt, qnt_processos):
    waiting_time = sum(wt)
    return (waiting_time/qnt_processos)
*/
function average_wt( wt, qnt_processos){
  waiting_time = wt.reduce((a,b) => a+b,0)
  return (waiting_time / qnt_processos)}

/*
#####################################################################

processos = []
print("Algoritmo Round Robin")
qnt_processos = int(input("Quantidade de processos: "))
for x in range(qnt_processos):
    pid = f"P{x}" ===== template string, TEMM Q CONCATENA ESSA MERRDSA
########################################
      var a = 5;
      var b = 10;
      console.log(`Quinze é ${a + b} ==== CONCAT DE BOSTA
      p = "P"
      pid = p + i
###########################################


    at = int(input("Arrival Time: "))
    bt = int(input("Burst Time: "))
    processos.append([pid, at, bt])
quantum = int(input("Informe o Quantum: "))
*/

let processos = []
/* raund do robin, mais sem o batman?, sacanagem*/
console.log("Algoritmo Round Robin")
qnt_processos = parseInt(prompt("Quantidade de processos: "))
for (let i = 0; i < qnt_processos; i++){
  /*FOI SA POHA*/
  pid = "P" + i
  at = parseInt(prompt("Arrival Time: "))
  bt = parseInt(prompt("Burst Time: "))
  processos.push([pid, at, bt])
}
quantum = parseInt(prompt("Informe o Quantum: "))

/*
###########################################
# Estrutura da Lista de Processos
# 
#   processos = [
#               [id, at, bt],
#               [id2, at2, bt2]
#               ]
#
#   id = id do processo
#   at = Arrival Time
#   bt = Burst Time
############################################
*/

/*
# Waiting Time
wt = round_robin(processos, quantum, qnt_processos)
# TurnAround Time
tat = turn_around_time(processos, wt, qnt_processos)
# Média de todos os TurnAround Time
avg_tat = average_tat(tat, qnt_processos)
# Média de todos os Waiting Time
avg_wt = average_wt(wt, qnt_processos)
print(f"WT = {wt}\nTAT = {tat}\nAVG_TAT = {avg_tat}\nAVG_WT = {avg_wt}")
*/
let wt = round_robin(processos, quantum, qnt_processos)
let tat = turn_around_time(processos, wt, qnt_processos)
let avg_tat = average_tat(tat, qnt_processos)
let avg_wt = average_wt(wt, qnt_processos)
/* TEM Q TROCAR A MERDA DA VIGULAR POR "+", PQ FICO FEIO PRA PORRA E ESSA KCT N FOI COMO EU QUERIA*/
console.log("WT = " + wt + "\n" + "TAT = " + tat  +"\n" + "AVG_TAT = " + avg_tat +"\n" + "AVG_WT = ", avg_wt) 

/*
print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t\n\n")
for proc in range(len(processos)):
    print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t{tat[proc]}\t\t\t\n")

print(f"Average Waiting Time: {avg_wt}")
print(f"Average Turn-Around Time: {avg_tat}")
*/
console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t\n\n")
for (let proc = 0; proc < processos.length; proc++){
  console.log(processos[proc][0], "\t\t\t", processos[proc][2], "\t\t\t", processos[proc][1], "\t\t\t", wt[proc], "\t\t\t", tat[proc], "\t\t\t\n")
}

console.log("Average Waiting Time: " + avg_wt)
console.log("Average Turn-Around Time: " + avg_tat)