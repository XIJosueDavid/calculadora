function mostrarFormulario() {
    const tipo = document.getElementById("calculoSeleccionado").value;
    const form = document.getElementById("formulario");
    form.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    if (tipo === "velocidad") {
        form.innerHTML = `
            <label>Distancia en metros (d): <input type="number" id="d" step="any"></label>
            <label>Tiempo en segundos (t): <input type="number" id="t" step="any"></label>
            <button type="button" onclick="calcularVelocidad()">Calcular</button>
        `;
    } else if (tipo === "aceleracion") {
        form.innerHTML = `
            <label>Velocidad en m/s (v): <input type="number" id="v" step="any"></label>
            <label>Tiempo en segundos (t): <input type="number" id="t" step="any"></label>
            <button type="button" onclick="calcularAceleracion()">Calcular</button>
        `;
    } else if (tipo === "fuerza") {
        form.innerHTML = `
            <label>Masa en kg (m): <input type="number" id="m" step="any"></label>
            <label>Aceleracion en m/s² (a): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularFuerza()">Calcular</button>
        `;
    } else if (tipo === "trabajo") {
        form.innerHTML = `
            <label>Fuerza en Newtons (f): <input type="number" id="f" step="any"></label>
            <label>Magnitud del desplazamiento en metros (d): <input type="number" id="d" step="any"></label>
            <label>Angulo en radianes (x): <input type="number" id="x" step="any"></label>
            <button type="button" onclick="calcularTrabajo()">Calcular</button>
        `;
    }  else if (tipo === "cinetica") {
        form.innerHTML = `
            <label>masa en kg (m): <input type="number" id="m" step="any"></label>
            <label>Velocidad en m/s (v): <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularEnergiaCinetica()">Calcular</button>
        `;
    } else if (tipo === "epgravitatoria") {
        form.innerHTML = `
            <label>masa en kg (m): <input type="number" id="m" step="any"></label>
            <label>Altura en m (h): <input type="number" id="h" step="any"></label>
            <button type="button" onclick="calcularEnergiaPotencialGravitatoria()">Calcular</button>
        `;
    } else if (tipo === "densidad") {
        form.innerHTML = `
            <label>Masa en kg (m): <input type="number" id="m" step="any"></label>
            <label>Volumen en m³ (v): <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularDensidad()">Calcular</button>
        `;
    } else if (tipo === "presion") {
        form.innerHTML = `
            <label>Fuerza en Newtons (f): <input type="number" id="f" step="any"></label>
            <label>Area en m² (a): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularPresion()">Calcular</button>
        `;
    } else if (tipo === "cargaelectrica") {
        form.innerHTML = `
            <label>Corriente en Amperios (i): <input type="number" id="i" step="any"></label>
            <label>Tiempo en segundos (t): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularCargaElectrica()">Calcular</button>
        `;
    } else if (tipo === "leyohm") {
        form.innerHTML = `
            <label>Corriente en Amperios (i): <input type="number" id="i" step="any"></label>
            <label>Resistencia electrica en Ohmios (r): <input type="number" id="r" step="any"></label>
            <button type="button" onclick="calcularLeydeHom()">Calcular</button>
        `;
    }
}

function calcularVelocidad() {
    const d = parseFloat(document.getElementById("d").value);
    const t = parseFloat(document.getElementById("t").value);
    if (d < 0) {
        document.getElementById("resultado").innerText = "Error: La distancia no puede ser negativa.";
    } else if (t < 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser negativa.";
    } else {
       const resultado =d/t;
    document.getElementById("resultado").innerText = `La velocidad es de: ${resultado.toFixed(2)} m/s`;
    }
}

function calcularAceleracion() {
    const v = parseFloat(document.getElementById("v").value);
    const t = parseFloat(document.getElementById("t").value);
    if (v < 0) {
        document.getElementById("resultado").innerText = "Error: La velocidad no puede ser negativa.";
    } else if (t < 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser negativo.";
    } else {
    const resultado = v / t;
    document.getElementById("resultado").innerText = `La aceleracion es: ${resultado.toFixed(2)} m/s²`;
    }

}

