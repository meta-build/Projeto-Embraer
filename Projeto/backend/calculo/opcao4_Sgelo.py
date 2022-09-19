print("option selected: GOOD TO MEDIUM")
REF = 18000
c = 1357
weight = float(input("Weight: "))
r = weight - REF
if weight > 18000:
    soma = 0
    while r >= 1000:
        r = r - 1000
        soma = soma - 58
    t1 = (c + soma)
    print(f't1 = {t1}')

else:
    soma = 0
    while r >= 1000:
        r = r - 1000
        soma = 59 + soma
    t2 = (c + soma)
    print(f't2 = {t2}')

Solo = float(input("Distance from land: "))
soma = 0
while Solo2 >= 1000:
    Solo2 = Solo2 - 1000
    soma = soma + 41
t3 = soma
print(f'land = {t3}')

ISA = float(input("Value ISA(°C): "))
if ISA >= 5:
    soma = 0
    ISA2 = ISA
    while ISA2 >= 5:
        ISA2 = ISA2 - 5
        soma = soma + 40
    t4 = soma
    print(f'ISA = {t4}')

if ISA2 < 5 and ISA2 >=0:
    print("ISA = 0")
else:
    while ISA2 <= -5:
        ISA2 = ISA2 + 5
        soma = soma - 15
    t5 = soma
    print(f'ISA = {t5}')

option = 0
print(''' 
[1] - head wind
[2] - tail wind''')
option = int(input("Choose wind option: "))
if option == 2:
    print("option selected: tail wind")
    wind = float(input("Value WIND(kt): "))
    soma = 0
    wind2 = wind
    while wind2 >= 5:
        wind2 = wind2 - 5
        soma = soma + 161
    t6 = soma
    print(f'wind = {t6}')
elif option == 1:
    print("option selected: head wind")
    wind = float(input("Value WIND(kt): "))
    wind3 = wind
    if wind3 < 5 and wind3 >= 0:
        print("wind = 0")
    else:
        soma = 0
        while wind3 <= -5:
            wind3 = wind3 + 5
            soma = soma - 34
        t7 = soma
        print(f'wind = {t7}')

option = 0
print(''' 
[1] - uphill
[2] - downhill''')
option = int(input("Choose slope option: "))
if option == 2:
    print("option selected: downhill")
    slope = float(input("Value SLOPE(%): "))
    soma = 0
    slope2 = slope/100
    while slope2 >= (1/100):
        slope2 = slope2 - (1/100)
        soma = soma + 238
    t8 = soma
    print(f'Slope = {t8}')
elif option == 1:
    print("option selected: uphill")
    slope = float(input("Value SLOPE(%): "))
    slope3 = slope
    if slope3 == 0:
        print("wind = 0")
    elif slope3 == (1/100):
        print("slope = -19")
    else:
        soma = 0
        while slope3 <= -(1/100):
            slope3 = slope3 - (1/100)
            soma = soma - 19
        t9 = soma
        print(f'Slope = {t9}')

vap = float(input("Value VAP: "))
vap2 = vap
if vap2 >= 5:
    soma = 0
    while vap2 >= 5:
        vap2 = vap2 - 5
        soma = soma + 126
    t10 = soma
    print(f'vap = {t10}')
else:
    t11 = 0

option2 = 0
print('''rev on?:
[1] - yes
[2] - no''')
option2 = int(input("rev on?: "))
if option2 == 1:
    print("option selected: rev on!")
    rev = 515
else:
    print("option selected: rev off!")

if weight > 18000 and ISA >= 5 and wind >= 5 and slope >= (1/100) and vap >= 5 and option2 == 1:
    calculo1 = (t1 + t3 + t4 + t6 + t8 + t10 + rev)
    print(f'O valor da pista é: {calculo1} metros')
elif weight > 18000 and ISA >= 5 and wind >= 5 and slope >= (1/100) and vap >= 5 and option2 == 2:
    calculo2 = (t1 + t3 + t4 + t6 + t8 + t10)
    print(f'O valor da pista é: {calculo2} metros')
elif weight < 18000 and ISA < 5 and wind < 5 and slope <= -(1/100) and vap <= 5 and option2 == 1:
    calculo3 = (t2 + t5 + t7 + t9 + t3 + t11 + rev)
    print(f'O valor da pista é(m): {calculo3} metros')
elif weight < 18000 and ISA <= 5 and wind <= 5 and slope <= (1/100) and vap <= 5 and option2 == 2:
    calculo4 = (t2 + t5 + t7 + t9 + t3 + t11)
    print(f'O valor da pista é(m): {calculo4} metros')


else:
    print('erro')