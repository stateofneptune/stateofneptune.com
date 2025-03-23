RESOLUTIONS=('210' '420' '640' '720' '890' '1080')
DEFAULT_COMPRESSION_QUALITY=70
DEFAULT_BASENAME=untitled

function _help {
  cat \
<<-EOF
Usage: generate-artwork.sh INPUT [OUT_BASENAME] [QUALITY]

EOF
}

function main {
  if ! command -v ffmpeg; then
    echo "$0: Could not locate ffmpeg in PATH"
    exit 1
  fi

  if [[ -z "$1" ]]; then
    _help
    exit 1
  fi

  local input_image=$1
  local basename=${2:-$DEFAULT_BASENAME}
  local quality=${3:-$DEFAULT_COMPRESSION_QUALITY}

  for (( i = 0; i < ${#RESOLUTIONS[@]}; i++)); do
    ffmpeg -i "$input_image" -vf scale=${RESOLUTIONS[$i]}:${RESOLUTIONS[$i]} \
        -quality $quality -vcodec webp ./public/images/artworks/$basename@${RESOLUTIONS[$i]}.webp -y >/dev/null 2>&1 \
      && echo "Written ./public/images/artworks/$basename@${RESOLUTIONS[$i]}.webp"
  done
}

main "$@"
