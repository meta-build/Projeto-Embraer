from importlib import import_module


print ('''
===== OPCOES DE FLAP =====
    [1] 450 sem gelo 
    [2] 450 com gelo ''')

opcao_flap = int (input ("Escolha o flap desejado: "))

if opcao_flap >=1 and opcao_flap <= 4:
       
    print('''
    ===== CONDICAO DA PISTA : =====
        [6] DRY
        [5] GOOD
        [4] GOOD TO MEDIUM
        [3] MEDIUM
        [2] MEDIUM TO POOR
        [1] POOR''')

    condicao_pista = int (input ("Escolha a condicao desejada: "))

    if condicao_pista >=1 and condicao_pista <= 6:
        
        
        #FLAP 450 SEM GELO PRA TODAS CONDIÇÕES DE PISTA        
        if condicao_pista == 6 and opcao_flap == 1:
            from flap450semgelo import condicao06
            
        elif condicao_pista == 5 and opcao_flap == 1:
            from flap450semgelo import condicao05
            
        elif condicao_pista == 4 and opcao_flap == 1:
            from flap450semgelo import condicao04
            
        elif condicao_pista == 3 and opcao_flap == 1:
            from flap450semgelo import condicao03
        
        elif condicao_pista == 2 and opcao_flap == 1:
            from flap450semgelo import condicao02
            
        elif condicao_pista == 1 and opcao_flap == 1:
            from flap450semgelo import condicao01
        
        #FLAP 450 COM GELO PRA TODAS CONDIÇÕES DE PISTA           
        elif condicao_pista == 6 and opcao_flap == 2:
            from flap450comgelo import condicao06
            
        elif condicao_pista == 5 and opcao_flap == 2:
            from flap450comgelo import condicao05
            
        elif condicao_pista == 4 and opcao_flap == 2:
            from flap450comgelo import condicao04
        
        elif condicao_pista == 3 and opcao_flap == 2:
            from flap450comgelo import condicao03
            
        elif condicao_pista == 2 and opcao_flap == 2:
            from flap450comgelo import condicao02
        
        elif condicao_pista == 1 and opcao_flap == 2:
            from flap450comgelo import condicao01
            
    
    else:
        print ("Escolha uma opcao valida!")
        
else:
    print("Escolha uma opcao valida!")