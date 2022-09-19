weight = float (input ("Weight: "))
alt = float (input ("Alt: "))
temp = float (input ("Temp: "))
wind = float (input ("Wind: "))
wind2 = int (input("1 - head wind or 2 - tail wind:"))
if wind2 == 1 or wind2 == 2:
    
    slope = float (input ("Slope: "))
    slope2 = int (input("1 - uphill or 2 - downhill: "))
    if slope2 == 1 or slope2 == 2:
        
        vap = float (input ("Vap : "))
        reversor = int (input ("Está usando reversor? 1 - sim / 2 - nao "))
        if reversor == 1 or reversor == 2:

            # 15 °C é o valor isai
            isaAbaixo =  15 - temp
            isaAcima = temp - 15
            qtdAbaixo = 18 - weight
            qtdAcima = weight - 18
                
            #condicao 1 1 1 peso < 18  e isa < 15
            if (wind2 ==  1  and reversor == 1 and weight <= 18 and slope2 == 1):
                
                if temp <= 15 :
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                # peso < 18 e temp > 15
                elif temp > 15:
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                    
            #condicao 1 1 1 peso > 18 e temp < 15
            elif (wind2 ==  1  and reversor == 1 and weight > 18 and slope2 == 1):
                
                if temp <= 15 :
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                #peso > 18 e temp > 15
                elif temp > 15 :
                    
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                

            #condicao 1 1 2 peso < 18
            elif (wind2 ==  1  and reversor == 1 and weight <= 18 and slope2 == 2):
                #peso <= 18 e temp <= 15
                if temp <= 15:
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                #peso <= 18 e temp > 15
                elif temp > 15:
                    
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                    
                
            #condicao 1 1 2 peso > 18
            elif (wind2 ==  1  and reversor == 1 and weight > 18 and slope2 == 2):
                
                #peso > 18 e temp >15
                if temp > 15 :
                    
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                #peso > 18 e temp <15
                if temp <= 15 :
                    
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")

            #condicao 1 2 1 peso <= 18
            elif (wind2 ==  1  and reversor == 2 and weight <= 18 and slope2 == 1):
                
                #peso <= 18 e temp <= 15
                if temp <= 15:     

                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                #peso <= 18 e temp > 15
                elif temp > 15:
                    
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + (( 54 * isaAcima)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                    
            #condicao 1 2 1 peso > 18
            elif (wind2 ==  1  and reversor == 2 and weight > 18 and slope2 == 1):
                
                #peso > 18 e temp > 15
                if temp > 15:
                    
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5)) 
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                #peso > 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAcima)/5)
                    - ((37 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                
            #condicao 1 2 2 peso < 18
            elif (wind2 ==  1  and reversor == 2 and weight <= 18 and slope2 == 2):
                qtdAbaixo = 18 - weight
                
                #peso <= 18 e temp <= 15
                if temp <= 15:
                            
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                #peso <=18 e temp > 15
                elif temp > 15:
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((54 * isaAcima)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")

            #condicao 1 2 2 peso > 18
            elif (wind2 ==  1  and reversor == 2 and weight > 18 and slope2 == 2):
                # peso > 18 e temp > 15
                if temp > 15:
                    
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((54* isaAcima)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                # peso > 18 e temp <= 15
                elif temp <= 15:
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    - ((37 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                
            #condicao 2 2 2 peso > 18           
            elif (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 2):
                
                #peso > 18 e temp > 15
                if temp > 15: 
                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                #peso > 18 e temp <= 15
                if temp <= 15: 

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condicao 2 2 2 peso < 18           
            elif (wind2 ==  2  and reversor == 2 and weight <= 18 and slope2 == 2):
                #peso <= 18 e temp <= 15
                if temp <= 15:
            
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                #peso<=18 e temp > 15    
                if temp > 15:
            
                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")

            #condicao 2 2 1  peso <= 18 
            elif (wind2 ==  2  and reversor == 2 and weight <= 18 and slope2 == 1):
                #peso <= 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso <= 18 e temp > 15
                if temp > 15:

                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
            #condicao 2 2 1  peso > 18 
            elif (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 1):
                #peso <= 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso > 18 e temp > 15
                if temp > 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
            #condicao 2 1 2  peso <= 18 
            elif (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 2):
                #peso <= 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso <= 18 e temp > 15
                if temp > 15:

                    calculo = (1495 - ((71 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
            #condicao 2 1 2  peso > 18 
            elif (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 2):
                #peso > 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso > 18 e temp > 15
                if temp > 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) - (20 * slope)/100 + ((119 * vap)/5) + 935)
                    
            #condicao 2 1 1  peso > 18 
            elif (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 1):
                #peso > 18 e temp <= 15
                if temp <= 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso > 18 e temp > 15
                if temp > 15:

                    calculo = (1495 + ((70 * qtdAcima)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                    
            #condicao 2 1 1  peso <= 18 
            elif (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 1):
                #peso <= 18 e temp <= 15
                if temp <= 15:
                        
                    calculo = (1495 + ((70 * qtdAbaixo)/1) + ((53 * alt)/1000) - ((19 * isaAbaixo)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
                    
                #peso <= 18 e temp > 15
                if temp > 15:
                    calculo = (1495 + ((70 * qtdAbaixo)/1) + ((53 * alt)/1000) + ((51 * isaAcima)/5)
                    + ((217 * wind)/5) + (222 * slope)/100 + ((119 * vap)/5) + 935)
        else:
            print ("escolha uma opção válida")    
    else: 
        print("escolha uma opção válida!")   
else:
    print("escolha uma opção válida!")            
            
        