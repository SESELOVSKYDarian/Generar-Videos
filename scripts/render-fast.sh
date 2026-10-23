#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p output
ffmpeg -hide_banner -loglevel error -threads 2 -i public/spotvideo.mp4 -filter_complex_threads 2 -filter_complex '[0:v]split=2[bg][fg];[bg]scale=270:480:force_original_aspect_ratio=increase,crop=270:480,gblur=sigma=12,scale=1080:1920,eq=brightness=-0.04:contrast=0.65[blur];[fg]scale=1080:-2[front];[blur][front]overlay=(W-w)/2:(H-h)/2,setsar=1[v]' -map '[v]' -map 0:a:0 -c:v libx264 -preset fast -crf 18 -threads 2 -c:a aac -b:a 192k -t 75 -pix_fmt yuv420p -movflags +faststart -y output/spot-9x16.mp4