function calcularFuerza() {
    const m = parseFloat(document.getElementById("m").value);
    const a = parseFloat(document.getElementById("a").value);
    if (m < 0) {
        document.getElementById("resultado").innerText = "Error: La masa no puede ser negativa.";
    } else if (a < 0) {
        document.getElementById("resultado").innerText = "Error: La aceleración no puede ser negativa.";
    } else {
        const resultado = m * a;
        document.getElementById("resultado").innerText = `La fuerza es de: ${resultado.toFixed(2)} Newtons`;
    }}

function calcularTrabajo() {
    const f = parseFloat(document.getElementById("f").value);
    const d = parseFloat(document.getElementById("d").value);
    if (f < 0) {
        document.getElementById("resultado").innerText = "Error: La fuerza no puede ser negativa.";
    } else if (d < 0) {
        document.getElementById("resultado").innerText = "Error: La magnitud no puede ser negativa.";
    } else {
    let x = parseFloat(document.getElementById("x").value);
    const resultado = f * d * Math.cos(x);
    document.getElementById("resultado").innerText = `El trabajo es de: ${resultado.toFixed(3)} Julios`;
    }
    
}

function calcularEnergiaCinetica() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    if (m < 0) {
        document.getElementById("resultado").innerText = "Error: La masa no puede ser negativa.";
    } else if (v < 0) {
        document.getElementById("resultado").innerText = "Error: La velocidad no puede ser negativa.";
    } else {
    const resultado = ((1/2) * m * v * v);
    document.getElementById("resultado").innerText = `La energia cinetica es: ${resultado.toFixed(2)} Julios`;
    }
    
}

function calcularEnergiaPotencialGravitatoria() {
    const m = parseFloat(document.getElementById("m").value);
    const h = parseFloat(document.getElementById("h").value);
    if (m < 0) {
        document.getElementById("resultado").innerText = "Error: La masa no puede ser negativa.";
    } else if (h < 0) {
        document.getElementById("resultado").innerText = "Error: La altura no puede ser negativa.";
    } else {
    const resultado = (m*h*9.8);
    document.getElementById("resultado").innerText = `La energia potencial gravitatoria es de: ${resultado.toFixed(2)} Julios`;
    }
    
}

function calcularDensidad() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    if (m < 0) {
        document.getElementById("resultado").innerText = "Error: La masa no puede ser negativa.";
    } else if (v < 0) {
        document.getElementById("resultado").innerText = "Error: El volumen no puede ser negativo.";
    } else {
    const resultado = (m/v);
    document.getElementById("resultado").innerText = `La densidad es de: ${resultado.toFixed(2)} kg/m³`;
    }
    
}

function calcularPresion() {
    const f = parseFloat(document.getElementById("f").value);
    const a = parseFloat(document.getElementById("a").value);
    if (f < 0) {
        document.getElementById("resultado").innerText = "Error: La fuerza no puede ser negativa.";
    } else if (a < 0) {
        document.getElementById("resultado").innerText = "Error: El area no puede ser negativa.";
    } else {
    const resultado = (f/a);
    document.getElementById("resultado").innerText = `La presion es de: ${resultado.toFixed(2)} Pascales`;
    }
    
}

function calcularCargaElectrica() {
    const i = parseFloat(document.getElementById("i").value);
    const t = parseFloat(document.getElementById("a").value);
    if (i < 0) {
        document.getElementById("resultado").innerText = "Error: La corriente electrica no puede ser negativa.";
    } else if (t < 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser negativo.";
    } else {
    const resultado = (i*t);
    document.getElementById("resultado").innerText = `La carga electrica es de: ${resultado.toFixed(2)} Coulombs`;
    }
    
}

function calcularLeydeHom() {
    const i = parseFloat(document.getElementById("i").value);
    const r = parseFloat(document.getElementById("r").value);
    if (i < 0) {
        document.getElementById("resultado").innerText = "Error: La corriente electrica no puede ser negativa.";
    } else if (r < 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser negativo.";
    } else {
    const resultado = (i*r);
    document.getElementById("resultado").innerText = `El resultado es de: ${resultado.toFixed(2)} Coulombs`;
    }
    
}
