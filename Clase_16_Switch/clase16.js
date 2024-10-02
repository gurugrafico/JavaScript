var signo = prompt('¿Cuál es tu signo?')

switch(signo) {
    case 'Aries':
        console.log('ARIES: Busca la armonía dentro de ti, así comprobarás que todo marcha bien y podrás alejar la inseguridad que algunas veces se apodera de ti. Hoy podrías conocer a una persona que te impactará significativamente y con la que podrías llegar a tener una relación muy profunda a nivel de romance o de amistad.')
        break
    case 'Tauro':
        console.log('TAURO: Si quieres vivir sin angustias, empieza a ser consciente de la necesidad de ahorrar y de cuidar lo que tienes, así no te preocupas tanto. Se aproxima una época en la que tendrás demasiadas oportunidades para conocer personas y relacionarte de distintas formas con ellas.')
        break
    case 'Géminis':
    case 'Geminis':
    case 'géminis':
    case 'geminis':
        console.log('GÉMINIS: El día comienza con incertidumbre y alguna preocupación por noticias que llegan y que se relacionan con la salud de alguno de tus familiares. Alguien que está cerca de ti necesita que lo escuches y le des un buen consejo, debes estar atento, pues esa persona no se atreve a pedir ayuda.')
        break
    case 'Cáncer':
        console.log('CÁNCER: Hoy los astros te regalan su máxima energía y te ubican en la mejor posición para hacer elecciones que te favorezcan en todo aspecto; debes estar muy atento a todo lo que llegue y encauzar cada cosa como mejor te convenga. Necesitas salir y dejar que Cupido haga lo suyo para acercar a ti esa persona especial que esperas.')
        break
    case 'Leo':
        console.log('LEO: Hoy, podrías enfrentar momentos difíciles que, incluso, podrían llegar a quebrar tu ánimo. ¡No des pie atrás, sigue luchando! El amor y la pasión te dan momentos inolvidables, que debes disfrutar a plenitud, pero para ello es necesario disponer tiempo para compartir con tu pareja.')
        break
    case 'Virgo':
        console.log('VIRGO: La exagerada meticulosidad y exigencia de parte tuya en todo lo que haces retrasan todas las cosas y podrían no permitirte llegar a las metas trazadas; es importante tomar otra actitud frente a esos temas. Piensa que siempre se puede mejorar, pero en algún punto hay que parar, para luego poder continuar.')
        break
    case 'Libra':
        console.log('LIBRA: Es una etapa en que tu mente se despeja y puedes aplicar tu inteligencia con seguridad y destreza en todo lo que haces, respecto al campo laboral y profesional. En estos tiempos los amigos activan tu vida social y es posible que la falta de descanso agote tus energías; ten cuidado.')
        break
    case 'Escorpión':
        console.log('ESCORPIÓN: Época propicia para entregar tus conocimientos a quienes están ávidos de estos y para darte a conocer con la calidad humana que tienes. Ten presente que los viajes te abren las puertas del éxito. Es posible que Cupido haga de las suyas y que te lleguen a tu vida muchos romances.')
        break
    case 'Sagitario':
        console.log('SAGITARIO: Algunas pequeñas complicaciones se prevén en el sector del trabajo; no te afanes, actúa con inteligencia y diplomacia para que puedas sacar buen fruto de lo adverso y ayudar a tus compañeros a dar claridad sobre lo que se llegue a presentar.')
        break
    case 'Capricornio':
        console.log('CAPRICORNIO: Hoy debes dedicar un poco de tiempo a tu vida interior, medita y reflexiona sobre lo que acontece en tu vida y así podrás ser más asertivo en tus comportamientos y actitudes. Es hora de sacar a flote el ser amoroso que llevas dentro; así podrás acercarte con facilidad a quienes te aman y creen en ti.')
        break
    case 'Acuario':
        console.log('ACUARIO: Si constantemente luchas por tu libertad de expresión, debes ser consistente y expresar lo que sientes cuando tienes la oportunidad de hacerlo, ¡callar no necesariamente evita conflictos! Es posible que tengas la oportunidad de realizar un viaje en el futuro próximo.')
        break
    default:
        console.log('No es un signo zodiacal válido')
        break
}