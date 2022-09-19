#PISTA CONDIÇÃO 06 - DRY

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

            qtdAbaixo = 18 - weight
            qtdAcima = weight - 18
            isa = temp - 15

            #condicao 1 1 1 e peso < 18
            if (wind2 ==  1  and reversor == 1 and weight < 18 and slope2 == 1):
                    
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + 84)
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 1 1 e peso > 18
            elif (wind2 ==  1  and reversor == 1 and weight > 18 and slope2 == 1):
                    
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + 84 + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 1 2 e peso < 18
            elif (wind2 ==  1  and reversor == 1 and weight < 18 and slope2 == 2):
                    
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + 84)
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 1 2 e peso > 18
            elif (wind2 ==  1  and reversor == 1 and weight > 18 and slope2 == 2):
                    
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + 84 + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 2 1 e peso<18
            elif (wind2 ==  1  and reversor == 2 and weight < 18 and slope2 == 1):
                    
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5)) 
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 2 1 e peso > 18
            elif (wind2 ==  1  and reversor == 2 and weight > 18 and slope2 == 1):
                    
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")   
                                
            #condicao 1 2 2 e peso<18
            elif (wind2 ==  1  and reversor == 2 and weight < 18 and slope2 == 2):
                    
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) )
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 1 2 2 e peso>18
            elif (wind2 ==  1  and reversor == 2 and weight > 18 and slope2 == 2):
                
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) - ((10 * isa)/5)
                - ((21 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condicao 2 2 2 e peso > 18    
            elif (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 2):
                        
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 2 2 2 e peso < 18    
            elif (wind2 ==  2  and reversor == 2 and weight < 18 and slope2 == 2):
                        
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) )
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 2 2 1 e peso > 18    
            elif (wind2 ==  2  and reversor == 2 and weight > 18 and slope2 == 1):
                        
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 2 2 1 e peso < 18    
            elif (wind2 ==  2  and reversor == 2 and weight < 18 and slope2 == 1):
                        
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5)) 
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condicao 2 1 2 e peso > 18    
            elif (wind2 ==  2  and reversor == 1 and weight > 18 and slope2 == 2):
                        
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + 84 + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                    
            #condicao 2 1 2 e peso < 18    
            elif (wind2 ==  2  and reversor == 1 and weight < 18 and slope2 == 2):
                        
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) + (102 * slope)/100 + ((98 * vap)/5) + 84)
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 2 1 1 e peso > 18    
            elif (wind2 ==  2  and reversor == 1 and weight < 18 and slope2 == 1):
                        
                calculo = (1009 + ((41 * qtdAcima)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + 84 + ((150*qtdAcima)))
                        
                print ("Sera necessario: ", calculo, "mts para pousar")
                        
            #condicao 2 1 1 e peso < 18    
            elif (wind2 ==  2  and reversor == 1 and weight < 18 and slope2 == 1):
                        
                calculo = (1009 - ((40 * qtdAbaixo)/1) + ((27 * alt)/1000) + ((20 * temp)/5)
                + ((94 * wind)/5) - (6 * slope)/100 + ((98 * vap)/5) + 84)
                            
            print ("Sera necessario: ", calculo, "mts para pousar")
            
        else:
            print("escolha uma opção válida!")         
    else:
        print("escolha uma opção válida!")           
else:
    print("escolha uma opção válida!")