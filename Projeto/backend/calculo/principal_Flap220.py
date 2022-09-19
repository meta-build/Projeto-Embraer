print('''
[1] - YES
[2] - NO''')
X = int(input("Possui gelo no flap 220?: "))
if X == "1":
    opcao = 0
    print('''
    [6] DRY
    [5] GOOD
    [4] GOOD TO MEDIUM
    [3] MEDIUM
    [2] MEDIUM TO POOR
    [1] POOR''')
    opcao = int(input("Choose Breaking Action: "))
    if opcao == 6:
        import opcao6_Cgelo
        opcao6_Cgelo
    if opcao == 5:
        import opcao5_Cgelo
        opcao5_Cgelo
    if opcao == 4:
        import opcao4_Cgelo
        opcao4_Cgelo
    if opcao == 3:
        import opcao3_Cgelo
        opcao3_Cgelo
    if opcao == 2:
        import opcao2_Cgelo
        opcao2_Cgelo
    if opcao == 1:
        import opcao1_Cgelo
        opcao1_Cgelo
    
else:
    opcao = 0
    print('''
    [6] DRY
    [5] GOOD
    [4] GOOD TO MEDIUM
    [3] MEDIUM
    [2] MEDIUM TO POOR
    [1] POOR''')
    opcao = int(input("Choose Breaking Action: "))
    if opcao == 6:
        import opcao6_Sgelo
        opcao6_Sgelo
    if opcao == 5:
        import opcao5_Sgelo
        opcao5_Sgelo
    if opcao == 4:
        import opcao4_Sgelo
        opcao4_Sgelo
    if opcao == 3:
        import opcao3_Sgelo
        opcao3_Sgelo
    if opcao == 2:
        import opcao2_Sgelo
        opcao2_Sgelo
    if opcao == 1:
        import opcao1_Sgelo
        opcao1_Sgelo
    

