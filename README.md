# MLX Whisper WebUI (Pinokio Installer)

One-click installer for **MLX Whisper** on macOS. This version is a highly modified fork designed to fix common issues with hallucinations and translation on Apple Silicon.

### ✨ Key Features
- **Video URL Support:** Paste links from YouTube, TikTok, X (Twitter) directly.
- **Multi-Model Support:** Switch between `Turbo` (Fastest) and `Large/Medium` (Best for Translation).
- **Fixed Hallucinations:** Custom UI prevents the "Chinese audio turns into Japanese text" bug.
- **Optimized for Mac:** Runs locally using Apple's MLX framework.

### 📥 Installation
1. Install [Pinokio](https://pinokio.computer/).
2. Click **"Download from URL"**.
3. Paste: `https://github.com/dadleo/mlx-whisper-webui-pinokio`
4. Click **Install**.

### 🛠 User Guide & Tips (samples on Chinese, same behaviour on other languages)

| Goal | Audio | Settings to Use |
| :--- | :--- | :--- |
| **Transcribe Chinese** | Chinese | **Model:** Turbo <br> **Lang:** `zh` <br> **Task:** Transcribe |
| **Translate to English** | Chinese | **Model:** Medium or Large *(Turbo often fails this)* <br> **Lang:** `zh` <br> **Task:** Translate |
| **Force Traditional** | Chinese | **Prompt:** `以下是繁體中文。` |
| **Download Video** | YouTube/URL | Use the **"Paste URL"** tab. |

### ⚠️ Note on Translation
If you select **Task: Translate**, Whisper will *always* output English text. It cannot translate English audio into Chinese text.
