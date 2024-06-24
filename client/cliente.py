import requests
base_url = "http://localhost:3000/"

#endpoints

def registrar_usuario(nombre, email, clave, descripcion):
    url=f"{base_url}/api/registrar"
    payload = {
        "nombre": nombre,
        "email": email,
        "clave": clave,
        "descripcion": descripcion,
    }
    response = requests.post(url,json=payload)
    return response.json()

def bloquear_usuario(email, clave, correo_bloquear):
    url=f"{base_url}/api/bloquear"
    payload = {
        "email": email,
        "clave": clave,
        "correo_bloquear": correo_bloquear,
    }
    response = requests.post(url,json=payload)
    return response.json

def informacion_usuario():
    return

def marcar_correo():
    return

def desmarcar_correo():
    return


#Interfaz

print("[--]     Bienvenido a CommuniKen     [--]")
print("[--]                                 [--]")
print("[--]    Seleccione una opcion        [--]")
print("[--]    para continuar:              [--]")
print("[--]_________________________________[--]")
print("")
print("")