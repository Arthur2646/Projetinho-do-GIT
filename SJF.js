/* AE QUEM LER SASPOHAS, TO TRANSCREVENDO OUVINDO 
Blind Guardian - Thorn (Remastered 2007)
É BAUM DE +++*/ 

/*
def waiting_time(processos):
    # definindo a qnt. tempo de servico baseado na qnt de processos
    tempo_servico = [0] * len(processos)
    # definindo tamanho da waiting list
    wt = [0] * len(processos)
    for x in range(1, len(processos)):
        tempo_servico[x] = (tempo_servico[x-1] + processos[x-1][2])
        wt[x] = tempo_servico[x] - processos[x][1]
        if (wt[x] < 0):
            wt[x] = 0
    return wt
*/

function waiting_time(processos){
    lista1 = []
    lista2 = []
    for(let i=0;i<processos.length;i++){
      lista1.push(0)}
    for(let i=0;i<processos.length;i++){
      lista2.push(0)}
    /* TEM Q BOTAR LET NOS 2, PQ SE N ESSAS POHA N RODA */  
    let tempo_servico = lista1
    let wt = lista2
    for(let i = 1; i < processos.length; i++){
      tempo_servico [i] = parseInt(tempo_servico[i-1] + processos[i - 1] [2])
      wt [i] = parseInt(tempo_servico [i] - processos [i] [1])
      if (wt [i] < 0){
        wt [i] = 0}}
    return wt}
  
  /*
  def turn_around_time(processos):
      # turnaround time = burstTime + waitingTime
      tat = [0] * len(processos)
      wt = waiting_time(processos)
      for x in range(len(processos)):
          tat[x] = processos[x][2] + wt[x]
      return tat
  */
  
  function turn_around_time(processos){
    lista = []
    for (i=0;i<processos.length;i++){
      lista.push(0)}
    /* TEM Q BOTAR LET NESSES 2 SE N ESSAS POHA N RODA */
    let tat = lista
    let wt = waiting_time(processos)
    for (let i = 0; i < processos.length; i++){
      tat [i] = parseInt(processos [i] [2] + wt [i])}
    return tat}
  
  /*
  def average_tat(processos):
          tat = sum(turn_around_time(processos))
          # Retornando o tempo medio 
          # Soma_dos_tat / qnt.Processos
          return (tat/len(processos))
  */
  
  function average_tat(processos){
    let tat = turn_around_time(processos).reduce((a,b) => a+b,0)
    return (tat / processos.length)}
  
  /*
  def average_wt(processos):
      wt = sum(waiting_time(processos))
      return (wt / len(processos))
  */
  
  function average_wt(processos){
    let wt = waiting_time(processos).reduce((a,b) => a+b,0)
    return (wt / processos.length)}
  
  /*
  def SJF(processos):
      # Ordenando por Job(Burst time) mais curto
      for i in range(0, len(processos)):
          for j in range(0, len(processos) - 1):
              if processos[j][2] > processos[j+1][2]:
                  processos[j], processos[j+1] = processos[j+1], processos[j]
      return processos
  */
  
  function SJF(processos){
    for(let i = 0; i < processos.length; i++){
      /*COLOCAR O "-1" NO RANGE Q É O PROCESSOS.LENGTH */
      for (let x = 0; x < processos.length - 1; x++){
        if (processos [x] [2] > processos [x + 1] [2]){
          processos [x], processos [x + 1] = processos [x + 1], processos [x]}}}
    return processos}
  
  /*
  ######################################################################
  print(":::::::::::::::::::::::::::::::::::SJF:::::::::::::::::::::::::::::::::::")
  
  processos = []
  qnt_processos = int(input("Quantidade de processos: "))
  for x in range(qnt_processos):
      pid = f"P{x}"
      at = int(input("Arrival Time: "))
      bt = int(input("Burst Time: "))
      processos.append([pid, at, bt])
  */
  
  console.log(":::::::::::::::::::::::::::::::::::SJF:::::::::::::::::::::::::::::::::::")
  
  processos = []
  qnt_processos = parseInt(prompt("Quantidade de processos: "))
  for (let i = 0; i < qnt_processos; i++){
    pid = "P" + i
    at = parseInt(prompt("Arrival Time: "))
    bt = parseInt(prompt("Burst Time: "))
    processos.push([pid, at, bt])
  }
  
  /*##### SÃO 16:04 DA TARDE DE SEXTA E POR ENQUANTO TA MO PAZ, N DEU ERRO EM ND AINDA*/
  
  /*
  #############################################
  # Estrutura da Lista de Processos           #
  #  Lista_processos = [                      #
  #                    [id, at, bt],          #
  #                    [id2, at2, bt2],       #
  #                   ]                       #
  #                                           #
  #   id = id do processo                     #
  #   at = Arrival Time                       #
  #   bt = Burst Time                         #
  #                                           #
  #############################################
  */
  
  /*###################################################
  A black swan
  Is born in that night
  The misty pond
  Got a new king
  Got a new king
  
  So what can we do with our lives
  When it all begins
  It's hard and it's cruel
  Will grace die in pain? Will light ever rise again?
  ####################################################*/
  
  /*
  wt = waiting_time(processos)
  tat = turn_around_time(processos)
  avg_wt = average_wt(processos)
  avg_tat = average_tat(processos)
  print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
  */
  
  let wt = waiting_time(processos)
  let tat = turn_around_time(processos)
  let avg_wt = average_wt(processos)
  let avg_tat = average_tat(processos)
  
  console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
  
  /*
  for proc in range(len(processos)):
      print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t{tat[proc]}\t\t\t{tat[proc] + processos[proc][1]}\n")
  
  print(f"Average Waiting Time: {avg_wt}")
  print(f"Average Turn-Around Time: {avg_tat}")
  
  print("\n:::::::::::::::::::::::DEPOIS::::::::::::::::::::::\n")
  */
  
  for (let proc = 0; proc < processos.length; proc++){
    console.log(processos[proc][0] + "\t\t\t" + processos[proc][2] + "\t\t\t" + processos[proc][1] + "\t\t\t" + wt[proc] + "\t\t\t" + tat[proc] + "\t\t\t" + parseInt (tat[proc] + processos[proc][1]) + "\n")
  }
  
  console.log("Average Waiting Time: " + avg_wt)
  console.log("Average Turn-Around Time: " + avg_tat)
  console.log("\n:::::::::::::::::::::::DEPOIS::::::::::::::::::::::\n")
  /*
  processos = SJF(processos)
  wt = waiting_time(processos)
  tat = turn_around_time(processos)
  avg_wt = average_wt(processos)
  avg_tat = average_tat(processos)
  print(processos)
  */
  
  /*NÃO BOTAR O LET AKI PQ JA TEM EM CIMA, PQ SE N ELE DA ERRO DE DECLARAÇÃO */
  processos = SJF(processos)
  waiting_time(processos)
  tat = turn_around_time(processos)
  avg_wt = average_wt(processos)
  avg_tat = average_tat(processos)
  console.log(processos)
  
  /*
  print("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
  for proc in range(len(processos)):
      print(f"{processos[proc][0]}\t\t\t{processos[proc][2]}\t\t\t{processos[proc][1]}\t\t\t{wt[proc]}\t\t\t{tat[proc]}\t\t\t{tat[proc] + processos[proc][1]}\n")
  
  print(f"Average Waiting Time: {avg_wt}")
  print(f"Average Turn-Around Time: {avg_tat}")
  */
  
  console.log("| Process |\t| Burst Time |\t\t| Arrival Time |\t| Waiting Time |\t| Turn-Around Time |\t| Completion Time |\n\n")
  for(let proc = 0; proc < processos.length; proc++){
    console.log(processos[proc][0] + "\t\t\t" + processos[proc][2] + "\t\t\t" + processos[proc][1] + "\t\t\t" + wt[proc] + "\t\t\t" + tat[proc] + "\t\t\t" + parseInt(tat[proc] + processos[proc][1]) + "\n")
  }
  console.log("Average Waiting Time: " + avg_wt)
  console.log("Average Turn-Around Time: " + avg_tat)
  