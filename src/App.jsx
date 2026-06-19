// Código inicial (contador básico)
import { useState } from 'react';
function MiContador() {
const [count, setCount] = useState(0);
const incrementar = () => setCount(count + 1);
return (
<div style={{ textAlign: 'center' }}>
<h3>Valor actual: {count}</h3>
¡Usa este punto de partida para completar la actividad! →

→

→

<h3>Valor actual: {count}</h3>
<button onClick={incrementar}>
Incrementar</button>
</div>
);
}

export default MiContador;