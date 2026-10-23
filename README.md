# SPOT · video vertical

Adaptación del video original a 1080 × 1920, 30 fps y 75 segundos. Conserva el encuadre horizontal completo y el audio, con una copia ampliada y desenfocada como fondo vertical.

## Uso

Requiere Node.js y Chromium. Colocar el original en `public/spotvideo.mp4`.

```sh
npm ci --cache /workspace/.npm-cache
npm run studio -- --browser-executable /usr/bin/chromium
npm run render -- --browser-executable /usr/bin/chromium
```

Composición editable: `src/index.jsx`. Resultado: `output/spot-9x16.mp4`.

El repositorio incluye el video original en `public/spotvideo.mp4`, el MP4 final en `output/spot-9x16.mp4` y una vista previa en `output/preview-final.jpg`. Los renders auxiliares y las dependencias se excluyen de Git. HyperFrames de HeyGen (`hyperframes` 0.8.189) está instalado como herramienta adicional. Ejecutar `npx hyperframes --help` para consultar sus comandos. El render de esta adaptación se realiza con Remotion 4.0.538.

## Exportación rápida

`npm run render:fast` genera la adaptación con FFmpeg: original centrado, fondo desenfocado y audio. Este es el método usado para el MP4 entregado. Remotion proporciona la composición editable y una alternativa de renderizado más lenta en esta máquina.
