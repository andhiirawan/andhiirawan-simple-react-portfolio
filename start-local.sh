#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js 18+ dan npm diperlukan. Pasang versi LTS, lalu jalankan kembali ./start-local.sh." >&2
  exit 1
fi

NODE_MAJOR="$(node -p 'Number(process.versions.node.split(".")[0])')"
if (( NODE_MAJOR < 18 )); then
  echo "Node.js 18 atau lebih baru diperlukan; versi terdeteksi: $(node --version)" >&2
  exit 1
fi

if [[ ! -x "$ROOT/node_modules/.bin/vite" ]]; then
  echo "Memasang dependency dari package-lock.json..."
  npm ci
fi

echo "Portofolio tersedia di http://localhost:5173/"
echo "Tekan Ctrl+C untuk menghentikan server."
exec "$ROOT/node_modules/.bin/vite" --host 127.0.0.1 --port 5173 --strictPort
