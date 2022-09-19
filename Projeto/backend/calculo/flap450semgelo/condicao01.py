
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
        reversor = int (input ("Está usando reversor? 1-sim / 2-nao "))
        if reversor == 1 or reversor == 2:

            isaAcima = temp - 15  
            isaAbaixo = 15 - temp
            qtdAbaixo = 18 - weight
            qtdAcima = weight - 18

            #condicao 1 1 1 peso <= 18
            if (wind2 ==  1 and reversor == 1 and weight <= 18 and slope2 == 1):
                
                if temp <= 15:
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 ) 
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                elif temp > 15:
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")

            #condicao 1 1 1 peso > 18
            if (wind2 ==  1 and reversor == 1 and weight > 18 and slope2 == 1):
                
                if temp <= 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                elif temp > 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                

            #condicao 1 1 2 peso > 18
            if (wind2 ==  1 and reversor == 1 and weight > 18 and slope2 == 2):
                
                if temp <= 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                elif temp > 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
            #condicao 1 1 2 peso <= 18
            if (wind2 ==  1 and reversor == 1 and weight <= 18 and slope2 == 2):
                if temp <= 15:   
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + 1461)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                elif temp > 15:   
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + 1461)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
            #condicao 1 2 1 peso <= 18
            if (wind2 ==  1 and reversor == 2 and weight <= 18 and slope2 == 1):
                
                if temp <= 15:    
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5)) 
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                elif temp > 15: 
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
            #condicao 1 2 1 peso > 18
            if (wind2 ==  1 and reversor == 2 and weight > 18 and slope2 == 1):
                
                if temp <= 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5)  + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                elif temp > 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                
            #condicao 1 2 2 peso > 18
            if (wind2 ==  1 and reversor == 2 and weight > 18 and slope2 == 2):
                
                if temp <= 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                elif temp > 15:
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5)  + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                
            #condicao 1 2 2 peso <= 18
            if (wind2 ==  1 and reversor == 2 and weight <= 18 and slope2 == 2):
                
                if temp <= 15:    
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                elif temp > 15:    
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    - ((41 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                
                
            #condição 2 2 2 e peso > 18
            if (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 2):
                
                if temp <= 15:    
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    + ((218 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar") 
                elif temp > 15:    
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    + ((218 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5)  + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                    
            #condição 2 2 2 e peso <= 18
            if (wind2 ==  2  and reversor == 2 and weight <= 18 and slope2 == 2):
                
                if temp <=15:        
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    + ((218 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                elif temp > 15:        
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    + ((218 * wind)/5) + (273 * slope)/100 + ((117 * vap)/5)) 
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
            #condição 2 2 1 e peso <= 18
            if (wind2 ==  2  and reversor == 2 and weight <= 18 and slope2 == 1):
                
                if temp <= 15:        
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * isaAbaixo)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5)) 
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                if temp > 15:        
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * isaAcima)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condição 2 2 1 e peso > 18
            if (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 1):
                
                if temp <= 15:        
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                if temp > 15:        
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
            #condição 2 1 2 e peso <= 18
            if (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 2):
                        
                if temp <= 15:   
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
                if temp > 15:        
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((53 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) )
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condição 2 1 1 e peso <= 18
            if (wind2 ==  2  and reversor == 1 and weight <= 18 and slope2 == 1):
                
                if temp <= 15:           
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) - ((18 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                if temp > 15:           
                    calculo = (1637 - ((76 * qtdAbaixo)/1) + ((56 * alt)/1000) + ((53 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461)
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                
            #condição 2 1 1 e peso > 18
            if (wind2 ==  2  and reversor == 1 and weight > 18 and slope2 == 1):
                        
                if temp <= 15:  
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) - ((18 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                
                if temp > 15:  
                    calculo = (1637 + ((75 * qtdAcima)/1) + ((56 * alt)/1000) + ((35 * temp)/5)
                    + ((218 * wind)/5) - (27 * slope)/100 + ((117 * vap)/5) + 1461 + ((150*qtdAcima)))
                            
                    print ("Sera necessario: ", calculo, "mts para pousar")
                    
        else:
            print("escolha uma opção válida!")         
    else:
        print("escolha uma opção válida!")           
else:
    print("escolha uma opção válida!")