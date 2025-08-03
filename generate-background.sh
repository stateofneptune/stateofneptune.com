PROGRAM="generate-background.sh"

DEFAULT_QUALITY=70

function usage {
  cat \
<<-EOF
Usage: $PROGRAM [OPTIONS] INPUT [OUT_BASENAME]

OPTIONS
  -s, --scale        set output scale ratio in w:h format.
  -q, --quality      set output compression quality. Defaults to 70.
  -h, --help         print this help message
EOF
}

function die {
  echo "$*" >&2

  exit 1
}

function main {
  if ! command -v ffmpeg >/dev/null; then
    die "$PROGRAM: error - could not locate ffmpeg in PATH"
  fi

  if ! options=$(getopt -o "hs:q:" -l "help,scale:,quality:" -- "$@"); then
    usage; die
  fi

  eval set -- "$options"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      -h|--help)
        usage
        exit 0;;

      -s|--scale)
        local scale="${2}"
        shift 2;;

      -q|--quality)
        local quality="${2}"
        shift 2;;

      --)
        shift
        break;;

      -*)
        die "$PROGRAM: error - unrecognized option $1";;
    esac
  done

  if [[ -z "$1" ]]; then
    usage; die "$PROGRAM: error - missing input image"
  fi

  local input_image="$1"

  local strip_path="${input_image##*/}"
  local strip_ext="${strip_path%.*}"

  local basename="${2:-$strip_ext}"

  quality=${quality:-$DEFAULT_QUALITY}

  local ffmpeg_opts=("-i '$input_image'")

  if [[ -n "$scale" ]]; then
    ffmpeg_opts+=("-vf scale=${scale}")
  fi

  if [[ -n "$quality" ]]; then
    ffmpeg_opts+=("-quality $quality")
  fi

  local fullpath="$(dirname $0)/public/images/backgrounds/$basename.webp"

  ffmpeg_opts+=("-vcodec webp -y" "'$fullpath'")

  eval ffmpeg "${ffmpeg_opts[@]}" >/dev/null 2>&1 \
    && echo "Written $fullpath"
}

main "$@"
