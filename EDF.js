/* função 1 q n ta sendo usada no codigo
def hiper_periodo(processos, qnt):
    # Hiper Periodo é o maior periodo dentre todos os processos
    temp = 0
    for i in range(qnt):
        if processos[i][3] > temp:
            temp = processos[i][3]
    return temp
*/

function hiper_periodo (processos, quantidade){
/* Hiper Periodo é o maior periodo dentre todos os processos */
    temp = 0
    for (let i = 0;i<quantidade; i++){
        if (processos [i] [3] > temp){
            temp = processos [i] [3]
            console.log(temp)
        }
    }
}


/* função 2
def escolher_menor_deadline(processos, qnt, deadlines):
    menor_deadline = 10000
    escolhido = -1
    for i in range(qnt):
        if deadlines[i] < menor_deadline:
            menor_deadline = deadlines[i]
            escolhido = i
    return escolhido
*/
/*deadline = prazo, essa função aki escolhe o menor prazo dentro dos processos*/
function escolher_menor_deadline(processos,quantidade,deadlines){
    menor_deadline = 10000
    escolhido = -1
    for (let i = 0;i<quantidade; i++){
        if (deadlines [i] < menor_deadline){
        menor_deadline = deadlines [i]
        escolhido = i        
    }}
    return escolhido
}

/* função 3
def edf(processos, qnt):
    relogio = 0
    deadlines = [0] * qnt
    for i in range(qnt):
        deadlines[i] = processos[i][2]
    periodos = [0] * qnt
    for i in range(qnt):
        periodos[i] = processos[i][3]
    print(f"Processos: {processos}")
    print(f"Deadlines: {deadlines}")
    print(f"Periodos: {periodos}\n")
    contador = [0] * qnt
*/

function edf(processos, quantidade){
/*Função feita é pra mostrar dead lines e os periodos e ir percorrendo as listas*/
/*usar virgula pq ela tras as listas e não identa, o + identa*/
    relogio = 0
    lista1 = [0,0,0]
    lista2 = [0,0,0]
    lista3 = [0,0,0]
    deadlines = lista1
    for (let i = 0;i<quantidade; i++){
        deadlines [i] = processos [i][2]
    }
    periodos = lista2
    for (let i = 0;i<quantidade; i++){
        periodos [i] = processos [i][3]
    }
    console.log("Processos: ", processos, "\n")
    console.log("Deadlines: ", deadlines,"\n")
    console.log("Periodos: ", periodos, "\n")

    contador = lista3
    Loop = true
/*vai fazer até que o relogio conte mais q 20, pra selecionar os melhores e ajustar*/
    while (Loop){
        escolhido = escolher_menor_deadline(processos, quantidade, deadlines)
        console.log("Processos escolhido: ", escolhido, "\n")
        if (periodos[escolhido] >= relogio){
                relogio += processos[escolhido][1]
                console.log("Processos P", escolhido, " executando...")
                console.log("Relogio: ", relogio)
                console.log("Burst Time do Processo P1 = tempo que esse troço roda (execução): ", processos [escolhido] [1], "\n")

                console.log("Deadline ANTERIOR do Processo: ", deadlines [escolhido])
                deadlines [escolhido] += processos [escolhido] [3]
                console.log("Deadline do Processo P ", escolhido, " Atualizada", deadlines [escolhido], "\n")
                
                console.log("Periodo ANTERIOR do Processo: ", periodos [escolhido])
                periodos[escolhido] += processos[escolhido][3]
                console.log("Periodo do Processo P", escolhido, " Atualizado: ", periodos [escolhido], "\n\n\n\n")
                contador[escolhido] += 1
                }
            if (relogio >= 20){Loop = false}
    }    
        for (let i = 0;i<quantidade; i++){
            console.log("O Processo ", [i], " Executou ", contador [i], " vezes")}
        }
    

/* função 4
def edf(processos, qnt):
    relogio = 0
    deadlines = [0] * qnt
    for i in range(qnt):
        deadlines[i] = processos[i][2]
    periodos = [0] * qnt
    for i in range(qnt):
        periodos[i] = processos[i][3]
    print(f"Processos: {processos}")
    print(f"Deadlines: {deadlines}")
    print(f"Periodos: {periodos}\n")
    contador = [0] * qnt
################################################################################################################################
    while True:
        escolhido = escolher_menor_deadline(processos, qnt, deadlines)
        print(f"Processo Escolhido: {escolhido}")
        if periodos[escolhido] >= relogio:
            relogio += processos[escolhido][1]
            print(f"Processo: P{escolhido} executando...")
            print(f"Relogio: {relogio}")
            print(f"Burst Time do Processo P{escolhido}: processos[escolhido][1]")

            print(f"Deadline ANTERIOR do Processo : {deadlines[escolhido]}")
            deadlines[escolhido] += processos[escolhido][3]
            print(f"Deadline do Processo P{escolhido} Atualizada: {deadlines[escolhido]}")
            
            print(f"Periodo ANTERIOR do Processo: {periodos[escolhido]}")
            periodos[escolhido] += processos[escolhido][3]
            print(f"Periodo do Processo P{escolhido} Atualizado: {periodos[escolhido]}\n")
            contador[escolhido] += 1
        if relogio >= 20:
            break

    for i in range(qnt):
        print(f"O Processo P{i} Executou {contador[i]} vezes")
*/




/* lista e chamado
#0  1  2  3
#id bt dl p
processos = [
[0, 3, 7, 20],
[1, 2, 4, 5],
[2, 2, 8, 10]
]

qnt = len(processos)
edf(processos, qnt)
*/

processos = [
    [0, 3, 7, 20],
    [1, 2, 4, 5],
    [2, 2, 8, 10]
    ]

    quantidade = processos.length
    edf(processos, quantidade)
    hiper_periodo(processos,quantidade)