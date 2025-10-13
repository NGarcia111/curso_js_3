palabra = "hola"
abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
posiciones = 19
encriptado = ""
for i in palabra:
    j = abecedario.index(i)
    j += posiciones 
    if j >= len(abecedario):
        j -= len(abecedario)
    encriptado += abecedario[j]
print(encriptado)